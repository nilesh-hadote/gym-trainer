import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 text-slate-950 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md">
      <Flame className="w-4 h-4 text-slate-950 animate-pulse" />
      <span>Transform Your Body With Nilesh Hadote — Personalized Online & In-Person Coaching</span>
      <Link
        to="/book-consultation"
        className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-85 ml-2 font-bold"
      >
        Book Free Consultation <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};
