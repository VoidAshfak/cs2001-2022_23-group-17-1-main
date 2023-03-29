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
@Table(name = "calories")
@EntityListeners(AuditingEntityListener.class)
public class Calories {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int caloriesID;

    @NotNull
    private int userID;

    @NotNull
    private double calories;

    @NotNull
    private double consumed;

    // Constructor, getters and setters
    public Calories() {
    }

    public Calories(int caloriesID, int userID, double calories, double consumed) {
        this.caloriesID = caloriesID;
        this.userID = userID;
        this.calories = calories;
        this.consumed = consumed;
    }

    public int getCaloriesID() {
        return caloriesID;
    }

    public void setCalorieID(int caloriesID) {
        this.caloriesID = caloriesID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }


   public double getCalories() {
       return calories;
   }

   public void setCalories(double calories) {
       this.calories = calories;
   }

   public double getConsumed() {
    return consumed;
   }

   public void setConsumed(double consumed) {
    this.consumed = consumed;
   }

}