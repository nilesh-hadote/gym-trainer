import {
  User, AuthResponse, ClientProfile, FitnessAssessment,
  WorkoutPlan, Exercise, DietPlan, FoodItem, CheckIn,
  ProgressEntry, CoachingPackage, Appointment, MentorshipApplication,
  BlogPost, Testimonial, ContactInquiry
} from '../types';

const API_BASE_URL = '/api/v1';

// Token storage helper
export const getToken = () => localStorage.getItem('nh_fitness_token');
export const setToken = (token: string) => localStorage.getItem('nh_fitness_token') ? localStorage.setItem('nh_fitness_token', token) : localStorage.setItem('nh_fitness_token', token);
export const removeToken = () => localStorage.removeItem('nh_fitness_token');

export const getCurrentUserFromStorage = (): User | null => {
  const u = localStorage.getItem('nh_fitness_user');
  return u ? JSON.parse(u) : null;
};

export const setCurrentUserToStorage = (user: User | null) => {
  if (user) {
    localStorage.setItem('nh_fitness_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('nh_fitness_user');
  }
};

// Initial Seed Data for UI Fallbacks
const INITIAL_PACKAGES: CoachingPackage[] = [
  {
    id: 1,
    title: 'Starter Transformation',
    tagline: 'Ideal for beginners seeking structured direction and guidance.',
    durationMonths: 1,
    priceINR: 3999,
    originalPriceINR: 5999,
    serviceType: 'ONLINE_COACHING',
    features: [
      'Customized 4-Week Workout Plan',
      'Vegetarian / Non-Veg Diet Guidance',
      'Weekly Progress Check-in',
      'WhatsApp Support (Mon-Fri)',
      'Access to Client Mobile Dashboard'
    ]
  },
  {
    id: 2,
    title: 'Transformation Pro',
    tagline: 'Our most popular program for major fat loss & muscle building.',
    durationMonths: 3,
    priceINR: 9999,
    originalPriceINR: 14999,
    popularBadge: true,
    serviceType: 'ONLINE_COACHING',
    features: [
      'Custom 12-Week Periodized Workout Plan',
      'Precision Macro & Meal Timing Plan',
      'Bi-Weekly 1-on-1 Strategy Calls',
      'Supplementation & Habit Protocol',
      'Form Check Video Analyses',
      'Priority Coach WhatsApp Access'
    ]
  },
  {
    id: 3,
    title: '1-on-1 VIP Mentorship',
    tagline: 'Elite 1-on-1 coaching for maximum speed, accountability & performance.',
    durationMonths: 6,
    priceINR: 21999,
    originalPriceINR: 29999,
    serviceType: 'MENTORSHIP',
    features: [
      'Everything in Transformation Pro',
      'Weekly 1-on-1 Zoom Coaching Sessions',
      'Direct Direct Coach Access (24/7 Priority)',
      'Custom In-Person or Home Gym Adjustments',
      'Lifestyle, Sleep & Stress Optimization',
      'Lifetime Access to VIP Vault'
    ]
  }
];

const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "Vegetarian Protein Sources in India: A Comprehensive Guide",
    slug: "vegetarian-protein-sources-india",
    excerpt: "Discover how to easily meet your daily protein targets on an Indian vegetarian diet without relying solely on protein powders.",
    content: `Building muscle and losing fat on an Indian vegetarian diet is completely achievable when you understand food composition... Paneer, soy chunks, Greek yogurt, lentils, sprouted moong, and chana are powerhouses of nutrition.`,
    coverImage: "/assets/indian_diet.png",
    author: "Nilesh Hadote",
    category: "Nutrition",
    tags: ["Vegetarian", "Protein", "Indian Diet", "Muscle Building"],
    publishedAt: "2026-09-15"
  },
  {
    id: 2,
    title: "Beginner's Guide to Strength Training & Progressive Overload",
    slug: "beginners-guide-to-strength-training",
    excerpt: "Learn the foundational principles of lifting weights safely and building a powerful physique from scratch.",
    content: `Strength training is the single best investment you can make for longevity, metabolic health, and body composition... Master compound exercises like squats, deadlifts, chest presses, and pull-downs first.`,
    coverImage: "/assets/gym_action.png",
    author: "Nilesh Hadote",
    category: "Workout",
    tags: ["Strength Training", "Beginners", "Muscle Gain"],
    publishedAt: "2026-09-28"
  },
  {
    id: 3,
    title: "How to Stay Consistent with Fitness as a Busy Working Professional",
    slug: "fitness-for-busy-professionals",
    excerpt: "Actionable strategies for managing long work hours, corporate meetings, and fitness goals without burnout.",
    content: `Consistency beats intensity every single time. If you cannot spend 2 hours in the gym, 45 focused minutes 4 days a week is more than enough...`,
    coverImage: "/assets/nilesh_hero.png",
    author: "Nilesh Hadote",
    category: "Lifestyle",
    tags: ["Mindset", "Consistency", "Busy Lifestyle"],
    publishedAt: "2026-10-02"
  }
];

