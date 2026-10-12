package com.nileshhatode.fitness.controller;

import com.nileshhatode.fitness.model.CheckIn;
import com.nileshhatode.fitness.repository.CheckInRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/check-ins")
public class CheckInController {

    private final CheckInRepository repository;

    public CheckInController(CheckInRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/user/{userId}")
    public List<CheckIn> getByUser(@PathVariable Long userId) {
        return repository.findByUserId(userId);
    }

    @PostMapping
    public CheckIn create(@RequestBody CheckIn checkIn) {
        return repository.save(checkIn);
    }
}
