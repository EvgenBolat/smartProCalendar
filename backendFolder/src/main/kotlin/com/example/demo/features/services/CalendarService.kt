package com.example.demo.features.services

import com.example.demo.features.db.entities.DayEvent
import com.example.demo.features.db.repositories.EventRepository
import org.springframework.stereotype.Service

@Service
class CalendarService(private val eventRepository: EventRepository) {
    fun getEvents(date: String): List<DayEvent> {
        return eventRepository.findByDate(date)
    }

    fun getDatesWithEvents(): List<String>? {
        return eventRepository.findAll().map { dayEvent -> dayEvent.date  }
    }

}