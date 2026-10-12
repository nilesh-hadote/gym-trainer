package com.nileshhatode.fitness.controller;

import com.nileshhatode.fitness.model.Appointment;
import com.nileshhatode.fitness.repository.AppointmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/appointments")
public class AppointmentController {

    private final AppointmentRepository repository;

    public AppointmentController(AppointmentRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Appointment> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Appointment create(@RequestBody Appointment app) {
        return repository.save(app);
    }
}
