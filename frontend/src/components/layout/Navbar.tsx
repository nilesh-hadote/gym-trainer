import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, User as UserIcon, LogOut, ChevronDown, Calendar, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Nilesh', path: '/about-nilesh-hadote' },
    { name: 'Coaching', path: '/coaching-plans' },
    { name: 'Nutrition', path: '/diet-and-nutrition' },
    { name: 'Calculator', path: '/calorie-calculator' },
    { name: 'Mentorship', path: '/one-to-one-mentorship' },
    { name: 'Transformations', path: '/success-stories' },
    { name: 'Resources', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`no-print sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-xl py-3' : 'bg-slate-950/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="bg-lime-400 p-2 rounded-xl text-slate-950 shadow-md group-hover:scale-105 transition-transform duration-200">
            <Dumbbell className="w-5 h-5 font-bold" />
          </div>
          <div>
            <span className="text-lg md:text-xl font-extrabold tracking-wider text-white uppercase block leading-none">
              NILESH <span className="text-lime-400">HADOTE</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold block mt-0.5">
              PREMIUM FITNESS COACHING
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-lime-400 ${
                  isActive ? 'text-lime-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Auth Action */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-slate-950 px-4 py-2 rounded-xl font-bold text-sm shadow-md hover:shadow-lime-500/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </Link>

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-lime-400/50 px-3 py-1.5 rounded-xl text-sm font-medium text-slate-200 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center font-bold text-xs">
                  {user?.fullName.charAt(0)}
                </div>
                <span>{user?.fullName.split(' ')[0]}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl py-2 z-50 backdrop-blur-xl">
                  <div className="px-4 py-2 border-b border-slate-800">
                    <p className="text-xs text-slate-400">Signed in as</p>
                    <p className="text-sm font-bold text-white truncate">{user?.fullName}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 uppercase">
                      {user?.role}
                    </span>
                  </div>

                  {isAdmin ? (
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-lime-400 transition-colors"
                    >
                      <ShieldCheck className="w-4 h-4 text-lime-400" />
                      <span>Admin Dashboard</span>
                    </Link>
                  ) : (
                    <Link
                      to="/client/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-lime-400 transition-colors"
                    >
                      <UserIcon className="w-4 h-4 text-lime-400" />
                      <span>Client Dashboard</span>
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-slate-800 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-3.5 py-2 rounded-xl transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-lime-400 py-1"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <Link
              to="/book-consultation"
              onClick={() => setIsOpen(false)}
              className="w-full flex justify-center items-center gap-2 bg-lime-400 text-slate-950 py-2.5 rounded-xl font-bold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </Link>
            {isAuthenticated ? (
              <Link
                to={isAdmin ? '/admin/dashboard' : '/client/dashboard'}
                onClick={() => setIsOpen(false)}
                className="w-full text-center block bg-slate-900 border border-slate-700 text-slate-200 py-2.5 rounded-xl font-medium text-sm"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block bg-slate-900 border border-slate-700 text-slate-200 py-2.5 rounded-xl font-medium text-sm"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
