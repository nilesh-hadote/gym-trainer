import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Award, Target, CheckCircle2, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">ABOUT NILESH HADOTE</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            MEET YOUR HEAD FITNESS COACH & STRATEGIST
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Nilesh Hadote is a passionate personal trainer and fitness mentor based in Indore, Madhya Pradesh, dedicated to empowering individuals across India and globally to achieve sustainable body transformations.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            By integrating science-backed strength programming with realistic, enjoyable Indian dietary protocols, Nilesh cuts through fitness myths and provides clear, actionable guidance.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 bg-lime-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <img
              src="/assets/nilesh_hero.png"
              alt="Nilesh Hadote Portrait"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Philosophy */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">PHILOSOPHY & VALUES</span>
          <h2 className="text-3xl font-extrabold text-white">The 3 Pillars of Nilesh's Coaching</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">1</div>
            <h3 className="text-lg font-bold text-white">Progressive Overload</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every workout has a purpose. We measure weights, reps, and sets to guarantee consistent strength & muscle progression.
            </p>
          </div>

          <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">2</div>
            <h3 className="text-lg font-bold text-white">Realistic Indian Nutrition</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No crash diets or expensive imported foods. We build delicious meal charts around paneer, eggs, chicken, rice, and lentils.
            </p>
          </div>

          <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">3</div>
            <h3 className="text-lg font-bold text-white">Relentless Accountability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Weekly check-ins, weight tracking, and direct WhatsApp communication keep you accountable every single week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
