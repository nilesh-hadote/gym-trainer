import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ApiService } from '../../services/api';
import type { WorkoutPlan, DietPlan, DietMeal, MealFoodItem } from '../../types';
import { CheckCircle2, Printer, Download, Dumbbell, Apple, Calendar, Info, FileText } from 'lucide-react';

export const ClientWorkouts: React.FC = () => {
  const { user } = useAuth();
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<Record<number, boolean>>({});
  const [printScope, setPrintScope] = useState<'all' | 'single'>('all');

  useEffect(() => {
    if (user) {
      ApiService.getClientWorkoutPlan(user.id).then(setPlan);
    }
  }, [user]);

  const toggleComplete = (id: number) => {
    setCompletedExercises(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  if (!plan) return <div className="p-8 text-center text-slate-400">Loading workout plan...</div>;

  const currentDay = plan.days[selectedDayIdx] || plan.days[0];
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* ================= PRINT-ONLY OFFICIAL HEADER ================= */}
      <div className="print-only mb-6 border-b-2 border-slate-900 pb-4 text-slate-900">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black tracking-wider uppercase text-slate-950">NILESH HADOTE</h1>
            <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">
              PREMIUM FITNESS COACHING & BODY TRANSFORMATION
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Indore, Madhya Pradesh, India • WhatsApp: +91 9993322135 • Email: nileshhadote763@gmail.com
            </p>
          </div>
          <div className="text-right text-xs">
            <span className="font-extrabold text-slate-900 block text-sm">PERSONALIZED WORKOUT PLAN</span>
            <span className="text-slate-700 font-semibold">Client: {user?.fullName || 'Client'}</span>
            <span className="text-slate-600 block mt-0.5">Date: {currentDate}</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-300 flex justify-between text-xs">
          <span><strong>Program:</strong> {plan.title}</span>
          <span><strong>Target Goal:</strong> {plan.targetGoal || 'Strength & Hypertrophy'}</span>
          <span><strong>Duration:</strong> {plan.durationWeeks} Weeks</span>
        </div>
      </div>

      {/* Screen Header with Print/PDF Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 no-print">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">WORKOUT PROGRAM</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-400">{plan.durationWeeks} Weeks</span>
          </div>
          <h1 className="text-3xl font-black text-white">{plan.title}</h1>
          <p className="text-xs text-slate-400 max-w-2xl">{plan.description}</p>
        </div>

        {/* Print / Export Action Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              type="button"
              onClick={() => setPrintScope('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                printScope === 'all' ? 'bg-lime-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Days
            </button>
            <button
              type="button"
              onClick={() => setPrintScope('single')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                printScope === 'single' ? 'bg-lime-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Current Day Only
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-lime-500/20 transition-all hover:scale-105"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF Plan</span>
          </button>
        </div>
      </div>

      {/* Days Tabs (Screen Only) */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar no-print">
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

      {/* ================= SCREEN VIEW: Selected Day Exercises ================= */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 no-print">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white">{currentDay.dayName}</h2>
          <span className="text-xs text-slate-400">{currentDay.workoutExercises.length} Exercises Scheduled</span>
        </div>

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
                      <span className="text-[10px] text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">
                        {we.exercise.equipment}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{we.exercise.instructions}</p>
                    <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300 pt-1">
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Sets: <strong className="text-white">{we.sets}</strong></span>
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Reps: <strong className="text-white">{we.reps}</strong></span>
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Rest: <strong className="text-white">{we.restSeconds}s</strong></span>
                      {we.notes && (
                        <span className="bg-lime-400/10 border border-lime-400/20 text-lime-400 px-3 py-1 rounded-lg">
                          Tip: {we.notes}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleComplete(we.id)}
                    className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0 ${
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

      {/* ================= PRINT-ONLY VIEW: Full or Single Day Layout ================= */}
      <div className="print-only text-slate-900 space-y-6">
        {(printScope === 'all' ? plan.days : [currentDay]).map((day) => (
          <div key={day.id} className="printable-card border border-slate-400 rounded-xl p-4 page-break-inside-avoid">
            <h2 className="text-base font-extrabold text-slate-950 border-b border-slate-300 pb-2 mb-3 uppercase tracking-wide">
              {day.dayName}
            </h2>

            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300 text-slate-700 uppercase font-bold text-[10px]">
                  <th className="py-2 pr-3">#</th>
                  <th className="py-2 pr-3">Exercise</th>
                  <th className="py-2 pr-3">Category</th>
                  <th className="py-2 pr-3 text-center">Sets</th>
                  <th className="py-2 pr-3 text-center">Reps</th>
                  <th className="py-2 pr-3 text-center">Rest</th>
                  <th className="py-2">Form & Instructions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {day.workoutExercises.map((we, exIdx) => (
                  <tr key={we.id} className="text-slate-900">
                    <td className="py-2.5 pr-3 font-bold text-slate-600">{exIdx + 1}</td>
                    <td className="py-2.5 pr-3 font-extrabold text-slate-950">{we.exercise.name}</td>
                    <td className="py-2.5 pr-3 text-slate-600">{we.exercise.category}</td>
                    <td className="py-2.5 pr-3 text-center font-bold">{we.sets}</td>
                    <td className="py-2.5 pr-3 text-center font-bold">{we.reps}</td>
                    <td className="py-2.5 pr-3 text-center">{we.restSeconds}s</td>
                    <td className="py-2.5 text-slate-700 text-[11px] leading-tight">
                      {we.exercise.instructions}
                      {we.notes && <span className="block italic text-slate-500 mt-0.5">Note: {we.notes}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Print Footer Instructions */}
        <div className="border-t border-slate-300 pt-3 text-[11px] text-slate-600 space-y-1">
          <p><strong>Coach Instructions:</strong> Always warm up for 5-10 minutes prior to training. Track your weights to ensure progressive overload each week. Stay hydrated throughout the session.</p>
          <p>For form check video reviews, send WhatsApp video clips to Nilesh Hadote (+91 9993322135).</p>
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

  const handlePrint = () => {
    window.print();
  };

  if (!diet) return <div className="p-8 text-center text-slate-400">Loading diet plan...</div>;

  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* ================= PRINT-ONLY OFFICIAL HEADER ================= */}
      <div className="print-only mb-6 border-b-2 border-slate-900 pb-4 text-slate-900">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black tracking-wider uppercase text-slate-950">NILESH HADOTE</h1>
            <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">
              EVIDENCE-BASED NUTRITION & BODY RECOMPOSITION
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Indore, Madhya Pradesh, India • WhatsApp: +91 9993322135 • Email: nileshhadote763@gmail.com
            </p>
          </div>
          <div className="text-right text-xs">
            <span className="font-extrabold text-slate-900 block text-sm">PERSONALIZED DIET & NUTRITION CHART</span>
            <span className="text-slate-700 font-semibold">Client: {user?.fullName || 'Client'}</span>
            <span className="text-slate-600 block mt-0.5">Date: {currentDate}</span>
          </div>
        </div>

        {/* Print Macro Summary Box */}
        <div className="mt-3 pt-3 border-t border-slate-300 grid grid-cols-4 gap-2 text-center text-xs">
          <div className="border border-slate-300 rounded p-1.5">
            <span className="text-slate-600 block text-[10px] uppercase font-bold">Daily Target Calories</span>
            <strong className="text-sm font-black text-slate-950">{diet.targetCalories} kcal</strong>
          </div>
          <div className="border border-slate-300 rounded p-1.5">
            <span className="text-slate-600 block text-[10px] uppercase font-bold">Daily Protein</span>
            <strong className="text-sm font-black text-slate-950">{diet.targetProteinGrams}g</strong>
          </div>
          <div className="border border-slate-300 rounded p-1.5">
            <span className="text-slate-600 block text-[10px] uppercase font-bold">Daily Carbohydrates</span>
            <strong className="text-sm font-black text-slate-950">{diet.targetCarbsGrams}g</strong>
          </div>
          <div className="border border-slate-300 rounded p-1.5">
            <span className="text-slate-600 block text-[10px] uppercase font-bold">Daily Fats</span>
            <strong className="text-sm font-black text-slate-950">{diet.targetFatsGrams}g</strong>
          </div>
        </div>
      </div>

      {/* Screen Header with Print/PDF Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 no-print">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">NUTRITION PLAN</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-400 uppercase">{diet.dietaryPreference || 'CUSTOM'}</span>
          </div>
          <h1 className="text-3xl font-black text-white">{diet.title}</h1>
          <p className="text-xs text-slate-400">Target Calories: <strong className="text-white">{diet.targetCalories} kcal</strong> | Target Protein: <strong className="text-lime-400">{diet.targetProteinGrams}g</strong></p>
        </div>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-lime-500 hover:from-emerald-500 hover:to-lime-600 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-105 shrink-0"
          title="Print or Save as PDF"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF Diet Chart</span>
        </button>
      </div>

      {/* Screen Macro KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 no-print">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Daily Protein Target</span>
          <p className="text-2xl font-black text-lime-400">{diet.targetProteinGrams}g</p>
          <p className="text-[11px] text-slate-500">Essential for muscle retention & recovery</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Daily Carbohydrates Target</span>
          <p className="text-2xl font-black text-amber-400">{diet.targetCarbsGrams}g</p>
          <p className="text-[11px] text-slate-500">Fuels training energy & workout performance</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Daily Healthy Fats</span>
          <p className="text-2xl font-black text-emerald-400">{diet.targetFatsGrams}g</p>
          <p className="text-[11px] text-slate-500">Hormonal balance & joint health</p>
        </div>
      </div>

      {/* Screen Meals List */}
      <div className="space-y-6 no-print">
        {diet.meals.map((meal: DietMeal) => (
          <div key={meal.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs text-lime-400 font-bold uppercase">{meal.mealTime}</span>
                <h3 className="text-lg font-bold text-white">{meal.mealName}</h3>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {meal.items.reduce((acc, curr) => acc + curr.foodItem.calories * curr.quantity, 0)} kcal total
              </span>
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

      {/* ================= PRINT-ONLY MEAL LAYOUT ================= */}
      <div className="print-only text-slate-900 space-y-4">
        {diet.meals.map((meal: DietMeal) => (
          <div key={meal.id} className="printable-card border border-slate-400 rounded-xl p-4 page-break-inside-avoid">
            <div className="flex justify-between items-center border-b border-slate-300 pb-2 mb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-600 block">{meal.mealTime}</span>
                <h3 className="text-base font-extrabold text-slate-950">{meal.mealName}</h3>
              </div>
              <span className="text-xs font-bold text-slate-700">
                Subtotal: {meal.items.reduce((acc, curr) => acc + curr.foodItem.calories * curr.quantity, 0)} kcal
              </span>
            </div>

            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300 text-slate-700 uppercase font-bold text-[10px]">
                  <th className="py-1.5 pr-2">Food Item</th>
                  <th className="py-1.5 pr-2">Quantity / Serving</th>
                  <th className="py-1.5 pr-2 text-right">Calories</th>
                  <th className="py-1.5 pr-2 text-right">Protein</th>
                  <th className="py-1.5">Preparation & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {meal.items.map((item: MealFoodItem) => (
                  <tr key={item.id} className="text-slate-900">
                    <td className="py-2 pr-2 font-bold">{item.foodItem.name}</td>
                    <td className="py-2 pr-2 text-slate-700">{item.foodItem.servingUnit} ({item.quantity}x)</td>
                    <td className="py-2 pr-2 text-right font-semibold">{item.foodItem.calories * item.quantity} kcal</td>
                    <td className="py-2 pr-2 text-right font-bold text-slate-950">{item.foodItem.protein * item.quantity}g</td>
                    <td className="py-2 text-slate-600 text-[11px]">{item.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Print Guidelines Box */}
        <div className="border border-slate-400 rounded-xl p-4 text-xs space-y-2 page-break-inside-avoid">
          <h4 className="font-extrabold uppercase text-slate-950 tracking-wider">Coach Nilesh's Nutrition Directives:</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Drink 3.5 to 4.0 Liters of water throughout the day. Keep an active water bottle count.</li>
            <li>Weigh raw ingredients on a digital kitchen scale whenever possible for precision.</li>
            <li>Avoid liquid calories (sugary sodas, packed fruit juices, heavy cream chai). Opt for black coffee, green tea, or unsweetened lemon water.</li>
            <li>For eating out recommendations or emergency substitutions, message Nilesh directly on WhatsApp (+91 9993322135).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
