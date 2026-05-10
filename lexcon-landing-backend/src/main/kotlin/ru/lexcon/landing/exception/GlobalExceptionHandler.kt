package ru.lexcon.landing.exception

import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class GlobalExceptionHandler {

    private val logger = LoggerFactory.getLogger(GlobalExceptionHandler::class.java)

    @ExceptionHandler(MethodArgumentNotValidException::class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    fun handleValidationException(
        exception: MethodArgumentNotValidException
    ): Map<String, String> {

        val message = exception.bindingResult
            .fieldErrors
            .firstOrNull()
            ?.defaultMessage
            ?: "Ошибка валидации"

        logger.info(exception.message)

        return mapOf(
            "message" to message
        )
    }
}