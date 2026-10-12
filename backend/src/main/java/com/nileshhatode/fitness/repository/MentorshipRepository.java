package com.nileshhatode.fitness.repository;

import com.nileshhatode.fitness.model.MentorshipApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MentorshipRepository extends JpaRepository<MentorshipApplication, Long> {
    List<MentorshipApplication> findByStatus(String status);
}
