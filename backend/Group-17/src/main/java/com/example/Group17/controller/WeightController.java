package com.example.Group17.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Group17.model.Weight;
import com.example.Group17.repository.WeightRepository;

import java.util.List;

@RestController
public class WeightController {

    @Autowired
    WeightRepository weightRepository;

    // Get all weights
    @GetMapping("/weights")
    public List<Weight> getWeights() {
        return (List<Weight>) weightRepository.findAll();
    }

    // Get weights related to specific user ID
    @GetMapping("/weights/{userID}")
    public List<Weight> getWeightsByUserID(@PathVariable("userID") Integer userID) {
        return weightRepository.findByUserID(userID);
    }

    // Add new weight
    @PostMapping("/weight")
    public void addWeight(@RequestBody Weight weight) {
        weightRepository.save(weight);
    }

    // Delete all weights
    @DeleteMapping("/weights")
    public void deleteWeights() {
        weightRepository.deleteAll();
    }

}