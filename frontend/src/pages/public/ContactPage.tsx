import React, { useState } from 'react';
import { ApiService } from '../../services/api';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: 'General Fitness', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await ApiService.submitContact(form);
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">GET IN TOUCH</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Contact Nilesh Hadote</h1>
        <p className="text-slate-300 text-base">Have a question about coaching programs or diet charts? Send us a message.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-xl font-bold text-white">Direct Contact Info</h2>
            <div className="space-y-4 text-sm text-slate-300">
              <a href="mailto:nileshhadote763@gmail.com" className="flex items-center gap-3 hover:text-lime-400 transition-colors">
                <Mail className="w-5 h-5 text-lime-400 shrink-0" />
                <span>nileshhadote763@gmail.com</span>
              </a>
              <a href="tel:+919993322135" className="flex items-center gap-3 hover:text-lime-400 transition-colors">
                <Phone className="w-5 h-5 text-lime-400 shrink-0" />
                <span>+91 9993322135</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-lime-400" />
                <span>Mumbai / Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-lime-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-sm text-slate-300">We will respond to your inquiry shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-white mb-2">Send an Inquiry</h2>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                  placeholder="Enter full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Question *</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                  placeholder="How can Nilesh help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold py-3.5 rounded-xl text-sm shadow-md transition-colors"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const BookConsultationPage: React.FC = () => {
  const [booked, setBooked] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceName: '1-on-1 Strategy Call',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM'
  });

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    await ApiService.bookConsultation({
      clientName: form.name,
      clientEmail: form.email,
      clientPhone: form.phone,
      serviceName: form.serviceName,
      appointmentDate: form.date,
      appointmentTime: form.time
    });
    setBooked(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center space-y-3">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">FREE 1-ON-1 STRATEGY SESSION</span>
        <h1 className="text-4xl font-black text-white uppercase">Book a Fitness Consultation</h1>
        <p className="text-slate-300 text-sm">Select a date and time to speak directly with Nilesh Hadote.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
        {booked ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-lime-400 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Consultation Confirmed!</h2>
            <p className="text-sm text-slate-300">
              Your appointment is set for <strong>{form.date}</strong> at <strong>{form.time}</strong>. Nilesh will send the video call link to your email ({form.email}).
            </p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                  placeholder="Rahul Sharma"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time *</label>
                <select
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-none"
                >
                  <option value="10:00 AM">10:00 AM IST</option>
                  <option value="02:00 PM">02:00 PM IST</option>
                  <option value="05:00 PM">05:00 PM IST</option>
                  <option value="08:00 PM">08:00 PM IST</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 text-slate-950 font-extrabold py-3.5 rounded-xl text-sm shadow-md transition-colors"
            >
              Confirm Consultation Slot
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
