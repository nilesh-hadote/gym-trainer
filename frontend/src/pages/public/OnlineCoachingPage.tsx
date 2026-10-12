import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const OnlineCoachingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">GLOBAL REMOTE COACHING</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Online Fitness Coaching</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Get Nilesh Hadote's expert workout and nutrition strategy delivered directly to your smartphone with weekly progress accountability.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl font-extrabold text-white">How Online Coaching Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-lime-400 font-bold text-lg">01. App Dashboard</span>
            <p className="text-xs text-slate-400 leading-relaxed">Access your personalized exercise routines with video demos and precise sets/reps.</p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-lime-400 font-bold text-lg">02. Indian Diet Plan</span>
            <p className="text-xs text-slate-400 leading-relaxed">Receive a custom meal chart (Veg or Non-Veg) suited to your home kitchen.</p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-lime-400 font-bold text-lg">03. Weekly Check-In</span>
            <p className="text-xs text-slate-400 leading-relaxed">Submit weekly weight logs & measurements for continuous adjustments.</p>
          </div>
        </div>
        <div className="pt-4 text-center">
          <Link
            to="/coaching-plans"
            className="inline-flex items-center gap-2 bg-lime-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold text-sm shadow-md"
          >
            <span>View Online Coaching Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
