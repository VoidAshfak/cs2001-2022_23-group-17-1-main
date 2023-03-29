package com.example.Group17.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

import java.util.List;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "ingredients")
@EntityListeners(AuditingEntityListener.class)
public class Ingredients {
    @Id
    private int id;
    private String name;
    private String cate;
    private String per;
    private String urlImage;
    private String calo;
    private String fat;
    private String sodium;
    private String carbo;
    private String fiber;
    private String sugar;
    private String protein;
    @ManyToMany
    @JoinTable(
        name = "ingredient_healthBenefits",
        joinColumns = @JoinColumn(name = "ingredient_id"),
        inverseJoinColumns = @JoinColumn(name = "health_benefit_id"))
    private List<HealthBenefits> healthBenefits;
    
    public Ingredients() {}

    public Ingredients(int id, String name, String cate, String per, String urlImage, String calo,
                      String fat, String sodium, String carbo, String fiber, String sugar, String protein, List<HealthBenefits> healthBenefits) {
        this.id = id;
        this.name = name;
        this.cate = cate;
        this.per = per;
        this.urlImage = urlImage;
        this.calo = calo;
        this.fat = fat;
        this.sodium = sodium;
        this.carbo = carbo;
        this.fiber = fiber;
        this.sugar = sugar;
        this.protein = protein;
        this.healthBenefits = healthBenefits;
    }

    public int getId() {
        return id;
    }

    public void setID(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCate() {
        return cate;
    }

    public void setCate(String cate) {
        this.cate = cate;
    }

    public String getPer() {
        return per;
    }

    public void setPer(String per) {
        this.per = per;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
         this.urlImage = urlImage;
    }

    public String getCalo() {
        return calo;
    }

    public void setCalo(String calo) {
        this.calo = calo;
    }

    public String getFat() {
        return fat;
    }

    public void setFat(String fat) {
        this.fat = fat;
    }

    public String getSodium() {
        return sodium;
    }

    public void setSodium(String sodium) {
        this.sodium = sodium;
    }

    public String getCarbo() {
        return carbo;
    }

    public void setCarbo(String carbo) {
        this.carbo = carbo;
    }

    public String getFiber() {
        return fiber;
    }

    public void setFiber(String fiber) {
        this.fiber = fiber;
    }

    public String getSugar() {
        return sugar;
    }

    public void setSugar(String sugar) {
        this.sugar = sugar;
    }

    public String getProtein() {
        return protein;
    }

    public void setProtein(String protein) {
        this.protein = protein;
    }

    public List<HealthBenefits> getHealthBenefits() {
        return healthBenefits;
    }

    public void setHealthBenefits(List<HealthBenefits> healthBenefits) {
        this.healthBenefits = healthBenefits;
    }
}
