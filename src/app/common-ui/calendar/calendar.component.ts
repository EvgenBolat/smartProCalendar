import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  InputSignal,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { DateTime, Interval } from 'luxon';
import { CalendarService } from '../../data/services/calendar-service.service';
import { DayEvent } from '../../data/interfaces/event.interface';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  calendarService = inject(CalendarService);
  today: Signal<DateTime> = signal(DateTime.local());

  subscribes: any[] = [];

  activeDay: WritableSignal<DateTime | null> = signal(null);

  events: WritableSignal<DayEvent[]> = signal([]);

  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(
    this.today().startOf('month')
  );

  weekDays: Signal<string[]> = signal([
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс',
  ]);

  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week')
    )
      .splitBy({ days: 1 })
      .map((d) => {
        if (d.start === null) {
          throw new Error('wrong dates');
        }
        return d.start;
      });
  });

  datesWithEvents: string[] = [];

  goToPreviousMonth() {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().minus({ months: 1 })
    );
  }
  goToNextMonth() {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().plus({ months: 1 })
    );
  }

  getDatesWithEvents() {
    return this.calendarService.getDatesWithEvents();
  }

  activeDayHandler(day: DateTime) {
    this.activeDay.set(day);
    this.subscribes.push(
      this.calendarService
        .getEvents(day.toFormat('dd-MM-yyyy'))
        .subscribe((events) => {
          this.events.set([...events]);
        })
    );
    return;
  }

  setNotification(date: string){
    this.subscribes.push(
      this.calendarService.setNotification(date).subscribe(() => {})
    );
  }

  removeNotification(date: string) {
    this.subscribes.push(
      this.calendarService.removeNotification(date).subscribe(() => {})
    );
    }

  constructor() {
    this.calendarService.getDatesWithEvents().subscribe((datesWithEvents) => {
      this.datesWithEvents = datesWithEvents;
    });
  }

  ngOnDestroy() {
    this.subscribes.forEach((sub) => sub.unsubscribe());
  }
}
