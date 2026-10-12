package com.nileshhatode.fitness.repository;

import com.nileshhatode.fitness.model.CheckIn;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CheckInRepository extends JpaRepository<CheckIn, Long> {
    List<CheckIn> findByUserId(Long userId);
}
