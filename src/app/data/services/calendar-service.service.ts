import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core';
import { DayEvent } from '../interfaces/event.interface'

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  http = inject(HttpClient);


  getEvents(date: String) {
    return this.http.get<DayEvent[]>(`http://localhost:8080/events/${date}`)
  }

  getDatesWithEvents() {
    return this.http.get<string[]>(`http://localhost:8080/getDatesWithEvents`)
  }

  setNotification(date: String) {
    return this.http.get(`http://localhost:8080/setNotification/${date}`)
  }

  removeNotification(date: string) {
    return this.http.get(`http://localhost:8080/removeNotification/${date}`)
  }

  constructor() { }
}
