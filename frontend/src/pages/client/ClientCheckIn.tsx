import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ApiService } from '../../services/api';
import { CheckIn, ProgressEntry } from '../../types';
import { Activity, CheckCircle2, TrendingDown, Calendar } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export const ClientCheckIn: React.FC = () => {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    weightKg: 78.0,
    energyLevel: 8,
    sleepQuality: 8,
    dietCompliancePercentage: 95,
    workoutCompleted: true,
    notes: ''
  });

  const handleCheckIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    await ApiService.saveCheckIn({
      userId: user.id,
      date: new Date().toISOString().split('T')[0],
      ...form
    });
    setSaved(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="space-y-2">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">DAILY LOG</span>
        <h1 className="text-3xl font-black text-white">Daily Progress Check-In</h1>
        <p className="text-xs text-slate-400">Log today's weight, energy, sleep, and compliance for Coach Nilesh to review.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        {saved ? (
          <div className="text-center py-10 space-y-3">
            <CheckCircle2 className="w-14 h-14 text-lime-400 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Check-In Logged Successfully!</h2>
            <p className="text-xs text-slate-300">Coach Nilesh Hadote will review your daily log during weekly check-in reviews.</p>
          </div>
        ) : (
          <form onSubmit={handleCheckIn} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Morning Body Weight (kg) *</label>
              <input
                type="number"
                step="0.1"
                required
                value={form.weightKg}
                onChange={(e) => setForm({ ...form, weightKg: parseFloat(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Energy Rating (1 - 10)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={form.energyLevel}
                  onChange={(e) => setForm({ ...form, energyLevel: parseInt(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Sleep Quality (1 - 10)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={form.sleepQuality}
                  onChange={(e) => setForm({ ...form, sleepQuality: parseInt(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Diet Compliance (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={form.dietCompliancePercentage}
                onChange={(e) => setForm({ ...form, dietCompliancePercentage: parseInt(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Workout & Form Notes</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                placeholder="Mention any PRs, fatigue, or questions for Coach Nilesh..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold py-3.5 rounded-xl text-sm shadow-md transition-colors"
            >
              Submit Daily Log
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export const ClientProgress: React.FC = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressEntry[]>([]);

  useEffect(() => {
    if (user) {
      ApiService.getProgressHistory(user.id).then(setProgress);
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="space-y-2">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">ANALYTICS & METRICS</span>
        <h1 className="text-3xl font-black text-white">Body Progress & Analytics</h1>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-white">Body Weight Graph (kg)</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progress}>
              <XAxis dataKey="date" stroke="#64748b" />
              <YAxis domain={['dataMin - 2', 'dataMax + 2']} stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
              <Line type="monotone" dataKey="weightKg" stroke="#a3e635" strokeWidth={3} dot={{ fill: '#a3e635', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const ClientBookings: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-3xl font-black text-white">My Scheduled Coaching Calls</h1>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-sm text-slate-300">
        <p className="font-bold text-white mb-2">Upcoming Session:</p>
        <p>1-on-1 Zoom Strategy Call with Nilesh Hadote</p>
        <p className="text-lime-400 font-semibold mt-1">Scheduled Date: Tomorrow at 05:00 PM IST</p>
      </div>
    </div>
  );
};
