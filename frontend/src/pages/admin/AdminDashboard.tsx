import React from 'react';
import { Link } from 'react-router-dom';
import { Users, DollarSign, Calendar, Dumbbell, Utensils, MessageSquare, ShieldCheck, Activity } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-lime-400 font-bold text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>HEAD COACH CONTROL CENTER</span>
          </div>
          <h1 className="text-3xl font-black text-white">Coach Nilesh Hadote Dashboard</h1>
          <p className="text-xs text-slate-400">Manage client rosters, assign custom plans, and review check-in performance.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/admin/clients" className="bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-md">
            Manage Clients
          </Link>
          <Link to="/admin/plan-builders" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs">
            Plan Builders
          </Link>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase">Active Clients</span>
            <Users className="w-4 h-4 text-lime-400" />
          </div>
          <p className="text-3xl font-black text-white">48</p>
          <p className="text-[11px] text-emerald-400 font-semibold">+6 enrolled this month</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase">Monthly Revenue</span>
            <DollarSign className="w-4 h-4 text-lime-400" />
          </div>
          <p className="text-3xl font-black text-white">₹2,45,000</p>
          <p className="text-[11px] text-emerald-400 font-semibold">Razorpay Verified</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase">Pending Check-Ins</span>
            <Activity className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-3xl font-black text-amber-400">12</p>
          <p className="text-[11px] text-slate-400">Requires coach feedback</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold uppercase">New Consultations</span>
            <Calendar className="w-4 h-4 text-lime-400" />
          </div>
          <p className="text-3xl font-black text-white">7</p>
          <p className="text-[11px] text-lime-400 font-semibold">Booked for this week</p>
        </div>
      </div>

      {/* Admin Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/clients" className="bg-slate-900 border border-slate-800 hover:border-lime-400/50 p-6 rounded-3xl space-y-3 transition-all">
          <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Client Management</h3>
          <p className="text-xs text-slate-400">View registered clients, assign workout/diet plans, and review check-in logs.</p>
        </Link>

        <Link to="/admin/plan-builders" className="bg-slate-900 border border-slate-800 hover:border-lime-400/50 p-6 rounded-3xl space-y-3 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Dumbbell className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Workout & Diet Builders</h3>
          <p className="text-xs text-slate-400">Create periodized workout splits and calculate Indian meal macro plans.</p>
        </Link>

        <Link to="/admin/library" className="bg-slate-900 border border-slate-800 hover:border-lime-400/50 p-6 rounded-3xl space-y-3 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Utensils className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Exercise & Food Database</h3>
          <p className="text-xs text-slate-400">Manage exercise instructions and Indian food macro library items.</p>
        </Link>
      </div>
    </div>
  );
};
