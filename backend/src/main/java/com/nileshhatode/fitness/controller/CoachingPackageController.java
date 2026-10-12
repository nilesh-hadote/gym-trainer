package com.nileshhatode.fitness.controller;

import com.nileshhatode.fitness.model.CoachingPackage;
import com.nileshhatode.fitness.repository.CoachingPackageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/packages")
public class CoachingPackageController {

    private final CoachingPackageRepository repository;

    public CoachingPackageController(CoachingPackageRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<CoachingPackage> getAll() {
        return repository.findAll();
    }
}
