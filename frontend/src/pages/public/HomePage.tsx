import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame, Award, ShieldCheck, CheckCircle2, ArrowRight, Zap,
  Target, Dumbbell, Utensils, Users, ChevronDown, Calendar, Star, MessageSquare
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const goalCards = [
    {
      title: "Weight Loss & Fat Burn",
      desc: "Sustainable calorie deficits without starving. Lose body fat while preserving lean muscle mass.",
      tag: "FAT LOSS",
      path: "/weight-loss-coaching",
      image: "/assets/indian_diet.png"
    },
    {
      title: "Muscle & Strength Build",
      desc: "Hypertrophy workout programs and progressive overload protocols to build a powerful physique.",
      tag: "HYPERTROPHY",
      path: "/muscle-building-program",
      image: "/assets/gym_action.png"
    },
    {
      title: "1-on-1 Personal Training",
      desc: "Direct personalized exercise coaching, real-time form corrections, and tailored sessions.",
      tag: "PERSONAL TRAINING",
      path: "/personal-training",
      image: "/assets/nilesh_hero.png"
    },
    {
      title: "Online Fitness Coaching",
      desc: "Complete custom workout & diet plan delivered straight to your phone with weekly check-ins.",
      tag: "ONLINE COACHING",
      path: "/online-fitness-coaching",
      image: "/assets/gym_action.png"
    }
  ];

  const faqs = [
    {
      q: "How does Nilesh Hadote's online coaching work?",
      a: "After enrolling, you complete a detailed fitness assessment intake form. Nilesh personally designs your custom workout program and Indian diet plan. You check in weekly via the client dashboard, submit your progress photos and measurements, and receive updated guidance."
    },
    {
      q: "Can I get a custom Indian vegetarian diet chart?",
      a: "Yes! Nilesh specializes in practical Indian vegetarian and egg-inclusive vegetarian meal plans using paneer, soy chunks, lentils, curd, and sprouts to easily meet your daily protein targets without monotonous meals."
    },
    {
      q: "Are non-vegetarian meal plans also available?",
      a: "Absolutely. Non-vegetarian meal charts feature clean Indian food options like grilled chicken, eggs, and fish calculated precisely for your daily calories and macros."
    },
    {
      q: "Is 1-on-1 mentorship available?",
      a: "Yes, Nilesh offers exclusive 1-on-1 VIP Mentorship for individuals who want maximum accountability, direct phone/WhatsApp access, form check video analyses, and weekly live Zoom strategy sessions."
    },
    {
      q: "Can beginners join this program?",
      a: "100% yes. Programs are tailored specifically to your current fitness level, whether you are stepping into a gym for the very first time or have years of lifting experience."
    }
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* SECTION 1 & 3: HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-8 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-lime-400/40 text-lime-400 text-xs font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>PERSONAL TRAINING • ONLINE COACHING • NUTRITION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.1]">
              BUILD STRENGTH. <br />
              <span className="text-gradient-lime">TRANSFORM YOUR BODY.</span> <br />
              OWN YOUR FITNESS.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Personalized workout programs, practical Indian nutrition guidance, and one-to-one coaching designed around your goals, lifestyle, and fitness journey by <strong className="text-white">Nilesh Hadote</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-slate-950 px-8 py-4 rounded-xl font-extrabold text-base shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/coaching-plans"
                className="inline-flex justify-center items-center gap-2 bg-slate-900 border border-slate-700 hover:border-lime-400/50 text-slate-200 hover:text-white px-7 py-4 rounded-xl font-bold text-base transition-colors"
              >
                <span>Explore Coaching Plans</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-lime-400 block">100%</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Custom Plans</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">Veg & Non-Veg</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Diet Support</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-lime-400 block">1-on-1</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Direct Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-lime-400 to-emerald-500 opacity-30 blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <img
                  src="/assets/nilesh_hero.png"
                  alt="Nilesh Hadote Fitness Coach"
                  className="w-full h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-white">Nilesh Hadote</h3>
                      <p className="text-xs text-lime-400 font-semibold">Head Fitness Coach & Strategist</p>
                    </div>
                    <span className="bg-lime-400/20 text-lime-400 border border-lime-400/40 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                      VERIFIED COACH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: QUICK BENEFITS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Dumbbell, title: "Personalized Workouts", desc: "Structured splits designed for gym or home training." },
            { icon: Utensils, title: "Veg & Non-Veg Diets", desc: "Macro-calculated Indian food meal plans." },
            { icon: Users, title: "1-on-1 Mentorship", desc: "Direct guidance, call check-ins, & video form reviews." },
            { icon: Target, title: "Progress Tracking", desc: "Track weight, body metrics & check-ins via dashboard." }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-lime-400/30 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: ABOUT THE COACH PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
              <img
                src="/assets/nilesh_hero.png"
                alt="Meet Nilesh Hadote"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">MEET YOUR COACH</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              "Fitness is not about short-term restriction. It's about sustainable, long-term mastery."
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hi, I'm <strong className="text-white">Nilesh Hadote</strong>. My approach to personal training and fitness coaching centers on realistic Indian nutrition, evidence-based strength training, and absolute accountability.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you are looking to shed fat, gain muscle mass, or build lasting strength around a busy professional schedule, I build structured systems customized to your lifestyle.
            </p>
            <div className="pt-2">
              <Link
                to="/about-nilesh-hadote"
                className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm hover:underline underline-offset-4"
              >
                <span>Know More About Nilesh</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CHOOSE YOUR FITNESS GOAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">TAILORED PROGRAMS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Choose Your Primary Fitness Goal</h2>
          <p className="text-slate-400 text-sm">Select the pathway that matches what you want to achieve today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goalCards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => navigate(card.path)}
              className="group cursor-pointer bg-slate-900 border border-slate-800 hover:border-lime-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-bold text-lime-400 uppercase tracking-wider">
                  {card.tag}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-400 pt-2">
                  <span>Explore Program</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: 5-STEP TRANSFORMATION JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">THE PROCESS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Your Transformation Roadmap</h2>
          <p className="text-slate-400 text-sm">Five simple steps from consultation to your dream physique.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Book Consultation", desc: "Schedule a 1-on-1 strategy call to discuss your goals & timeline." },
            { step: "02", title: "Fitness Assessment", desc: "Fill out your intake profile, current diet habits, and limitations." },
            { step: "03", title: "Receive Custom Plan", desc: "Get your personalized workout & Indian nutrition chart." },
            { step: "04", title: "Execute & Check-In", desc: "Follow the routine, log workouts, and submit weekly check-ins." },
            { step: "05", title: "Review & Evolve", desc: "Coach reviews your data and updates your program for progress." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3 relative">
              <span className="text-3xl font-black text-lime-400/40 block">{item.step}</span>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: NUTRITION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">PRACTICAL NUTRITION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Nutrition That Fits Indian Lifestyles</h2>
          <p className="text-slate-400 text-sm">No generic starvation diets. Customized meal charts built for your food preferences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Veg Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 hover:border-lime-400/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                  🌱
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Vegetarian Diet Plans</h3>
                  <p className="text-xs text-slate-400">Indian Veg & Egg-inclusive Options</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">HIGH PROTEIN</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Designed around paneer, soy chunks, lentils (dal/chana), sprouts, Greek yogurt, and optional eggs to hit optimal protein targets cleanly.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Precise calorie & macronutrient targets</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Flexible Indian food substitutions</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Easy post-workout protein options</li>
            </ul>

            <Link
              to="/vegetarian-diet-plan"
              className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm hover:underline"
            >
              <span>Explore Veg Nutrition</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Non-Veg Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 hover:border-lime-400/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                  🍗
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Non-Vegetarian Diet Plans</h3>
                  <p className="text-xs text-slate-400">Clean Lean Meat & Egg Protocols</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20">LEAN MACROS</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Featuring grilled chicken breast, whole eggs, egg whites, and fish combined with traditional rotis, rice, and fresh vegetables for optimal body recomposition.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Optimized meal timings around workouts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Budget-friendly lean protein selections</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-400" /> Simple home cooking instructions</li>
            </ul>

            <Link
              to="/non-vegetarian-diet-plan"
              className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm hover:underline"
            >
              <span>Explore Non-Veg Nutrition</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: COACHING PACKAGES & PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">TRANSPARENT PRICING</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Coaching Packages</h2>
          <p className="text-slate-400 text-sm">Select the program that fits your goals and level of accountability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter Program",
              duration: "1 Month",
              price: "₹3,999",
              origPrice: "₹5,999",
              desc: "Great for building initial momentum with custom plan assignment.",
              popular: false,
              features: [
                "Custom Workout Program",
                "Veg / Non-Veg Diet Guidance",
                "Weekly Check-In Review",
                "WhatsApp Support (Mon-Fri)",
                "Client Dashboard Access"
              ]
            },
            {
              name: "Transformation Pro",
              duration: "3 Months",
              price: "₹9,999",
              origPrice: "₹14,999",
              desc: "Our recommended 12-week body transformation protocol.",
              popular: true,
              features: [
                "12-Week Periodized Workout Plan",
                "Precision Macro & Meal Plan",
                "Bi-Weekly 1-on-1 Strategy Calls",
                "Form Check Video Analyses",
                "Priority WhatsApp Coach Access",
                "Progress Measurement Analytics"
              ]
            },
            {
              name: "1-on-1 VIP Mentorship",
              duration: "6 Months",
              price: "₹21,999",
              origPrice: "₹29,999",
              desc: "Elite direct coaching for maximum speed, results & performance.",
              popular: false,
              features: [
                "Everything in Transformation Pro",
                "Weekly 1-on-1 Zoom Coaching Sessions",
                "24/7 Priority Coach Access",
                "In-Person or Home Gym Customization",
                "Sleep & Stress Optimization",
                "Lifetime Access to Resources"
              ]
            }
          ].map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'bg-slate-900 border-2 border-lime-400 shadow-2xl shadow-lime-500/10 scale-105 z-10'
                  : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{pkg.desc}</p>
                </div>

                <div className="pt-2">
                  <span className="text-3xl sm:text-4xl font-black text-white">{pkg.price}</span>
                  <span className="text-xs text-slate-400 line-through ml-2">{pkg.origPrice}</span>
                  <span className="block text-xs font-semibold text-lime-400 mt-1">Duration: {pkg.duration}</span>
                </div>

                <hr className="border-slate-800 my-4" />

                <ul className="space-y-3 text-xs text-slate-300">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  to="/book-consultation"
                  className={`w-full py-3.5 rounded-xl text-center font-bold text-sm block transition-all ${
                    pkg.popular
                      ? 'bg-lime-400 hover:bg-lime-500 text-slate-950 shadow-md'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">GOT QUESTIONS?</span>
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-lime-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 15: FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-lime-500 via-emerald-500 to-lime-600 p-8 sm:p-14 text-slate-950 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-5">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
              YOUR NEXT LEVEL STARTS WITH YOUR NEXT DECISION.
            </h2>
            <p className="text-slate-900 text-sm sm:text-base font-medium">
              Don't wait for Monday. Book your free consultation call with Nilesh Hadote today and build a plan that fits your body, budget, and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex justify-center items-center gap-2 bg-slate-950 text-white hover:bg-slate-900 px-8 py-4 rounded-xl font-black text-base shadow-xl"
              >
                <Calendar className="w-5 h-5 text-lime-400" />
                <span>Book Free Consultation</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 bg-slate-950/10 border border-slate-950/30 text-slate-950 hover:bg-slate-950/20 px-6 py-4 rounded-xl font-bold text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Ask a Question</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
