package com.example.demo.features.controllers

import com.example.demo.features.db.entities.DayEvent
import com.example.demo.features.services.CalendarService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("")
class CalendarController(val calendarService: CalendarService) {
    @GetMapping("/events/{date}")
    fun getEvents(@PathVariable date: String): ResponseEntity<List<DayEvent>> {
        return ResponseEntity.ok(calendarService.getEvents(date))
    }
    @GetMapping("/getDatesWithEvents")
    fun getDatesWithEvents(): ResponseEntity<List<String>>{
        return  ResponseEntity.ok(calendarService.getDatesWithEvents())
    }
    @GetMapping("/setNotification/{date}")
    fun setNotification(@PathVariable date: String): ResponseEntity<String>{
        return ResponseEntity.ok("Установлено уведомление по почте на $date")
    }

    @GetMapping("/removeNotification/{date}")
    fun removeNotification(@PathVariable date: String): ResponseEntity<String>{
        return ResponseEntity.ok("Отменено уведомление по почте на $date")
    }
}