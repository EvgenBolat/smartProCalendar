package com.example.demo.features.db.entities

import jakarta.persistence.*

@Entity
@Table(name = "events")
data class DayEvent(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null,
    var name: String,
    var date: String,
    var description: String,
    var project: String,
    val author: String,
    @Column(name = "hasnotification")
    val hasNotification: Boolean
)