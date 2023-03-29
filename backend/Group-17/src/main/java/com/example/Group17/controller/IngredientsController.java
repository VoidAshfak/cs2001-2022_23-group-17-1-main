package com.example.Group17.controller;

import com.example.Group17.model.HealthBenefits;
import com.example.Group17.model.Ingredients;
import com.example.Group17.repository.IngredientsRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IngredientsController {

    @Autowired
    IngredientsRepository ingredientsRepository;

    // Get all ingredients
    @GetMapping("/ingredients")
    public List<Ingredients> getAllIngredients() {
        return (List<Ingredients>) ingredientsRepository.findAll();
    }

    // Get ingredients by category
    @GetMapping("/ingredients/byCategory")
    public List<Ingredients> getIngredientsByCategory(@RequestParam String cate) {
        return ingredientsRepository.findByCate(cate);
    }

    // http://localhost:8080/ingredients/byCategory?cate=fruit
    // This will give me everything in the ingredients table that has a category of fruit

    @GetMapping("/ingredients/byName")
    public List<Ingredients> searchIngredientsByName(@RequestParam String search) {
        return ingredientsRepository.findByNameContainingIgnoreCase(search);
    }

    @GetMapping("/ingredients/{id}")
    public Ingredients getIngredient(@PathVariable(value = "id") int id) {
       return ingredientsRepository.findById(id);
    }

    @GetMapping("/ingredients/{id}/healthBenefits")
    public List<HealthBenefits> getHealthBenefitsForIngredient(@PathVariable(value = "id") int id) {
        Ingredients ingredient = ingredientsRepository.findById(id);
        if (ingredient != null) {
            return ingredient.getHealthBenefits();
        }
        return null;
    }
}
