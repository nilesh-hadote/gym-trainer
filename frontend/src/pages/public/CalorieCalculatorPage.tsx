import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Flame,
  Scale,
  Dumbbell,
  Droplets,
  Apple,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Activity,
  HeartPulse,
  Info,
  ShieldCheck
} from 'lucide-react';

export const CalorieCalculatorPage: React.FC = () => {
  // Input states
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(26);
  const [weight, setWeight] = useState<number>(72);
  const [height, setHeight] = useState<number>(174);
  const [activityLevel, setActivityLevel] = useState<number>(1.55); // Moderately active
  const [goal, setGoal] = useState<'aggressive_loss' | 'moderate_loss' | 'maintain' | 'lean_gain' | 'bulk'>('moderate_loss');
  const [dietPreference, setDietPreference] = useState<'vegetarian' | 'eggetarian' | 'non_vegetarian'>('vegetarian');

  // Calculation logic
  const calculations = useMemo(() => {
    // 1. BMR (Mifflin-St Jeor equation)
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;

    // 2. TDEE (Total Daily Energy Expenditure)
    const tdee = Math.round(bmr * activityLevel);

    // 3. Goal Calorie Adjustment
    let calorieDelta = 0;
    if (goal === 'aggressive_loss') calorieDelta = -500;
    else if (goal === 'moderate_loss') calorieDelta = -350;
    else if (goal === 'maintain') calorieDelta = 0;
    else if (goal === 'lean_gain') calorieDelta = 250;
    else if (goal === 'bulk') calorieDelta = 450;

    const targetCalories = Math.max(1200, Math.round(tdee + calorieDelta));

    // 4. Macro targets
    // Protein: ~1.8g to 2.2g per kg depending on goal
    let proteinMultiplier = 2.0;
    if (goal === 'aggressive_loss') proteinMultiplier = 2.2;
    else if (goal === 'moderate_loss') proteinMultiplier = 2.0;
    else if (goal === 'maintain') proteinMultiplier = 1.8;
    else if (goal === 'lean_gain') proteinMultiplier = 2.0;
    else if (goal === 'bulk') proteinMultiplier = 1.9;

    const proteinGrams = Math.round(weight * proteinMultiplier);
    const proteinCalories = proteinGrams * 4;

    // Fats: ~25% of total calories
    const fatCalories = Math.round(targetCalories * 0.25);
    const fatGrams = Math.round(fatCalories / 9);

    // Carbohydrates: Remainder
    const carbCalories = Math.max(0, targetCalories - (proteinCalories + fatCalories));
    const carbGrams = Math.round(carbCalories / 4);

    // Water intake (liters) ~35-40ml per kg + workout bonus
    const waterLiters = (weight * 0.038).toFixed(1);

    // BMI
    const heightInMeters = height / 100;
    const bmi = +(weight / (heightInMeters * heightInMeters)).toFixed(1);

    let bmiStatus = 'Normal Weight';
    let bmiColor = 'text-emerald-400';
    if (bmi < 18.5) {
      bmiStatus = 'Underweight';
      bmiColor = 'text-amber-400';
    } else if (bmi >= 25 && bmi < 30) {
      bmiStatus = 'Overweight';
      bmiColor = 'text-amber-400';
    } else if (bmi >= 30) {
      bmiStatus = 'Obese';
      bmiColor = 'text-rose-400';
    }

    // Macro percentages
    const totalMacroCal = (proteinGrams * 4) + (carbGrams * 4) + (fatGrams * 9);
    const proteinPct = Math.round(((proteinGrams * 4) / totalMacroCal) * 100);
    const carbPct = Math.round(((carbGrams * 4) / totalMacroCal) * 100);
    const fatPct = Math.round(((fatGrams * 9) / totalMacroCal) * 100);

    return {
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      proteinGrams,
      carbGrams,
      fatGrams,
      waterLiters,
      bmi,
      bmiStatus,
      bmiColor,
      proteinPct,
      carbPct,
      fatPct
    };
  }, [gender, age, weight, height, activityLevel, goal]);

  // Goal name formatter
  const getGoalName = () => {
    switch (goal) {
      case 'aggressive_loss': return 'Aggressive Fat Loss';
      case 'moderate_loss': return 'Moderate Fat Loss & Toning';
      case 'maintain': return 'Maintain & Recomposition';
      case 'lean_gain': return 'Lean Muscle Gain';
      case 'bulk': return 'Mass Building / Bulk';
    }
  };

  // Indian Diet suggestions
  const getDietSuggestions = () => {
    if (dietPreference === 'vegetarian') {
      return [
        { name: 'Soya Chunks', protein: '52g / 100g', role: 'Highest vegetarian protein source, versatile in curries & pulao' },
        { name: 'Low-Fat Paneer', protein: '18g / 100g', role: 'Slow-digesting casein protein, ideal for dinner or bhurji' },
        { name: 'Greek Yogurt / Hung Dahi', protein: '10g / 100g', role: 'Gut health, probiotics & quick protein snack' },
        { name: 'Moong Dal Chilla / Sprouts', protein: '24g / 100g', role: 'High fiber, complex carbs + protein for breakfast' },
        { name: 'Whey Protein Isolate', protein: '25g / scoop', role: 'Fast-digesting post-workout recovery staple' },
      ];
    } else if (dietPreference === 'eggetarian') {
      return [
        { name: 'Whole Eggs & Egg Whites', protein: '6g per egg', role: 'Gold standard biological value, vitamins & choline' },
        { name: 'Low-Fat Paneer', protein: '18g / 100g', role: 'Rich calcium & sustained amino acid release' },
        { name: 'Soya Chunks / Tofu', protein: '52g / 100g', role: 'Lean, low-carb plant protein powerhouse' },
        { name: 'Rolled Oats with Milk & Whey', protein: '30g total', role: 'Ideal sustained pre-workout or breakfast meal' },
        { name: 'Curd & Roasted Chana', protein: '15g / serving', role: 'Traditional Indian high-fiber snack' },
      ];
    } else {
      return [
        { name: 'Skinless Chicken Breast', protein: '31g / 100g', role: 'Leanest complete animal protein with zero carbs' },
        { name: 'Whole Eggs + Egg Whites', protein: '24g / 4 eggs', role: 'Healthy fats, micronutrients and muscle repair' },
        { name: 'Fish (Rohu / Tilapia / Salmon)', protein: '22g / 100g', role: 'Rich in Omega-3 fatty acids for joints & heart' },
        { name: 'Paneer / Dahi', protein: '18g / 100g', role: 'Dairy protein source for variety & digestion' },
        { name: 'Whey Protein Post-Workout', protein: '26g / scoop', role: 'Rapid muscle protein synthesis (MPS) trigger' },
      ];
    }
  };

  // WhatsApp prefilled message
  const whatsappText = encodeURIComponent(
    `Hi Coach Nilesh! I used your Indian TDEE & Calorie Calculator on your website:\n\n` +
    `👤 Details: ${gender === 'male' ? 'Male' : 'Female'}, ${age} yrs, ${weight}kg, ${height}cm\n` +
    `🎯 Goal: ${getGoalName()}\n` +
    `🥗 Diet: ${dietPreference.toUpperCase()}\n` +
    `📊 Target Calories: ${calculations.targetCalories} kcal\n` +
    `💪 Macros: ${calculations.proteinGrams}g Protein | ${calculations.carbGrams}g Carbs | ${calculations.fatGrams}g Fats\n` +
    `💧 Water: ${calculations.waterLiters}L/day\n\n` +
    `I want to get a personalized workout and nutrition coaching plan tailored for my routine in Indore / online. Can we connect?`
  );

  return (
    <div className="py-12 bg-slate-950 text-slate-100 min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-lime-400/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Indian Nutrition Tool</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            CALORIE & <span className="text-gradient-lime">MACRO CALCULATOR</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Scientifically calculate your <strong className="text-slate-200">BMR, TDEE maintenance</strong>, and daily target calories with precise Indian macro distributions (Vegetarian, Eggetarian & Non-Veg) calibrated by <strong className="text-lime-400">Nilesh Hadote</strong>.
          </p>
        </div>

        {/* Main Grid: Calculator Inputs & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-lime-400" />
                <span>Your Body Metrics</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Input your stats for customized calculations</p>
            </div>

            {/* Gender Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Gender</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-3 rounded-xl font-bold text-sm transition-all border ${
                    gender === 'male'
                      ? 'bg-lime-400 text-slate-950 border-lime-400 shadow-md shadow-lime-400/20'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-3 rounded-xl font-bold text-sm transition-all border ${
                    gender === 'female'
                      ? 'bg-lime-400 text-slate-950 border-lime-400 shadow-md shadow-lime-400/20'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age, Weight, Height */}
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Age (yrs)</label>
                <input
                  type="number"
                  min="14"
                  max="85"
                  value={age}
                  onChange={(e) => setAge(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white font-bold text-sm focus:outline-none focus:border-lime-400"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Weight (kg)</label>
                <input
                  type="number"
                  min="30"
                  max="200"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white font-bold text-sm focus:outline-none focus:border-lime-400"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Height (cm)</label>
                <input
                  type="number"
                  min="120"
                  max="230"
                  value={height}
                  onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white font-bold text-sm focus:outline-none focus:border-lime-400"
                />
              </div>
            </div>

            {/* Activity Level */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-lime-400"
              >
                <option value={1.2}>Sedentary (Desk job, little to no gym)</option>
                <option value={1.375}>Lightly Active (Workouts 1-3 days/week)</option>
                <option value={1.55}>Moderately Active (Gym workouts 3-5 days/week)</option>
                <option value={1.725}>Very Active (Hard workouts 6-7 days/week)</option>
                <option value={1.9}>Extremely Active (Daily hard training + physical work)</option>
              </select>
            </div>

            {/* Primary Goal */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Primary Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-lime-400 font-medium"
              >
                <option value="aggressive_loss">⚡ Aggressive Fat Loss (-500 kcal/day)</option>
                <option value="moderate_loss">🔥 Moderate Fat Loss & Toning (-350 kcal/day)</option>
                <option value="maintain">⚖️ Weight Maintenance / Recomposition (0 kcal)</option>
                <option value="lean_gain">💪 Lean Muscle Growth (+250 kcal/day)</option>
                <option value="bulk">🚀 Muscle Mass Bulking (+450 kcal/day)</option>
              </select>
            </div>

            {/* Dietary Preference */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Dietary Preference</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'vegetarian', label: 'Pure Veg' },
                  { id: 'eggetarian', label: 'Eggetarian' },
                  { id: 'non_vegetarian', label: 'Non-Veg' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDietPreference(item.id as any)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-colors ${
                      dietPreference === item.id
                        ? 'bg-lime-400 text-slate-950 border-lime-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Coach Quick Note */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Coach Nilesh calculates these using standard medical Mifflin-St Jeor metabolic equations with Indian dietary macro-nutrient density profiles.
              </p>
            </div>
          </div>

          {/* Right Column: Calculated Results & Blueprint (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/80 border border-lime-400/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Flame className="w-48 h-48 text-lime-400" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div>
                  <span className="text-xs font-bold text-lime-400 uppercase tracking-widest block">TARGET DAILY CALORIES</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-white">{calculations.targetCalories.toLocaleString()}</span>
                    <span className="text-slate-400 font-semibold text-lg">kcal / day</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Goal: <strong className="text-white">{getGoalName()}</strong>
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-2 sm:text-right">
                  <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
                    <span className="text-slate-400">BMR: </span>
                    <strong className="text-white">{calculations.bmr} kcal</strong>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
                    <span className="text-slate-400">Maintenance TDEE: </span>
                    <strong className="text-white">{calculations.tdee} kcal</strong>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
                    <span className="text-slate-400">BMI: </span>
                    <strong className="text-white">{calculations.bmi} </strong>
                    <span className={`font-bold ml-1 ${calculations.bmiColor}`}>({calculations.bmiStatus})</span>
                  </div>
                </div>
              </div>

              {/* Macro Trio Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-lime-400 uppercase">Protein</span>
                    <span className="text-[10px] font-bold text-slate-500">{calculations.proteinPct}%</span>
                  </div>
                  <p className="text-2xl font-black text-white">{calculations.proteinGrams}g</p>
                  <p className="text-[11px] text-slate-400">~{calculations.proteinGrams * 4} kcal</p>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase">Carbohydrates</span>
                    <span className="text-[10px] font-bold text-slate-500">{calculations.carbPct}%</span>
                  </div>
                  <p className="text-2xl font-black text-white">{calculations.carbGrams}g</p>
                  <p className="text-[11px] text-slate-400">~{calculations.carbGrams * 4} kcal</p>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase">Healthy Fats</span>
                    <span className="text-[10px] font-bold text-slate-500">{calculations.fatPct}%</span>
                  </div>
                  <p className="text-2xl font-black text-white">{calculations.fatGrams}g</p>
                  <p className="text-[11px] text-slate-400">~{calculations.fatGrams * 9} kcal</p>
                </div>
              </div>

              {/* Macro Proportion Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-400">
                  <span>Macro Distribution</span>
                  <span>{calculations.proteinPct}% Protein • {calculations.carbPct}% Carbs • {calculations.fatPct}% Fats</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-950 flex overflow-hidden border border-slate-800">
                  <div style={{ width: `${calculations.proteinPct}%` }} className="bg-lime-400 h-full" title="Protein" />
                  <div style={{ width: `${calculations.carbPct}%` }} className="bg-amber-400 h-full" title="Carbs" />
                  <div style={{ width: `${calculations.fatPct}%` }} className="bg-emerald-400 h-full" title="Fats" />
                </div>
              </div>

              {/* Daily Hydration Target */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase block">Optimal Water Intake</span>
                    <span className="text-xs text-slate-400">Recommended for your bodyweight & workouts</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-cyan-400">{calculations.waterLiters} L</span>
                  <span className="text-xs text-slate-500 block">/ day</span>
                </div>
              </div>
            </div>

            {/* Indian Diet Food Sources Recommendation */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Apple className="w-5 h-5 text-lime-400" />
                    <span>Recommended Indian Staples ({dietPreference.toUpperCase()})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">Top protein and nutrition sources tailored to your dietary choice</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {getDietSuggestions().map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                    <span className="inline-block self-start sm:self-auto text-xs font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 px-2.5 py-1 rounded-lg whitespace-nowrap">
                      {item.protein}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-lime-950/60 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 max-w-md">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">DIRECT COACHING ACTION</span>
                <h4 className="text-lg font-black text-white">Send Your Target to Coach Nilesh</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Get a personalized diet chart and gym workout plan built specifically around these numbers for your schedule in Indore or online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={`https://wa.me/919993322135?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl font-bold text-sm border border-slate-700 transition-colors"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Informative Guidance Section */}
        <div className="pt-12 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Scientific BMR & TDEE</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We employ the Mifflin-St Jeor equation, the gold standard in metabolic dietetics, rather than inaccurate rough estimations.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Indian Food Macro Accuracy</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calculated specifically for Indian food palettes including lentils, paneer, and rotis, ensuring realistic meal plans you can sustain for life.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Coach Accountability</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calorie numbers are only the blueprint. Nilesh Hadote tracks your weekly weight, energy levels, and progressive overload to adjust calories as you adapt.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
