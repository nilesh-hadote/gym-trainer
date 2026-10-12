package com.nileshhatode.fitness.model;

import jakarta.persistence.*;

@Entity
@Table(name = "coaching_packages")
public class CoachingPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String tagline;

    @Column(name = "duration_months", nullable = false)
    private Integer durationMonths;

    @Column(name = "price_inr", nullable = false)
    private Integer priceINR;

    @Column(name = "original_price_inr")
    private Integer originalPriceINR;

    @Column(name = "popular_badge")
    private Boolean popularBadge = false;

    @Column(name = "service_type")
    private String serviceType;

    public CoachingPackage() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public Integer getDurationMonths() { return durationMonths; }
    public void setDurationMonths(Integer durationMonths) { this.durationMonths = durationMonths; }

    public Integer getPriceINR() { return priceINR; }
    public void setPriceINR(Integer priceINR) { this.priceINR = priceINR; }

    public Integer getOriginalPriceINR() { return originalPriceINR; }
    public void setOriginalPriceINR(Integer originalPriceINR) { this.originalPriceINR = originalPriceINR; }

    public Boolean getPopularBadge() { return popularBadge; }
    public void setPopularBadge(Boolean popularBadge) { this.popularBadge = popularBadge; }

    public String getServiceType() { return serviceType; }
    public void setServiceType(String serviceType) { this.serviceType = serviceType; }
}
