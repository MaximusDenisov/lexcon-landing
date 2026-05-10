package ru.lexcon.landing

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.Async
import org.springframework.scheduling.annotation.EnableAsync
import ru.lexcon.landing.config.EmailProperties
import ru.lexcon.landing.config.TelegramProperties

@EnableAsync
@EnableConfigurationProperties(TelegramProperties::class, EmailProperties::class)
@SpringBootApplication
class LegalLandingBackendApplication

fun main(args: Array<String>) {
    runApplication<LegalLandingBackendApplication>(*args)
}