const INITIAL_EXERCISES: Exercise[] = [
  { id: 1, name: 'Barbell Bench Press', category: 'Chest', equipment: 'Barbell', difficulty: 'INTERMEDIATE', instructions: 'Lie flat on bench, grip bar slightly wider than shoulder width, lower bar to mid-chest, push up explosively.' },
  { id: 2, name: 'Incline Dumbbell Press', category: 'Chest', equipment: 'Dumbbell', difficulty: 'BEGINNER', instructions: 'Set bench to 30 degrees incline. Lower dumbbells with elbows at 45 degrees and press overhead.' },
  { id: 3, name: 'Barbell Back Squat', category: 'Legs', equipment: 'Barbell', difficulty: 'INTERMEDIATE', instructions: 'Rest bar on upper traps. Squat down until thighs are parallel to ground, drive through heels.' },
  { id: 4, name: 'Romanian Deadlift', category: 'Legs', equipment: 'Barbell', difficulty: 'INTERMEDIATE', instructions: 'Hinge at hips keeping back flat, lower bar along shins until hamstring stretch, squeeze glutes to stand.' },
  { id: 5, name: 'Lat Pulldown', category: 'Back', equipment: 'Machine', difficulty: 'BEGINNER', instructions: 'Grip bar wide, pull down to upper chest while squeezing lat muscles.' },
  { id: 6, name: 'Seated Cable Row', category: 'Back', equipment: 'Machine', difficulty: 'BEGINNER', instructions: 'Pull handle toward abdomen while keeping posture straight and squeezing shoulder blades.' },
  { id: 7, name: 'Dumbbell Shoulder Press', category: 'Shoulders', equipment: 'Dumbbell', difficulty: 'BEGINNER', instructions: 'Sit vertical, press dumbbells overhead until arms are extended, lower under control.' }
];

const INITIAL_FOOD_ITEMS: FoodItem[] = [
  { id: 1, name: 'Paneer (Raw / Grilled)', category: 'Protein', dietType: 'VEGETARIAN', servingUnit: '100g', calories: 265, protein: 18, carbs: 3, fats: 20 },
  { id: 2, name: 'Soy Chunks (Cooked)', category: 'Protein', dietType: 'VEGETARIAN', servingUnit: '50g (dry weight)', calories: 170, protein: 26, carbs: 16, fats: 0.5 },
  { id: 3, name: 'Whole Eggs (Boiled)', category: 'Protein', dietType: 'EGGETARIAN', servingUnit: '2 eggs', calories: 155, protein: 13, carbs: 1, fats: 11 },
  { id: 4, name: 'Egg Whites', category: 'Protein', dietType: 'EGGETARIAN', servingUnit: '4 egg whites', calories: 68, protein: 14, carbs: 0.5, fats: 0.2 },
  { id: 5, name: 'Chicken Breast (Grilled)', category: 'Protein', dietType: 'NON_VEGETARIAN', servingUnit: '150g', calories: 247, protein: 46, carbs: 0, fats: 5 },
  { id: 6, name: 'Brown Rice / White Rice', category: 'Carbs', dietType: 'VEGETARIAN', servingUnit: '150g (cooked)', calories: 195, protein: 4.5, carbs: 42, fats: 0.6 },
  { id: 7, name: 'Whole Wheat Roti', category: 'Carbs', dietType: 'VEGETARIAN', servingUnit: '2 rotis (60g)', calories: 160, protein: 6, carbs: 32, fats: 1.5 },
  { id: 8, name: 'Whey Protein Isolate', category: 'Protein', dietType: 'VEGETARIAN', servingUnit: '1 scoop (30g)', calories: 120, protein: 25, carbs: 2, fats: 1 }
];

