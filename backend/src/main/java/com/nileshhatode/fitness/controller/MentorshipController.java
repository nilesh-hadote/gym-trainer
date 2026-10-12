package com.nileshhatode.fitness.controller;

import com.nileshhatode.fitness.model.MentorshipApplication;
import com.nileshhatode.fitness.repository.MentorshipRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mentorship")
public class MentorshipController {

    private final MentorshipRepository repository;

    public MentorshipController(MentorshipRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<MentorshipApplication> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public MentorshipApplication create(@RequestBody MentorshipApplication app) {
        return repository.save(app);
    }
}
