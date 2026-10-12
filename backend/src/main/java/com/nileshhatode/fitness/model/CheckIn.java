package com.nileshhatode.fitness.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "check_ins")
public class CheckIn {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "check_in_date", nullable = false)
    private String date;

    @Column(name = "weight_kg", nullable = false)
    private Double weightKg;

    @Column(name = "energy_level")
    private Integer energyLevel;

    @Column(name = "sleep_quality")
    private Integer sleepQuality;

    @Column(name = "diet_compliance_percentage")
    private Integer dietCompliancePercentage;

    @Column(name = "workout_completed")
    private Boolean workoutCompleted = true;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public CheckIn() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public Double getWeightKg() { return weightKg; }
    public void setWeightKg(Double weightKg) { this.weightKg = weightKg; }

    public Integer getEnergyLevel() { return energyLevel; }
    public void setEnergyLevel(Integer energyLevel) { this.energyLevel = energyLevel; }

    public Integer getSleepQuality() { return sleepQuality; }
    public void setSleepQuality(Integer sleepQuality) { this.sleepQuality = sleepQuality; }

    public Integer getDietCompliancePercentage() { return dietCompliancePercentage; }
    public void setDietCompliancePercentage(Integer dietCompliancePercentage) { this.dietCompliancePercentage = dietCompliancePercentage; }

    public Boolean getWorkoutCompleted() { return workoutCompleted; }
    public void setWorkoutCompleted(Boolean workoutCompleted) { this.workoutCompleted = workoutCompleted; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
