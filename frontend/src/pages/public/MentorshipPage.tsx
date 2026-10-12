import React, { useState } from 'react';
import { ApiService } from '../../services/api';
import { Send, CheckCircle2, UserCheck } from 'lucide-react';

export const MentorshipPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    fitnessGoal: 'Weight Loss & Muscle Recomp',
    currentFitnessLevel: 'Intermediate',
    preferredCoachingFormat: 'Online Coaching + Zoom',
    challenges: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await ApiService.submitMentorship(formData);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">EXCLUSIVE 1-ON-1 GUIDANCE</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">One-to-One Mentorship</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Apply for direct 1-on-1 fitness mentorship with Nilesh Hadote for maximum speed, hyper-personalized accountability, and weekly Zoom strategy calls.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column info */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4">
            <h2 className="text-2xl font-bold text-white">Why Choose 1-on-1 Mentorship?</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Weekly 1-on-1 Zoom strategy and form review sessions.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Priority 24/7 direct WhatsApp voice note & chat access.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Frequent adjustments to workouts based on gym travel/lifestyle.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" /> Sleep, stress, and supplementation protocol optimization.</li>
            </ul>
          </div>
        </div>

        {/* Right Column form */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-lime-400/20 text-lime-400 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Application Received!</h3>
              <p className="text-sm text-slate-300">
                Thank you for applying. Nilesh Hadote will personally review your application and reach out within 24 hours via WhatsApp / Phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-white mb-2">Apply for Mentorship</h2>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Fitness Goal</label>
                <select
                  value={formData.fitnessGoal}
                  onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                >
                  <option value="Weight Loss & Muscle Recomp">Weight Loss & Muscle Recomp</option>
                  <option value="Lean Muscle Building">Lean Muscle Building</option>
                  <option value="Strength & Performance">Strength & Performance</option>
                  <option value="General Fitness & Lifestyle">General Fitness & Lifestyle</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Current Major Fitness Challenges</label>
                <textarea
                  rows={3}
                  value={formData.challenges}
                  onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                  placeholder="Describe your current routine, diet struggle, or goals..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-lime-400 hover:bg-lime-500 text-slate-950 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Submitting Application...' : 'Submit Mentorship Application'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
