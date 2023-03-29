package com.example.Group17.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "weight")
@EntityListeners(AuditingEntityListener.class)
public class Weight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int weightID;

    @NotNull
    private int userID;

    @NotNull
    private String date;

    @NotNull
    private double weight;

    // Constructor, getters and setters

    public Weight() {
    }

    public Weight(int userID, String date, double weight) {
        this.userID = userID;
        this.date = date;
        this.weight = weight;
    }

    public int getWeightID() {
        return weightID;
    }

    public void setWeightID(int weightID) {
        this.weightID = weightID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

}