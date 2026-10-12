-- V2__seed_data.sql Initial Data Seed

-- Admin User: nileshhadote763@gmail.com / admin123 ($2a$10$7zU1W1E1d1A1B1C1D1E1OuX1/1)
INSERT INTO users (email, password_hash, full_name, phone, role) 
VALUES ('nileshhadote763@gmail.com', '$2a$10$7zU1W1E1d1A1B1C1D1E1OuX1/1', 'Nilesh Hadote', '+91 9993322135', 'ADMIN');

-- Client User: client@example.com / client123
INSERT INTO users (email, password_hash, full_name, phone, role) 
VALUES ('client@example.com', '$2a$10$7zU1W1E1d1A1B1C1D1E1OuX1/1', 'Aayush Sharma', '+91 98765 43210', 'CLIENT');

-- Client Profile
INSERT INTO client_profiles (user_id, age, gender, height_cm, weight_kg, target_weight_kg, fitness_goal, dietary_preference)
VALUES (2, 26, 'MALE', 178, 78.5, 74.0, 'Weight Loss & Muscle Recomp', 'VEGETARIAN');

-- Coaching Packages
INSERT INTO coaching_packages (title, tagline, duration_months, price_inr, original_price_inr, popular_badge, service_type)
VALUES ('Starter Program', 'Great for building initial momentum with custom plan assignment.', 1, 3999, 5999, FALSE, 'ONLINE_COACHING'),
       ('Transformation Pro', 'Our recommended 12-week body transformation protocol.', 3, 9999, 14999, TRUE, 'ONLINE_COACHING'),
       ('1-on-1 VIP Mentorship', 'Elite direct coaching for maximum speed, results & performance.', 6, 21999, 29999, FALSE, 'MENTORSHIP');

-- Exercises
INSERT INTO exercises (name, category, equipment, difficulty, instructions)
VALUES ('Barbell Bench Press', 'Chest', 'Barbell', 'INTERMEDIATE', 'Lie flat on bench, lower bar to chest and press up explosively.'),
       ('Incline Dumbbell Press', 'Chest', 'Dumbbell', 'BEGINNER', 'Set bench to 30 degrees incline. Press dumbbells overhead with elbows at 45 degrees.'),
       ('Barbell Back Squat', 'Legs', 'Barbell', 'INTERMEDIATE', 'Bar across upper traps, squat until parallel, drive through heels.'),
       ('Lat Pulldown', 'Back', 'Machine', 'BEGINNER', 'Pull handle down to upper chest while squeezing lat muscles.');

-- Food Items
INSERT INTO food_items (name, category, diet_type, serving_unit, calories, protein, carbs, fats)
VALUES ('Paneer (Raw / Grilled)', 'Protein', 'VEGETARIAN', '100g', 265, 18.0, 3.0, 20.0),
       ('Soy Chunks (Cooked)', 'Protein', 'VEGETARIAN', '50g (dry)', 170, 26.0, 16.0, 0.5),
       ('Whole Eggs (Boiled)', 'Protein', 'EGGETARIAN', '2 eggs', 155, 13.0, 1.0, 11.0),
       ('Chicken Breast (Grilled)', 'Protein', 'NON_VEGETARIAN', '150g', 247, 46.0, 0.0, 5.0);

-- Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, author, category, published_at)
VALUES ('Vegetarian Protein Sources in India: A Comprehensive Guide', 'vegetarian-protein-sources-india', 
        'Discover how to easily meet your daily protein targets on an Indian vegetarian diet.', 
        'Building muscle and losing fat on an Indian vegetarian diet is completely achievable with paneer, soy chunks, dal, and Greek yogurt.',
        '/assets/indian_diet.png', 'Nilesh Hadote', 'Nutrition', '2026-09-15');
