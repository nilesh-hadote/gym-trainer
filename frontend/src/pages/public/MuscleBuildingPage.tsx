import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, CheckCircle2, ArrowRight } from 'lucide-react';

export const MuscleBuildingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">HYPERTROPHY & STRENGTH</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Muscle Building Program</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Pack on dense muscle mass, increase compound strength, and sculpt an aesthetic physique through periodized hyperthrophy training.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">How We Build Muscle</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Progressive overload programming with tracked logbooks.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Controlled caloric surplus or recomposition macro target.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Form checks and execution tweaks for maximum fiber activation.</li>
          </ul>
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 bg-lime-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md"
          >
            <span>Start Muscle Building</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="rounded-3xl overflow-hidden border border-slate-800">
          <img src="/assets/gym_action.png" alt="Muscle Building Workout" className="w-full h-80 object-cover" />
        </div>
      </div>
    </div>
  );
};
