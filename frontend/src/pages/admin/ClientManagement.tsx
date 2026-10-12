import React, { useState } from 'react';
import { Users, CheckCircle2, Search, Dumbbell, Utensils } from 'lucide-react';

export const ClientManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const clients = [
    { id: 1, name: 'Aayush Sharma', email: 'client@example.com', package: 'Transformation Pro (3M)', diet: 'Vegetarian', status: 'ACTIVE', weight: '78.5 kg' },
    { id: 2, name: 'Rahul Verma', email: 'rahul@example.com', package: '1-on-1 VIP Mentorship', diet: 'Eggetarian', status: 'ACTIVE', weight: '82.0 kg' },
    { id: 3, name: 'Priya Kulkarni', email: 'priya@example.com', package: 'Starter Program (1M)', diet: 'Non-Vegetarian', status: 'ACTIVE', weight: '64.2 kg' },
    { id: 4, name: 'Siddharth Nair', email: 'sid@example.com', package: 'Transformation Pro (3M)', diet: 'Vegetarian', status: 'ACTIVE', weight: '88.1 kg' }
  ];

  const filtered = clients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.email.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">ADMIN PORTAL</span>
          <h1 className="text-3xl font-black text-white">Client Management Roster</h1>
        </div>
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:border-lime-400 focus:outline-none"
            placeholder="Search clients..."
          />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800 uppercase tracking-wider">
              <th className="p-4">Client Name</th>
              <th className="p-4">Active Package</th>
              <th className="p-4">Diet Preference</th>
              <th className="p-4">Current Weight</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {filtered.map((c) => (
              <tr key={c.id} className="hover:bg-slate-800/40">
                <td className="p-4 font-bold text-white">{c.name}<br/><span className="text-[11px] text-slate-400 font-normal">{c.email}</span></td>
                <td className="p-4 font-semibold text-lime-400">{c.package}</td>
                <td className="p-4">{c.diet}</td>
                <td className="p-4 font-bold">{c.weight}</td>
                <td className="p-4"><span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">{c.status}</span></td>
                <td className="p-4 text-right space-x-2">
                  <button className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold">
                    Assign Workout
                  </button>
                  <button className="bg-lime-400 hover:bg-lime-500 text-slate-950 px-3 py-1.5 rounded-lg text-[11px] font-bold">
                    Assign Diet
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const PlanBuilders: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-3xl font-black text-white">Workout & Diet Plan Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <h2 className="text-xl font-bold text-white">Interactive Workout Builder</h2>
          <p className="text-xs text-slate-400">Select exercises from the library, set volume (sets/reps), and assign to client.</p>
          <button className="bg-lime-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs">Create Workout Split</button>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <h2 className="text-xl font-bold text-white">Indian Meal Plan Builder</h2>
          <p className="text-xs text-slate-400">Set calorie & macro targets, pick Indian foods (Paneer, Soy, Chicken, Rice), and save chart.</p>
          <button className="bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs">Create Meal Chart</button>
        </div>
      </div>
    </div>
  );
};

export const LibraryManagement: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-3xl font-black text-white">Exercise & Food Database Manager</h1>
      <p className="text-xs text-slate-400">Manage exercise instructions and Indian food macro library.</p>
    </div>
  );
};
