package ru.lexcon.landing.service

import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Async
import org.springframework.stereotype.Service
import org.springframework.boot.restclient.RestTemplateBuilder
import ru.lexcon.landing.config.TelegramProperties
import ru.lexcon.landing.dto.LeadRequest
import java.time.Duration

@Service
class TelegramNotificationService(
    private val telegramProperties: TelegramProperties,
    restTemplateBuilder: RestTemplateBuilder
) {
    private val log = LoggerFactory.getLogger(javaClass)
    private val restTemplate = restTemplateBuilder
        .connectTimeout(Duration.ofSeconds(3))
        .readTimeout(Duration.ofSeconds(5))
        .build()

    @Async
    fun sendLeadNotification(request: LeadRequest) {
        try {
            val url = "https://api.telegram.org/bot${telegramProperties.botToken}/sendMessage"

            val emailLine = request.email
                ?.takeIf { it.isNotBlank() }
                ?.let { "\n                ✉️ Email: $it" }
                ?: ""

            val text = """
                📩 Новая заявка с сайта
            
                👤 Имя: ${request.name}
                📞 Контакт: ${request.phone}$emailLine

                💬 Сообщение:
                ${request.message}
            """.trimIndent()

            val body = mapOf(
                "chat_id" to telegramProperties.chatId,
                "text" to text
            )

            restTemplate.postForObject(url, body, String::class.java)

            log.info("Telegram notification sent successfully")
        } catch (exception: Exception) {
            log.error("Failed to send Telegram notification", exception)
        }
    }
}