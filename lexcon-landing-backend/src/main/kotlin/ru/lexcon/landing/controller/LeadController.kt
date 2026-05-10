package ru.lexcon.landing.controller

import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import ru.lexcon.landing.dto.LeadRequest
import ru.lexcon.landing.service.LeadService

@RestController
@RequestMapping("/api/leads")
class LeadController(
    private val leadService: LeadService
) {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun createLead(@Valid @RequestBody request: LeadRequest) {
        leadService.createLead(request)
    }
}