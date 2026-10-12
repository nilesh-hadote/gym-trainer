package com.nileshhatode.fitness.controller;

import com.nileshhatode.fitness.model.BlogPost;
import com.nileshhatode.fitness.repository.BlogPostRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/blog")
public class BlogController {

    private final BlogPostRepository repository;

    public BlogController(BlogPostRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<BlogPost> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<BlogPost> getBySlug(@PathVariable String slug) {
        return repository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
