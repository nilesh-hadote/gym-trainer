import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export const PersonalTrainingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">IN-PERSON IN INDORE &amp; ONLINE COACHING</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Personal Training Program</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Direct, high-touch personal training sessions in Indore, Madhya Pradesh and remote coaching worldwide, focused on perfecting your form, pushing your physical boundaries safely, and getting maximum results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-white">What You Get in Personal Training</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Direct 1-on-1 coaching during workout sessions.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Precise exercise biomechanics and posture alignment.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Customized periodization based on gym equipment available.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Tailored warm-up and injury prevention mobility work.</li>
          </ul>
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 bg-lime-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md"
          >
            <span>Inquire for Personal Training</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="rounded-3xl overflow-hidden border border-slate-800">
          <img src="/assets/gym_action.png" alt="Personal Training Session" className="w-full h-80 object-cover" />
        </div>
      </div>
    </div>
  );
};
