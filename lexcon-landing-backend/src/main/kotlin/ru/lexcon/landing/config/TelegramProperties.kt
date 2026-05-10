package ru.lexcon.landing.config

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "telegram")
data class TelegramProperties(
    val botToken: String,
    val chatId: String
)