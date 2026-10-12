# Database Schema Documentation

The database schema is managed via Flyway migrations (`V1__init_schema.sql` and `V2__seed_data.sql`).

## Tables & Entities

### 1. `users`
- `id` (BIGINT PRIMARY KEY AUTO_INCREMENT / IDENTITY)
- `email` (VARCHAR UNIQUE NOT NULL)
- `password_hash` (VARCHAR NOT NULL)
- `full_name` (VARCHAR NOT NULL)
- `phone` (VARCHAR)
- `role` (VARCHAR DEFAULT 'CLIENT')
- `created_at` (TIMESTAMP)

### 2. `client_profiles`
- `id` (BIGINT PRIMARY KEY)
- `user_id` (BIGINT FOREIGN KEY -> users.id)
- `age`, `gender`, `height_cm`, `weight_kg`, `target_weight_kg`
- `fitness_goal`, `dietary_preference`, `medical_conditions`, `allergies`

### 3. `exercises`
- `id`, `name`, `category`, `equipment`, `difficulty`, `instructions`, `video_url`

### 4. `food_items`
- `id`, `name`, `category`, `diet_type`, `serving_unit`, `calories`, `protein`, `carbs`, `fats`

### 5. `coaching_packages`
- `id`, `title`, `tagline`, `duration_months`, `price_inr`, `original_price_inr`, `popular_badge`, `service_type`

### 6. `appointments`
- `id`, `user_id`, `client_name`, `client_email`, `client_phone`, `service_name`, `appointment_date`, `appointment_time`, `status`

### 7. `check_ins`
- `id`, `user_id`, `check_in_date`, `weight_kg`, `energy_level`, `sleep_quality`, `diet_compliance_percentage`, `workout_completed`, `notes`

### 8. `blog_posts`
- `id`, `title`, `slug`, `excerpt`, `content`, `cover_image`, `author`, `category`, `published_at`
