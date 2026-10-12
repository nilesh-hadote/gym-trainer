package com.nileshhatode.fitness.repository;

import com.nileshhatode.fitness.model.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {
    List<FoodItem> findByDietType(String dietType);
}
