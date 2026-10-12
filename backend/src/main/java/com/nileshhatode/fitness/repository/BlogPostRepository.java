package com.nileshhatode.fitness.repository;

import com.nileshhatode.fitness.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    Optional<BlogPost> findBySlug(String slug);
}
