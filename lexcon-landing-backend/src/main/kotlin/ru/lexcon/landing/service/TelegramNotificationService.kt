package ru.lexcon.landing.service

import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import ru.lexcon.landing.config.TelegramProperties
import ru.lexcon.landing.dto.LeadRequest

@Service
class TelegramNotificationService(
    private val telegramProperties: TelegramProperties
) {
    private val log = LoggerFactory.getLogger(javaClass)
    private val restTemplate = RestTemplate()

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