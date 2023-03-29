package com.example.Group17.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.Group17.model.Ingredients;

import java.util.List;

public interface IngredientsRepository extends CrudRepository<Ingredients, Long> {

    List<Ingredients> findAll();
    List<Ingredients> findByCate(String cate);
    List<Ingredients> findByNameContainingIgnoreCase(String name);
    Ingredients findById(int id);
}