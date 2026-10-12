package com.nileshhatode.fitness.controller;

import com.nileshhatode.fitness.model.Exercise;
import com.nileshhatode.fitness.repository.ExerciseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/exercises")
public class ExerciseController {

    private final ExerciseRepository repository;

    public ExerciseController(ExerciseRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Exercise> getAll() {
        return repository.findAll();
    }
}
