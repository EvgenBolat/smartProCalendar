package com.example.demo.features.db.repositories


import com.example.demo.features.db.entities.DayEvent
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface EventRepository: JpaRepository<DayEvent, Long> {

    fun findByDate(date: String): List<DayEvent>
}