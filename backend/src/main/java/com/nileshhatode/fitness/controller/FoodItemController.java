package com.nileshhatode.fitness.controller;

import com.nileshhatode.fitness.model.FoodItem;
import com.nileshhatode.fitness.repository.FoodItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/food-items")
public class FoodItemController {

    private final FoodItemRepository repository;

    public FoodItemController(FoodItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<FoodItem> getAll() {
        return repository.findAll();
    }
}
