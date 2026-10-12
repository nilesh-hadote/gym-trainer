import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, CheckCircle2, ArrowRight } from 'lucide-react';

export const WeightLossPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">FAT LOSS & BODY RECOMPOSITION</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Weight Loss Coaching Program</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Shed unwanted body fat permanently without extreme crash diets, starvation, or losing your hard-earned muscle mass.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl overflow-hidden border border-slate-800">
          <img src="/assets/indian_diet.png" alt="Weight Loss Nutrition" className="w-full h-80 object-cover" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Fat Loss Methodology</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Structured macro-based calorie deficit suited for Indian diets.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> High-protein meal plans to curb hunger and protect lean tissue.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Resistance training focus to elevate resting metabolic rate.</li>
          </ul>
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 bg-lime-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md"
          >
            <span>Start Weight Loss Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
