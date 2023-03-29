package com.example.Group17.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ingredient_healthBenefits")
@EntityListeners(AuditingEntityListener.class)
public class Ingredients_HealthBenefits {

    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredients ingredient;

    @ManyToOne
    @JoinColumn(name = "health_benefit_id")
    private HealthBenefits healthBenefit;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Ingredients getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredients ingredient) {
        this.ingredient = ingredient;
    }

    public HealthBenefits getHealthBenefit() {
        return healthBenefit;
    }

    public void setHealthBenefit(HealthBenefits healthBenefit) {
        this.healthBenefit = healthBenefit;
    }
}
