package ru.lexcon.landing.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "leads")
class LeadEntity(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(nullable = false, length = 100)
    var name: String = "",

    @Column(nullable = false, length = 100)
    var phone: String? = null,

    @Column(length = 100)
    var email: String? = null,

    @Column(nullable = false, columnDefinition = "TEXT")
    var message: String = "",

    @Column(name = "created_at", nullable = false)
    var createdAt: LocalDateTime = LocalDateTime.now()
)