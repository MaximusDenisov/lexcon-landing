package ru.lexcon.landing.service

import org.slf4j.LoggerFactory
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.scheduling.annotation.Async
import org.springframework.stereotype.Service
import ru.lexcon.landing.config.EmailProperties
import ru.lexcon.landing.dto.LeadRequest

@Service
class EmailNotificationService(
    private val mailSender: JavaMailSender,
    private val emailProperties: EmailProperties
) {
    private val log = LoggerFactory.getLogger(javaClass)

    @Async
    fun sendLeadNotification(request: LeadRequest) {
        try {
            val message = SimpleMailMessage().apply {
                setTo(*emailProperties.recipients.toTypedArray())
                subject = "📩 Новая заявка с сайта"

                val emailLine = request.email
                    ?.takeIf { it.isNotBlank() }
                    ?.let { "\n                    ✉️ Email: $it" }
                    ?: ""

                text = """
                    📩 Новая заявка с сайта
                
                    👤 Имя: ${request.name}
                    📞 Контакт: ${request.phone.orEmpty()}$emailLine
                
                    💬 Сообщение:
                    ${request.message}
                """.trimIndent()
            }

            mailSender.send(message)

            log.info("Email notification sent successfully")
        } catch (exception: Exception) {
            log.error("Failed to send email notification", exception)
        }
    }
}