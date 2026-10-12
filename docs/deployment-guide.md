# Nilesh Hadote Fitness — Deployment & Production Guide

## Frontend Deployment (Vercel)
1. Connect GitHub repository to Vercel.
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Environment Variables:
   - `VITE_API_BASE_URL`: `https://your-backend-api.onrender.com/api/v1`

## Backend Deployment (Render / AWS / Heroku)
1. Build Environment: Java 17+ / Maven
2. Build Command: `mvn clean package -DskipTests`
3. Start Command: `java -jar target/fitness-backend-1.0.0-SNAPSHOT.jar`
4. Environment Variables:
   - `SPRING_DATASOURCE_URL`: `jdbc:postgresql://postgres-host:5432/nilesh_fitness_db`
   - `SPRING_DATASOURCE_USERNAME`: `postgres`
   - `SPRING_DATASOURCE_PASSWORD`: `your_secure_password`
   - `JWT_SECRET`: `your_secure_random_64_char_string`
   - `RAZORPAY_KEY_ID`: `rzp_live_key`
   - `RAZORPAY_KEY_SECRET`: `rzp_live_secret`

## Docker Deployment
Run `docker-compose up --build -d` to launch PostgreSQL database, Spring Boot API, and Vite web server locally or on VPS.
