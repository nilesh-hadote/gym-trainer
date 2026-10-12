import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = '919993322135';
  const defaultMessage = encodeURIComponent(
    'Hi Coach Nilesh Hadote! I visited your website and would like to inquire about personal training in Indore / online coaching.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div id="floating-whatsapp" className="no-print fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Card */}
      {open && (
        <div className="mb-3 w-80 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl shadow-emerald-500/10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  NH
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Nilesh Hadote</h4>
                <p className="text-[11px] text-emerald-400 font-medium">Online • Indore, MP</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
            <p className="flex items-center gap-1.5 text-lime-400 font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Direct WhatsApp Access
            </p>
            Have questions about diet plans, gym workouts in Indore, or remote transformation coaching? Message me directly!
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp (+91 9993322135)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp with Coach Nilesh Hadote"
      >
        <span className="relative">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
          </span>
        </span>
        <span className="hidden sm:inline-block font-extrabold text-xs tracking-wide">
          Chat With Coach
        </span>
      </button>
    </div>
  );
};
