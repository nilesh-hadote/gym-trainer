import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ApiService } from '../../services/api';
import type { WorkoutPlan, DietPlan, DietMeal, MealFoodItem } from '../../types';
import { CheckCircle2 } from 'lucide-react';

export const ClientWorkouts: React.FC = () => {
  const { user } = useAuth();
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (user) {
      ApiService.getClientWorkoutPlan(user.id).then(setPlan);
    }
  }, [user]);

  const toggleComplete = (id: number) => {
    setCompletedExercises(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!plan) return <div className="p-8 text-center text-slate-400">Loading workout plan...</div>;

  const currentDay = plan.days[selectedDayIdx] || plan.days[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="space-y-2">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">WORKOUT PROGRAM</span>
        <h1 className="text-3xl font-black text-white">{plan.title}</h1>
        <p className="text-xs text-slate-400">{plan.description}</p>
      </div>

      {/* Days Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {plan.days.map((day, idx) => (
          <button
            key={day.id}
            onClick={() => setSelectedDayIdx(idx)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedDayIdx === idx
                ? 'bg-lime-400 text-slate-950 shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {day.dayName}
          </button>
        ))}
      </div>

      {/* Exercises List */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">{currentDay.dayName}</h2>
        <div className="space-y-4">
          {currentDay.workoutExercises.map((we) => {
            const isDone = !!completedExercises[we.id];
            return (
              <div
                key={we.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isDone ? 'bg-slate-950/40 border-lime-400/30' : 'bg-slate-950 border-slate-800'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-base font-bold ${isDone ? 'text-lime-400 line-through' : 'text-white'}`}>
                        {we.exercise.name}
                      </h3>
                      <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                        {we.exercise.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{we.exercise.instructions}</p>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300 pt-1">
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Sets: <strong className="text-white">{we.sets}</strong></span>
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Reps: <strong className="text-white">{we.reps}</strong></span>
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Rest: <strong className="text-white">{we.restSeconds}s</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleComplete(we.id)}
                    className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors ${
                      isDone
                        ? 'bg-lime-400 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isDone ? 'Done' : 'Mark Done'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ClientDiet: React.FC = () => {
  const { user } = useAuth();
  const [diet, setDiet] = useState<DietPlan | null>(null);

  useEffect(() => {
    if (user) {
      ApiService.getClientDietPlan(user.id).then(setDiet);
    }
  }, [user]);

  if (!diet) return <div className="p-8 text-center text-slate-400">Loading diet plan...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="space-y-2">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">NUTRITION PLAN</span>
        <h1 className="text-3xl font-black text-white">{diet.title}</h1>
        <p className="text-xs text-slate-400">Target Calories: <strong className="text-white">{diet.targetCalories} kcal</strong> | Target Protein: <strong className="text-lime-400">{diet.targetProteinGrams}g</strong></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Daily Protein</span>
          <p className="text-2xl font-black text-lime-400">{diet.targetProteinGrams}g</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Daily Carbohydrates</span>
          <p className="text-2xl font-black text-amber-400">{diet.targetCarbsGrams}g</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Daily Fats</span>
          <p className="text-2xl font-black text-emerald-400">{diet.targetFatsGrams}g</p>
        </div>
      </div>

      <div className="space-y-6">
        {diet.meals.map((meal: DietMeal) => (
          <div key={meal.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs text-lime-400 font-bold uppercase">{meal.mealTime}</span>
                <h3 className="text-lg font-bold text-white">{meal.mealName}</h3>
              </div>
            </div>
            <div className="space-y-3">
              {meal.items.map((item: MealFoodItem) => (
                <div key={item.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.foodItem.name}</h4>
                    <p className="text-xs text-slate-400">Serving: {item.foodItem.servingUnit} ({item.quantity}x)</p>
                    {item.notes && <p className="text-[11px] text-lime-400/80 italic mt-0.5">{item.notes}</p>}
                  </div>
                  <div className="text-right text-xs">
                    <span className="font-bold text-white block">{item.foodItem.calories * item.quantity} kcal</span>
                    <span className="text-lime-400 font-semibold">{item.foodItem.protein * item.quantity}g protein</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
