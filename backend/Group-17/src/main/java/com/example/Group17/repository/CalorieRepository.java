package com.example.Group17.repository;
import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.Group17.model.Calories;

public interface CalorieRepository extends CrudRepository<Calories, Long> {
    
    // @Query("SELECT c FROM calories c WHERE c.userID = :userID ORDER BY c.caloriesID DESC")
    // Calories findLatestByUserID(int userID);
    
    // List<Calories> findByUserIDOrderByDateDesc(int userID);

    List<Calories> findByUserID(int userID);
    
    // List<Calories> findByCalories(double calories);
    void deleteByUserID(int userID);
}


