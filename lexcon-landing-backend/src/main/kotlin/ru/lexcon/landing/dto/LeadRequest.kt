package ru.lexcon.landing.dto

import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Size

data class LeadRequest(
    @field:NotBlank(message = "Имя обязательно")
    @field:Size(max = 75, message = "Имя слишком длинное")
    val name: String,

    @field:Size(max = 30, message = "Контакт слишком длинный")
    val phone: String?,

    @field:Email(message = "Некорректный email")
    val email: String?,

    @field:NotBlank(message = "Сообщение обязательно")
    @field:Size(max = 750, message = "Сообщение слишком длинное")
    val message: String
)