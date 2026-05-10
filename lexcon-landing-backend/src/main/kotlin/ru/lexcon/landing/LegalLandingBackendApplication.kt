package ru.lexcon.landing

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
import ru.lexcon.landing.config.EmailProperties
import ru.lexcon.landing.config.TelegramProperties

@SpringBootApplication
@EnableConfigurationProperties(TelegramProperties::class, EmailProperties::class)
class LegalLandingBackendApplication

fun main(args: Array<String>) {
    runApplication<LegalLandingBackendApplication>(*args)
}
