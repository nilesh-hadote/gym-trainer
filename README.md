# Nilesh Hadote Fitness — Premium Personal Training & Coaching Platform

A full-stack personal fitness coaching platform built for **Nilesh Hadote**. Featuring a dark editorial aesthetic with electric lime accents, comprehensive public marketing pages, client app dashboard, coach/admin management control center, customized Indian meal planning (Veg & Non-Veg), periodized workout builders, consultation slot booking, Razorpay integration, and Spring Boot REST API backend.

---

## 🚀 Key Features

### 🌟 1. Public Marketing Platform
- **Hero & Announcement Bar**: Configurable promotional banner and editorial hero section with authentic fitness photography.
- **Goal Pathways**: Weight Loss, Muscle Building, Personal Training, and Remote Online Coaching.
- **Nutrition Hub**: Dedicated Indian Vegetarian (Paneer, Soy, Chana, Sprouts) and Non-Vegetarian (Grilled Chicken, Eggs, Fish) meal planning guides.
- **Transparent Packages**: INR currency formatted pricing cards with Razorpay checkout integration.
- **1-on-1 Mentorship**: Direct application workflow with custom intake questions.
- **Consultation Scheduler**: Date & time slot calendar booking for strategy calls.
- **Fitness Resources / Blog**: Search engine optimized guides on training principles & nutrition.
- **Complete Policies**: Privacy Policy, Terms & Conditions, Refund Policy, and Health Disclaimer.

### 📱 2. Client Application Dashboard (`/client/dashboard`)
- **Personalized Welcome & Overview**: Daily workout summary, meal plan summary, weight trend charts (Recharts).
- **Interactive Workout Tracker**: Assigned splits with exercise instructions, sets, reps, rest intervals, and mark-completed toggles.
- **Indian Diet Chart Viewer**: Macronutrient targets (Protein, Carbs, Fats), meal slots, food substitution lists, and meal logging.
- **Daily Check-In Portal**: Log weight, energy level (1-10), sleep quality (1-10), diet compliance %, and workout notes.
- **Progress Analytics**: Time-series charts for body weight and circumferences.
- **Consultation Bookings**: Upcoming Zoom coaching session status.

### 🛡️ 3. Coach / Admin Management Control Center (`/admin/dashboard`)
- **Business Analytics**: Active client counts, monthly revenue totals (Razorpay verified), pending check-ins requiring review, and incoming consultations.
- **Client Roster Management**: Search & filter registered clients, assign workout splits, assign Indian diet plans, and view check-in logs.
- **Plan Builders**: Interactive workout plan builder & Indian meal chart calorie/macro calculator.
- **Exercise & Food Library Manager**: Maintain exercise instructions and Indian food item macro values.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Dark/Electric Lime Design Tokens
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router v6

### Backend
- **Framework**: Java 17 + Spring Boot 3.2
- **Security**: Spring Security + JWT Stateless Authentication
- **Database**: H2 (In-memory PostgreSQL mode for Dev) / PostgreSQL (Production)
- **Database Migration**: Flyway (`V1__init_schema.sql`, `V2__seed_data.sql`)
- **API Documentation**: OpenAPI / Swagger UI (`springdoc-openapi`)

---

## 💻 Quick Start Guide

### 1. Prerequisites
- Node.js (v18+) & npm
- Java JDK 17+
- Apache Maven (v3.8+)

### 2. Frontend Setup & Execution
```bash
cd frontend
npm install
npm run dev
```
Access the application at `http://localhost:3000`.

To verify production build:
```bash
npm run build
```

### 3. Backend Setup & Execution
```bash
cd backend
mvn clean compile
mvn spring-boot:run
```
The REST API will start at `http://localhost:8080`.
H2 Console available at `http://localhost:8080/h2-console`.

To run backend tests:
```bash
mvn test
```

---

## 🔑 Demo Account Credentials

| Role | Email | Password | Access |
| :--- | :--- | :--- | :--- |
| **Admin / Head Coach** | `nileshhadote763@gmail.com` (or `admin@nileshhatode.com`) | `admin123` | `/admin/dashboard` |
| **Client** | `client@example.com` | `client123` | `/client/dashboard` |

---

## 📁 Repository Structure

```text
Gym website/
├── frontend/
│   ├── public/assets/       # Generated visual assets
│   ├── src/
│   │   ├── components/      # UI, Navbar, Footer, AnnouncementBar
│   │   ├── context/         # AuthContext
│   │   ├── pages/           # Public, Client, Admin pages
│   │   ├── services/        # ApiService (REST API + Fallback)
│   │   ├── types/           # TypeScript Interfaces
│   │   └── App.tsx          # Application Routes
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/main/java/com/nileshhatode/fitness/
│   │   ├── controller/      # Auth, Packages, Appointments, Blog, CheckIns
│   │   ├── model/           # User, Exercise, FoodItem, CheckIn, Package entities
│   │   ├── repository/      # JPA Repositories
│   │   └── security/        # Spring Security & JWT Token Provider
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   └── db/migration/    # V1__init_schema.sql, V2__seed_data.sql
│   ├── src/test/            # Unit & Context Load Tests
│   └── pom.xml
├── docs/                    # Architecture, Database, API & Deployment guides
├── docker-compose.yml
└── README.md
```

---

## 📝 License & Contact
**Brand Owner**: Nilesh Hadote Fitness  
**Email**: `nileshhadote763@gmail.com`  
**Phone / WhatsApp**: `+91 9993322135`  
**Location**: Indore, Madhya Pradesh, India
