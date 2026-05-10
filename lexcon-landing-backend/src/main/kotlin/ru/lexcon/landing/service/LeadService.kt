package ru.lexcon.landing.service

import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import ru.lexcon.landing.dto.LeadRequest
import ru.lexcon.landing.entity.LeadEntity
import ru.lexcon.landing.repository.LeadRepository

@Service
class LeadService(
    private val telegramNotificationService: TelegramNotificationService,
    private val emailNotificationService: EmailNotificationService,
    private val leadRepository: LeadRepository
) {
    private val log = LoggerFactory.getLogger(javaClass)

    fun createLead(request: LeadRequest) {
        log.info(
            "New lead received: name={}, phone={}, email={}, message={}",
            request.name,
            request.phone,
            request.email,
            request.message
        )

        if (request.phone.isNullOrBlank() && request.email.isNullOrBlank()) {
            throw IllegalArgumentException(
                "Укажите телефон, Telegram или email"
            )
        }

        val lead = LeadEntity(
            name = request.name,
            phone = request.phone,
            email = request.email,
            message = request.message
        )

        leadRepository.save(lead)
        telegramNotificationService.sendLeadNotification(request)
        emailNotificationService.sendLeadNotification(request)
    }
}