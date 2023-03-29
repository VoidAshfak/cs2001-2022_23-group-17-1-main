package com.example.Group17.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Group17.model.HealthBenefits;
import com.example.Group17.repository.HealthBenefitsRepository;

@RestController
public class HealthBenefitsController {

    @Autowired
    HealthBenefitsRepository healthBenefitsRepository;

    // Get all weights
    @GetMapping("/healthBenefits")
    public List<HealthBenefits> getAllIngredients() {
        return (List<HealthBenefits>) healthBenefitsRepository.findAll();
        // return "healthBenefits";
    }
}
