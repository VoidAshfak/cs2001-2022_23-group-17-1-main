package com.example.Group17.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.example.Group17.model.Weight;

// CRUD - CREATE, READ, UPDATE AND DELETE 
public interface WeightRepository extends CrudRepository<Weight, Long> {

    // List<Weight> findAllWeights();
    List<Weight> findByUserID(int userID);

    // void deleteByUserID(int userID);

}