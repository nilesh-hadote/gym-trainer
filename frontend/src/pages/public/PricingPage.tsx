import React, { useState, useEffect } from 'react';
import { ApiService } from '../../services/api';
import { CoachingPackage } from '../../types';
import { CheckCircle2, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  const [packages, setPackages] = useState<CoachingPackage[]>([]);
  const [selectedPkg, setSelectedPkg] = useState<CoachingPackage | null>(null);

  useEffect(() => {
    ApiService.getPackages().then(setPackages);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">INVEST IN YOURSELF</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Coaching Packages & Pricing</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Transparent pricing with zero hidden fees. Choose your duration and begin your body transformation journey with Nilesh Hadote.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl p-8 bg-slate-900 border flex flex-col justify-between ${
              pkg.popularBadge ? 'border-lime-400 shadow-xl shadow-lime-500/10' : 'border-slate-800'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                {pkg.popularBadge && (
                  <span className="text-[10px] font-black bg-lime-400 text-slate-950 px-2.5 py-0.5 rounded-full uppercase">
                    POPULAR
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">{pkg.tagline}</p>
              <div className="pt-2">
                <span className="text-4xl font-black text-white">₹{pkg.priceINR.toLocaleString('en-IN')}</span>
                {pkg.originalPriceINR && (
                  <span className="text-xs text-slate-400 line-through ml-2">₹{pkg.originalPriceINR.toLocaleString('en-IN')}</span>
                )}
                <span className="block text-xs text-lime-400 font-semibold mt-1">Duration: {pkg.durationMonths} Month(s)</span>
              </div>
              <hr className="border-slate-800 my-4" />
              <ul className="space-y-3 text-xs text-slate-300">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setSelectedPkg(pkg)}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-lime-400 hover:bg-lime-500 text-slate-950 shadow-md transition-colors"
              >
                Enroll in {pkg.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Modal Simulation */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full space-y-6 relative">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Enrollment Checkout</h3>
              <button onClick={() => setSelectedPkg(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl space-y-2 border border-slate-800">
              <p className="text-xs text-slate-400 uppercase font-bold">Selected Package</p>
              <p className="text-lg font-bold text-white">{selectedPkg.title}</p>
              <p className="text-2xl font-black text-lime-400">₹{selectedPkg.priceINR.toLocaleString('en-IN')}</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-slate-300">Choose your preferred payment method:</p>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between cursor-pointer hover:border-lime-400">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-lime-400" />
                  <span className="text-sm font-semibold text-white">Razorpay (UPI / Cards / NetBanking)</span>
                </div>
                <span className="text-xs text-lime-400 font-bold">Recommended</span>
              </div>
            </div>

            <Link
              to="/book-consultation"
              className="w-full text-center block bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold py-3.5 rounded-xl text-sm shadow-md"
            >
              Proceed to Consultation & Payment
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
