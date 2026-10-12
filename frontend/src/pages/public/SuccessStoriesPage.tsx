import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Trophy, ArrowRight } from 'lucide-react';

export const SuccessStoriesPage: React.FC = () => {
  const stories = [
    {
      name: "Rahul Verma",
      result: "Lost 14 kg & Built 4 kg Lean Muscle",
      timeframe: "16 Weeks",
      diet: "Indian Vegetarian Diet",
      quote: "Nilesh made hitting my protein targets so simple with paneer and soy chunks. I never felt deprived once.",
      image: "/assets/nilesh_hero.png"
    },
    {
      name: "Priya Kulkarni",
      result: "Dropped 3 Dress Sizes & Increased Squat by 30kg",
      timeframe: "12 Weeks",
      diet: "Eggetarian High Energy Plan",
      quote: "The weekly check-ins and form video checks gave me the confidence to lift heavier than I ever imagined.",
      image: "/assets/gym_action.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">REAL CLIENT RESULTS</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Client Success Stories</h1>
        <p className="text-slate-300 text-base">
          Read authentic body transformation journeys from clients mentored by Nilesh Hadote.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((s, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
            <div className="flex items-center gap-1 text-lime-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <h3 className="text-2xl font-bold text-white">{s.result}</h3>
            <p className="text-xs text-lime-400 font-semibold">{s.name} • {s.timeframe} • {s.diet}</p>
            <p className="text-slate-300 text-sm italic">"{s.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
