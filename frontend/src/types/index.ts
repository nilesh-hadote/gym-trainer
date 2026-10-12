export type Role = 'ADMIN' | 'COACH' | 'CLIENT';

export interface User {
  id: number;
  email: string;
  fullName: string;
  phone?: string;
  role: Role;
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ClientProfile {
  id: number;
  userId: number;
  age?: number;
  gender?: string;
  heightCm?: number;
  weightKg?: number;
  targetWeightKg?: number;
  fitnessGoal?: string;
  activityLevel?: string;
  dietaryPreference?: 'VEGETARIAN' | 'EGGETARIAN' | 'NON_VEGETARIAN';
  medicalConditions?: string;
  allergies?: string;
  assignedCoachName?: string;
  activePackageName?: string;
}

export interface FitnessAssessment {
  id: number;
  userId: number;
  experienceLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  primaryGoal: string;
  workoutDaysPerWeek: number;
  preferredTime: string;
  dietaryPreference: string;
  injuriesOrLimitations: string;
  currentSupplements: string;
  dailySleepHours: number;
  waterIntakeLiters: number;
  submittedAt: string;
}

export interface Exercise {
  id: number;
  name: string;
  category: string; // e.g. Chest, Back, Legs, Core, Arms, Shoulders
  equipment: string; // e.g. Dumbbell, Barbell, Bodyweight, Machine
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  instructions: string;
  videoUrl?: string;
  imageUrl?: string;
}

export interface WorkoutExercise {
  id: number;
  exercise: Exercise;
  sets: number;
  reps: string; // e.g. "10-12" or "15"
  restSeconds: number;
  notes?: string;
}

export interface WorkoutDay {
  id: number;
  dayName: string; // e.g., "Day 1 - Chest & Triceps"
  workoutExercises: WorkoutExercise[];
}

export interface WorkoutPlan {
  id: number;
  title: string;
  description: string;
  targetGoal: string;
  difficulty: string;
  durationWeeks: number;
  days: WorkoutDay[];
  assignedToUserId?: number;
  isTemplate: boolean;
  createdAt: string;
}

export interface FoodItem {
  id: number;
  name: string;
  category: string; // e.g. Protein, Carbs, Fats, Vegetables
  dietType: 'VEGETARIAN' | 'EGGETARIAN' | 'NON_VEGETARIAN';
  servingUnit: string; // e.g. "100g", "1 cup", "2 eggs", "1 scoop"
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface MealFoodItem {
  id: number;
  foodItem: FoodItem;
  quantity: number; // multiplier of servingUnit
  notes?: string;
}

export interface DietMeal {
  id: number;
  mealName: string; // e.g. "Breakfast", "Lunch", "Evening Snack", "Dinner"
  mealTime: string; // e.g. "08:30 AM"
  items: MealFoodItem[];
}

export interface DietPlan {
  id: number;
  title: string;
  targetGoal: string;
  dietaryPreference: 'VEGETARIAN' | 'EGGETARIAN' | 'NON_VEGETARIAN';
  targetCalories: number;
  targetProteinGrams: number;
  targetCarbsGrams: number;
  targetFatsGrams: number;
  meals: DietMeal[];
  coachNotes?: string;
  assignedToUserId?: number;
  createdAt: string;
}

export interface CheckIn {
  id: number;
  userId: number;
  date: string;
  weightKg: number;
  energyLevel: number; // 1-10
  sleepQuality: number; // 1-10
  dietCompliancePercentage: number;
  workoutCompleted: boolean;
  notes?: string;
}

export interface ProgressEntry {
  id: number;
  userId: number;
  date: string;
  weightKg: number;
  chestCm?: number;
  waistCm?: number;
  hipsCm?: number;
  armsCm?: number;
  thighsCm?: number;
}

export interface CoachingPackage {
  id: number;
  title: string;
  tagline: string;
  durationMonths: number;
  priceINR: number;
  originalPriceINR?: number;
  popularBadge?: boolean;
  features: string[];
  serviceType: 'PERSONAL_TRAINING' | 'ONLINE_COACHING' | 'NUTRITION_ONLY' | 'MENTORSHIP';
}

export interface Appointment {
  id: number;
  userId?: number;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceName: string;
  appointmentDate: string;
  appointmentTime: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  notes?: string;
}

export interface MentorshipApplication {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  fitnessGoal: string;
  currentFitnessLevel: string;
  preferredCoachingFormat: string;
  challenges: string;
  status: 'NEW' | 'REVIEWED' | 'CONTACTED' | 'ACCEPTED' | 'REJECTED';
  createdAt: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt: string;
  seoTitle?: string;
  metaDescription?: string;
}

export interface Testimonial {
  id: number;
  clientName: string;
  achievement: string; // e.g. "Lost 14 kg in 12 weeks"
  story: string;
  beforeAfterImage?: string;
  rating: number;
}

export interface ContactInquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
  submittedAt: string;
}
