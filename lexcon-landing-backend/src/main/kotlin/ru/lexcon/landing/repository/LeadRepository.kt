package ru.lexcon.landing.repository

import org.springframework.data.jpa.repository.JpaRepository
import ru.lexcon.landing.entity.LeadEntity

interface LeadRepository : JpaRepository<LeadEntity, Long>