// Helper to make mock requests or real fetch calls
async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({ message: 'Server error' }));
      throw new Error(errData.message || `HTTP error ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    // If backend isn't reachable or fallback is needed, handle gracefully
    console.warn(`API call ${endpoint} fallback:`, error);
    throw error;
  }
}

// API Service Methods
export const ApiService = {
  // Packages & Content
  getPackages: async (): Promise<CoachingPackage[]> => {
    try {
      return await apiFetch<CoachingPackage[]>('/packages');
    } catch {
      return INITIAL_PACKAGES;
    }
  },

  getBlogPosts: async (): Promise<BlogPost[]> => {
    try {
      return await apiFetch<BlogPost[]>('/blog');
    } catch {
      return INITIAL_BLOGS;
    }
  },

  getBlogPostBySlug: async (slug: string): Promise<BlogPost | undefined> => {
    const blogs = await ApiService.getBlogPosts();
    return blogs.find(b => b.slug === slug);
  },

  // Inquiries & Bookings
  submitContact: async (data: Omit<ContactInquiry, 'id' | 'submittedAt'>): Promise<ContactInquiry> => {
    try {
      return await apiFetch<ContactInquiry>('/contact', { method: 'POST', body: JSON.stringify(data) });
    } catch {
      return { id: Date.now(), ...data, submittedAt: new Date().toISOString() };
    }
  },

  submitMentorship: async (data: Omit<MentorshipApplication, 'id' | 'status' | 'createdAt'>): Promise<MentorshipApplication> => {
    try {
      return await apiFetch<MentorshipApplication>('/mentorship', { method: 'POST', body: JSON.stringify(data) });
    } catch {
      return { id: Date.now(), ...data, status: 'NEW', createdAt: new Date().toISOString() };
    }
  },

  bookConsultation: async (data: Omit<Appointment, 'id' | 'status'>): Promise<Appointment> => {
    try {
      return await apiFetch<Appointment>('/appointments', { method: 'POST', body: JSON.stringify(data) });
    } catch {
      return { id: Date.now(), ...data, status: 'CONFIRMED' };
    }
  },

  // Auth & Client Profile
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      return await apiFetch<AuthResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
    } catch (e) {
      // Demo authentication simulation
      if ((email === 'nileshhadote763@gmail.com' || email === 'admin@nileshhatode.com') && password === 'admin123') {
        const u: User = { id: 1, email, fullName: 'Nilesh Hadote', role: 'ADMIN', createdAt: new Date().toISOString() };
        return { token: 'mock-admin-token-12345', user: u };
      }
      if (email === 'client@example.com' && password === 'client123') {
        const u: User = { id: 2, email, fullName: 'Aayush Sharma', role: 'CLIENT', createdAt: new Date().toISOString() };
        return { token: 'mock-client-token-67890', user: u };
      }
      throw new Error('Invalid email or password. (Demo logins: nileshhadote763@gmail.com / admin123 OR client@example.com / client123)');
    }
  },

  register: async (fullName: string, email: string, password: string, phone?: string): Promise<AuthResponse> => {
    try {
      return await apiFetch<AuthResponse>('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ fullName, email, password, phone })
      });
    } catch {
      const u: User = { id: Date.now(), email, fullName, phone, role: 'CLIENT', createdAt: new Date().toISOString() };
      return { token: `mock-token-${Date.now()}`, user: u };
    }
  },

  // Exercises & Food Libraries
  getExercises: async (): Promise<Exercise[]> => {
    try {
      return await apiFetch<Exercise[]>('/exercises');
    } catch {
      return INITIAL_EXERCISES;
    }
  },

  getFoodItems: async (): Promise<FoodItem[]> => {
    try {
      return await apiFetch<FoodItem[]>('/food-items');
    } catch {
      return INITIAL_FOOD_ITEMS;
    }
  },

  // Client Data API
  getClientWorkoutPlan: async (userId: number): Promise<WorkoutPlan> => {
    try {
      return await apiFetch<WorkoutPlan>(`/workout-plans/user/${userId}`);
    } catch {
      return {
        id: 101,
        title: "12-Week Hypertrophy & Fat Loss Program",
        description: "Periodized 4-day split tailored for lean muscle build & body recomposition.",
        targetGoal: "Muscle Building & Fat Loss",
        difficulty: "INTERMEDIATE",
        durationWeeks: 12,
        isTemplate: false,
        createdAt: "2026-10-01",
        days: [
          {
            id: 1,
            dayName: "Day 1 - Chest & Triceps",
            workoutExercises: [
              { id: 1, exercise: INITIAL_EXERCISES[0], sets: 4, reps: "8-10", restSeconds: 90, notes: "Focus on controlled eccentric phase." },
              { id: 2, exercise: INITIAL_EXERCISES[1], sets: 3, reps: "10-12", restSeconds: 60, notes: "Squeeze chest at top." }
            ]
          },
          {
            id: 2,
            dayName: "Day 2 - Back & Biceps",
            workoutExercises: [
              { id: 3, exercise: INITIAL_EXERCISES[4], sets: 4, reps: "10-12", restSeconds: 60, notes: "Pull with elbows, not biceps." },
              { id: 4, exercise: INITIAL_EXERCISES[5], sets: 3, reps: "12", restSeconds: 60 }
            ]
          }
        ]
      };
    }
  },

  getClientDietPlan: async (userId: number): Promise<DietPlan> => {
    try {
      return await apiFetch<DietPlan>(`/diet-plans/user/${userId}`);
    } catch {
      return {
        id: 201,
        title: "High Protein High Energy Vegetarian Diet Plan",
        targetGoal: "Fat Loss & Muscle Maintenance",
        dietaryPreference: "VEGETARIAN",
        targetCalories: 2100,
        targetProteinGrams: 140,
        targetCarbsGrams: 210,
        targetFatsGrams: 60,
        coachNotes: "Drink 3.5 Liters of water daily. Ensure meal 1 is taken within 60 mins of waking up.",
        createdAt: "2026-10-01",
        meals: [
          {
            id: 1,
            mealName: "Breakfast (Post-Workout)",
            mealTime: "08:30 AM",
            items: [
              { id: 1, foodItem: INITIAL_FOOD_ITEMS[7], quantity: 1, notes: "Mix with 250ml water or toned milk" },
              { id: 2, foodItem: INITIAL_FOOD_ITEMS[6], quantity: 1, notes: "Oats with chia seeds" }
            ]
          },
          {
            id: 2,
            mealName: "Lunch",
            mealTime: "01:30 PM",
            items: [
              { id: 3, foodItem: INITIAL_FOOD_ITEMS[0], quantity: 1.5, notes: "Grilled with turmeric & black pepper" },
              { id: 4, foodItem: INITIAL_FOOD_ITEMS[6], quantity: 1, notes: "Brown rice or 2 whole wheat rotis" }
            ]
          },
          {
            id: 3,
            mealName: "Evening Snack",
            mealTime: "05:30 PM",
            items: [
              { id: 5, foodItem: INITIAL_FOOD_ITEMS[1], quantity: 1, notes: "Air fried soy chunks with chaat masala" }
            ]
          }
        ]
      };
    }
  },

  getCheckIns: async (userId: number): Promise<CheckIn[]> => {
    try {
      return await apiFetch<CheckIn[]>(`/check-ins/user/${userId}`);
    } catch {
      return [
        { id: 1, userId, date: '2026-10-05', weightKg: 78.5, energyLevel: 8, sleepQuality: 8, dietCompliancePercentage: 95, workoutCompleted: true, notes: 'Felt great on bench press.' },
        { id: 2, userId, date: '2026-10-06', weightKg: 78.2, energyLevel: 7, sleepQuality: 7, dietCompliancePercentage: 90, workoutCompleted: true },
        { id: 3, userId, date: '2026-10-07', weightKg: 77.9, energyLevel: 9, sleepQuality: 9, dietCompliancePercentage: 100, workoutCompleted: true }
      ];
    }
  },

  getProgressHistory: async (userId: number): Promise<ProgressEntry[]> => {
    try {
      return await apiFetch<ProgressEntry[]>(`/progress/user/${userId}`);
    } catch {
      return [
        { id: 1, userId, date: '2026-09-01', weightKg: 82.0, chestCm: 104, waistCm: 92, armsCm: 37 },
        { id: 2, userId, date: '2026-09-15', weightKg: 80.4, chestCm: 104, waistCm: 89, armsCm: 37.5 },
        { id: 3, userId, date: '2026-10-01', weightKg: 78.5, chestCm: 105, waistCm: 86, armsCm: 38.0 },
        { id: 4, userId, date: '2026-10-08', weightKg: 77.5, chestCm: 105, waistCm: 84.5, armsCm: 38.2 }
      ];
    }
  },

  saveCheckIn: async (checkIn: Omit<CheckIn, 'id'>): Promise<CheckIn> => {
    try {
      return await apiFetch<CheckIn>('/check-ins', { method: 'POST', body: JSON.stringify(checkIn) });
    } catch {
      return { id: Date.now(), ...checkIn };
    }
  }
};
