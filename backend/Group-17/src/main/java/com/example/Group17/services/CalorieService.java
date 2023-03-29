package com.example.Group17.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Group17.model.Calories;
import com.example.Group17.repository.CalorieRepository;



@Service
public class CalorieService {

    @Autowired
    private CalorieRepository calorieRepository;
    
    public List<Calories> getCaloriesByUserID(int userID) {
        return calorieRepository.findByUserID(userID);
    }
    
    // public Calories getLatestCaloriesByUserID(int userID) {
    //     return calorieRepository.findLatestByUserID(userID);
    // }
    // public Calories getLatestCaloriesByUserID(int userID) {
    //     List<Calories> caloriesList = calorieRepository.findByUserIDOrderByDateDesc(userID);
    //     if (caloriesList.isEmpty()) {
    //         // return null or throw an exception if no calories were found for the user
    //         return null;
    //     } else {
    //         // return the first (i.e. latest) Calories object in the sorted list
    //         return caloriesList.get(0);
    //     }
    // }
    

    public void deleteAllCalories() {
        calorieRepository.deleteAll();
    }


}