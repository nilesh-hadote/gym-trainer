package com.nileshhatode.fitness.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "mentorship_applications")
public class MentorshipApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(name = "fitness_goal")
    private String fitnessGoal;

    @Column(name = "current_fitness_level")
    private String currentFitnessLevel;

    @Column(name = "preferred_coaching_format")
    private String preferredCoachingFormat;

    @Column(columnDefinition = "TEXT")
    private String challenges;

    private String status = "NEW";

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public MentorshipApplication() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getFitnessGoal() { return fitnessGoal; }
    public void setFitnessGoal(String fitnessGoal) { this.fitnessGoal = fitnessGoal; }

    public String getCurrentFitnessLevel() { return currentFitnessLevel; }
    public void setCurrentFitnessLevel(String currentFitnessLevel) { this.currentFitnessLevel = currentFitnessLevel; }

    public String getPreferredCoachingFormat() { return preferredCoachingFormat; }
    public void setPreferredCoachingFormat(String preferredCoachingFormat) { this.preferredCoachingFormat = preferredCoachingFormat; }

    public String getChallenges() { return challenges; }
    public void setChallenges(String challenges) { this.challenges = challenges; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
