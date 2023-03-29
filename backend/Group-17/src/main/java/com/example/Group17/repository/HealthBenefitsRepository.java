package com.example.Group17.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.Group17.model.HealthBenefits;

import java.util.List;

public interface HealthBenefitsRepository extends CrudRepository<HealthBenefits, Long> {

    List<HealthBenefits> findAll();
    
}
