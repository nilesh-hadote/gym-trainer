import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ApiService } from '../../services/api';
import { WorkoutPlan, DietPlan, CheckIn, ProgressEntry } from '../../types';
import { Dumbbell, Utensils, Flame, TrendingDown, Calendar, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [workout, setWorkout] = useState<WorkoutPlan | null>(null);
  const [diet, setDiet] = useState<DietPlan | null>(null);
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [progress, setProgress] = useState<ProgressEntry[]>([]);

  useEffect(() => {
    if (user) {
      ApiService.getClientWorkoutPlan(user.id).then(setWorkout);
      ApiService.getClientDietPlan(user.id).then(setDiet);
      ApiService.getCheckIns(user.id).then(setCheckIns);
      ApiService.getProgressHistory(user.id).then(setProgress);
    }
  }, [user]);

  const latestWeight = progress.length > 0 ? progress[progress.length - 1].weightKg : 78.5;
  const startWeight = progress.length > 0 ? progress[0].weightKg : 82.0;
  const weightChange = (startWeight - latestWeight).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-xl">
        <div className="space-y-2 relative z-10">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">CLIENT PORTAL</span>
          <h1 className="text-3xl font-black text-white">Welcome back, {user?.fullName.split(' ')[0]}! 👋</h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Active Program: <strong className="text-lime-400">12-Week Transformation Pro</strong> | Assigned Coach: <strong className="text-white">Nilesh Hadote</strong>
          </p>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <Link
            to="/client/check-in"
            className="bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <Activity className="w-4 h-4" />
            <span>Daily Check-In</span>
          </Link>
        </div>
      </div>

      {/* Overview Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Current Weight</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{latestWeight} kg</span>
            <span className="text-xs font-bold text-emerald-400">-{weightChange} kg</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Target Calories</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{diet?.targetCalories || 2100} kcal</span>
            <span className="text-xs text-slate-400">/ day</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Target Protein</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-lime-400">{diet?.targetProteinGrams || 140} g</span>
            <span className="text-xs text-slate-400">/ day</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Weekly Compliance</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400">95%</span>
            <span className="text-xs text-slate-400">Streak: 6 Days 🔥</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Today's Workout & Today's Diet Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Today's Workout */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-lime-400/10 text-lime-400">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Today's Assigned Workout</h2>
                <p className="text-xs text-slate-400">{workout?.days[0]?.dayName || 'Day 1 - Chest & Triceps'}</p>
              </div>
            </div>
            <Link to="/client/workouts" className="text-xs font-bold text-lime-400 hover:underline">
              View All Days
            </Link>
          </div>

          <div className="space-y-3">
            {workout?.days[0]?.workoutExercises.map((ex, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{ex.exercise.name}</h4>
                  <p className="text-xs text-slate-400">{ex.sets} Sets × {ex.reps} Reps | Rest: {ex.restSeconds}s</p>
                </div>
                <span className="text-xs font-bold text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-full">
                  Ready
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/client/workouts"
            className="w-full text-center block bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs transition-colors"
          >
            Start Workout Tracker
          </Link>
        </div>

        {/* Right Column: Today's Diet Plan */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Today's Nutrition Plan</h2>
                <p className="text-xs text-slate-400">Preference: {diet?.dietaryPreference || 'VEGETARIAN'}</p>
              </div>
            </div>
            <Link to="/client/diet" className="text-xs font-bold text-lime-400 hover:underline">
              Full Meal Plan
            </Link>
          </div>

          <div className="space-y-3">
            {diet?.meals.map((m, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-lime-400">{m.mealTime} • {m.mealName}</span>
                  <CheckCircle2 className="w-4 h-4 text-slate-600 hover:text-lime-400 cursor-pointer" />
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  {m.items.map(i => `${i.foodItem.name} (${i.quantity}x)`).join(' + ')}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/client/diet"
            className="w-full text-center block bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs transition-colors"
          >
            Log Today's Meals
          </Link>
        </div>

      </div>

      {/* Progress Chart Widget */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Body Weight Trend (kg)</h3>
            <p className="text-xs text-slate-400">Tracked over the last 6 weeks</p>
          </div>
          <Link to="/client/progress" className="text-xs font-bold text-lime-400 hover:underline">
            Detailed Progress
          </Link>
        </div>

        <div className="h-64 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progress}>
              <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
              <YAxis domain={['dataMin - 2', 'dataMax + 2']} stroke="#64748b" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
              <Line type="monotone" dataKey="weightKg" stroke="#a3e635" strokeWidth={3} dot={{ fill: '#a3e635', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
