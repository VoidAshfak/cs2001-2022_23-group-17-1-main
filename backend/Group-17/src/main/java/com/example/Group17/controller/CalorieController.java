package com.example.Group17.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Group17.exception.ResourceNotFoundException;
import com.example.Group17.model.Calories;
import com.example.Group17.repository.CalorieRepository;
//import com.example.Group17.services.CalorieService;

import jakarta.validation.Valid;

import java.util.List;

@RestController
public class CalorieController {
    public class ResourceNotFoundException extends Exception {
        public ResourceNotFoundException(String message) {
            super(message);
        }
    }

    @Autowired
    CalorieRepository calorieRepository;

    @PostMapping("/calories")
    public void addCalories(@RequestBody Calories calories) {
        calorieRepository.save(calories);
    }

    @GetMapping("/calories")
    public List<Calories> getTotalCalories() {
        return (List<Calories>) calorieRepository.findAll();
    }

    @GetMapping("/calories/{userID}")
    public List<Calories> getCaloriesByUserID(@PathVariable("userID") Integer userID) {
        return calorieRepository.findByUserID(userID);
    }

    @PutMapping("/calories/{caloriesID}")
public ResponseEntity<Calories> updateCalories(@PathVariable(value = "caloriesID") Long caloriesID,
                                                @Valid @RequestBody Calories updatedCalories) throws ResourceNotFoundException {
    Calories calories = calorieRepository.findById(caloriesID)
            .orElseThrow(() -> new ResourceNotFoundException("Calories not found for this id :: " + caloriesID));

    calories.setConsumed(updatedCalories.getConsumed());
    final Calories updated = calorieRepository.save(calories);

    return ResponseEntity.ok(updated);
}


    @DeleteMapping("/calories")
    public void deleteCalories() {
        calorieRepository.deleteAll();
        
    }

    //     @GetMapping("/calories/{userID}")
    // public Calories getLatestCaloriesByUserID(@PathVariable("userID") int userID) {
    //     return calorieRepository.findLatestByUserID(userID);
    // }
  

}
