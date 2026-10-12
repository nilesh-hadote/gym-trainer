import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-lime-400 p-2 rounded-xl text-slate-950">
              <Dumbbell className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-wider text-white uppercase">
              NILESH <span className="text-lime-400">HADOTE</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Premium personal fitness coaching, evidence-based nutrition planning, and dedicated one-to-one mentorship tailored around your unique body goals, lifestyle, and dietary preferences.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors"
              aria-label="Instagram"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors"
              aria-label="YouTube"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919993322135"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Coaching Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/personal-training" className="hover:text-lime-400 transition-colors">Personal Training</Link></li>
            <li><Link to="/online-fitness-coaching" className="hover:text-lime-400 transition-colors">Online Fitness Coaching</Link></li>
            <li><Link to="/weight-loss-coaching" className="hover:text-lime-400 transition-colors">Weight Loss Program</Link></li>
            <li><Link to="/muscle-building-program" className="hover:text-lime-400 transition-colors">Muscle Building</Link></li>
            <li><Link to="/one-to-one-mentorship" className="hover:text-lime-400 transition-colors">1-on-1 Mentorship</Link></li>
            <li><Link to="/coaching-plans" className="hover:text-lime-400 transition-colors">Packages & Pricing</Link></li>
          </ul>
        </div>

        {/* Col 3: Nutrition & Resources */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Nutrition & Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/vegetarian-diet-plan" className="hover:text-lime-400 transition-colors">Vegetarian Meal Plans</Link></li>
            <li><Link to="/non-vegetarian-diet-plan" className="hover:text-lime-400 transition-colors">Non-Veg Meal Plans</Link></li>
            <li><Link to="/diet-and-nutrition" className="hover:text-lime-400 transition-colors">Nutrition Principles</Link></li>
            <li><Link to="/blog" className="hover:text-lime-400 transition-colors">Blog & Guides</Link></li>
            <li><Link to="/success-stories" className="hover:text-lime-400 transition-colors">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-lime-400 transition-colors">Frequently Asked Questions</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-lime-400 shrink-0 mt-1" />
              <span>nileshhadote763@gmail.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-lime-400 shrink-0 mt-1" />
              <span>+91 9993322135</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-1" />
              <span>Mumbai / Pune, Maharashtra, India</span>
            </li>
          </ul>
          <a
            href="https://wa.me/919993322135"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-emerald-500/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Nilesh Hadote Fitness. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-500">
          <Link to="/privacy-policy" className="hover:text-slate-400">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms-and-conditions" className="hover:text-slate-400">Terms & Conditions</Link>
          <span>•</span>
          <Link to="/refund-policy" className="hover:text-slate-400">Refund Policy</Link>
          <span>•</span>
          <Link to="/disclaimer" className="hover:text-slate-400">Fitness Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};
