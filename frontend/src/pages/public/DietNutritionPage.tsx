import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, CheckCircle2, ArrowRight } from 'lucide-react';

export const DietNutritionPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">EVIDENCE-BASED NUTRITION</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Diet & Nutrition Guidance</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Flexible, macro-calculated diet plans built specifically for Indian food preferences, budget, and daily schedule.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4">
          <span className="text-emerald-400 font-bold text-sm">INDIAN VEGETARIAN PROTOCOLS</span>
          <h2 className="text-2xl font-bold text-white">Vegetarian & Eggetarian Nutrition</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Paneer, soy chunks, Greek yogurt, chana, sprouts, and eggs optimized for maximum protein density.
          </p>
          <Link to="/vegetarian-diet-plan" className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm">
            <span>Explore Veg Diet Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4">
          <span className="text-amber-400 font-bold text-sm">LEAN MEAT PROTOCOLS</span>
          <h2 className="text-2xl font-bold text-white">Non-Vegetarian Nutrition</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Grilled chicken breast, eggs, and fish calculated with optimal timings around your workout sessions.
          </p>
          <Link to="/non-vegetarian-diet-plan" className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm">
            <span>Explore Non-Veg Diet Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const VegDietPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">VEGETARIAN & EGGETARIAN</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Indian Vegetarian Diet Plans</h1>
        <p className="text-slate-300 text-base">
          Proven high-protein Indian vegetarian meals designed to fuel workouts and accelerate body transformation.
        </p>
      </div>

      {/* Sample Illustrative Meal Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
        <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Sample 2100 Calorie Veg Diet Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 1: BREAKFAST</span>
            <p className="text-sm font-bold text-white">Post-Workout Smoothie / Eggs</p>
            <p className="text-xs text-slate-400">1 scoop Whey + 50g Oats + 2 boiled eggs / 100g paneer</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 2: LUNCH</span>
            <p className="text-sm font-bold text-white">Paneer & Dal Bowl</p>
            <p className="text-xs text-slate-400">120g Paneer bhurji + 1 bowl Dal + 150g Rice / 2 Rotis</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 3: EVENING SNACK</span>
            <p className="text-sm font-bold text-white">Soy Chunks Chat</p>
            <p className="text-xs text-slate-400">50g dry Soy chunks (boiled & seasoned) + Green tea</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 4: DINNER</span>
            <p className="text-sm font-bold text-white">High Fiber Veg Dinner</p>
            <p className="text-xs text-slate-400">Sprouted Moong salad + Curd / Tofu stir fry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NonVegDietPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">NON-VEGETARIAN</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Indian Non-Veg Diet Plans</h1>
        <p className="text-slate-300 text-base">
          Lean meat, egg white, and fish nutrition protocols engineered for clean muscle growth and fast recovery.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
        <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Sample 2300 Calorie Non-Veg Diet Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 1: BREAKFAST</span>
            <p className="text-sm font-bold text-white">Egg Omelette & Oats</p>
            <p className="text-xs text-slate-400">4 Egg Whites + 1 Whole Egg + 60g Brown Bread / Oats</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 2: LUNCH</span>
            <p className="text-sm font-bold text-white">Grilled Chicken Rice Bowl</p>
            <p className="text-xs text-slate-400">180g Chicken breast + 150g Rice + Steamed Broccoli</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 3: SNACK</span>
            <p className="text-sm font-bold text-white">Protein Shake / Boiled Eggs</p>
            <p className="text-xs text-slate-400">1 scoop Whey or 3 hard boiled egg whites + almonds</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-xs text-lime-400 font-bold">MEAL 4: DINNER</span>
            <p className="text-sm font-bold text-white">Fish / Chicken Roti Meal</p>
            <p className="text-xs text-slate-400">150g Fish/Chicken + 2 wheat rotis + cucumber salad</p>
          </div>
        </div>
      </div>
    </div>
  );
};
