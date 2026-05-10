package ru.lexcon.landing.config

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "email")
data class EmailProperties(
    val recipients: List<String>
)