package com.example.Group17.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Group17.model.Weight;
import com.example.Group17.repository.WeightRepository;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;

    // Get All weights
    // public List<Weight> getWeights() {
    // return weightRepository.findAllWeights();
    // }

    // Get weights grouped by user ID
    public List<Weight> getWeightsByUserID(int userID) {
        return weightRepository.findByUserID(userID);
    }

    // Delete all weights
    public void deleteAllWeights() {
        weightRepository.deleteAll();
    }

}