# Nilesh Hadote Fitness Coaching Platform — Architecture Document

## Overview
Nilesh Hadote Fitness is a full-stack, enterprise-grade personal training and online coaching platform. The system is designed with a decoupled architecture, separating the client-side single-page application (React + TypeScript + Vite + Tailwind CSS) from the backend API services (Java 17 / Spring Boot 3 + Spring Security + Spring Data JPA + Flyway + H2/PostgreSQL).

## System Architecture Diagram

```
+-----------------------------------------------------------------------+
|                            Client Layer                               |
|   React 18 + TypeScript + Vite + Tailwind CSS + Recharts + Lucide     |
|   - Public Marketing Pages (SEO optimized)                            |
|   - Client Dashboard (Progress, Workouts, Diets, Check-ins)           |
|   - Coach / Admin Dashboard (Client Roster, Plan Builders, CMS)       |
+-----------------------------------------------------------------------+
                                   |
                                   | REST API (HTTP / JSON / JWT)
                                   v
+-----------------------------------------------------------------------+
|                            Backend Layer                              |
|   Spring Boot 3 REST API + Spring Security + JWT Authentication       |
|   - Auth & Security Controller (/api/v1/auth)                         |
|   - Client & Coach Management Controllers                             |
|   - Packages, Bookings, Mentorship, Blog, Check-In APIs               |
+-----------------------------------------------------------------------+
                                   |
                                   | JPA / Hibernate ORM
                                   v
+-----------------------------------------------------------------------+
|                           Persistence Layer                           |
|   Flyway Database Migrations + H2 (Dev) / PostgreSQL (Prod)            |
|   - Users, Client Profiles, Workouts, Diets, Exercises, Food Items    |
|   - Appointments, Mentorship Applications, Progress Logs, Blog Posts |
+-----------------------------------------------------------------------+
```

## Security & Authentication Flow
1. **JWT Stateless Authentication**: User authenticates via `/api/v1/auth/login`. Upon validation, a signed JWT token containing user identity and role (`ADMIN`, `COACH`, `CLIENT`) is returned.
2. **Role-Based Access Control (RBAC)**: Backend controllers enforce method-level and path-level authorization checks.
3. **Password Security**: Passwords are hashed using BCrypt (`BCryptPasswordEncoder`).
