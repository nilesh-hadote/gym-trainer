import React, { useState } from 'react';
import { ApiService } from '../../services/api';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, MessageCircle, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

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
                <span>Indore, Madhya Pradesh, India</span>
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
  const [loading, setLoading] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceName: '1-on-1 Strategy Call',
    goal: 'Weight Loss & Muscle Recomp',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM'
  });

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '02:30 PM',
    '05:00 PM',
    '07:00 PM',
    '08:30 PM'
  ];

  const fitnessGoals = [
    'Weight Loss & Fat Reduction',
    'Muscle Building & Hypertrophy',
    'Custom Indian Diet Planning',
    '1-on-1 Personal Training (Indore)',
    'Online Coaching & Accountability'
  ];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `🔥 *Fitness Consultation Booking Request*

Hello Coach Nilesh Hadote,
I would like to book a 1-on-1 fitness consultation slot with you:

👤 *Client Name:* ${form.name}
📞 *Phone Number:* ${form.phone}
✉️ *Email:* ${form.email}
🎯 *Fitness Goal:* ${form.goal}
📅 *Preferred Date:* ${form.date}
⏰ *Selected Slot:* ${form.time} IST
📍 *Location Preference:* Indore / Online Consultation

Please confirm my appointment slot. Thank you!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/919993322135?text=${encoded}`;
    setWhatsappUrl(waUrl);

    try {
      await ApiService.bookConsultation({
        clientName: form.name,
        clientEmail: form.email,
        clientPhone: form.phone,
        serviceName: `${form.serviceName} (${form.goal})`,
        appointmentDate: form.date,
        appointmentTime: form.time
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setBooked(true);
      // Auto-open WhatsApp with pre-filled message
      window.open(waUrl, '_blank');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FREE 1-ON-1 STRATEGY SESSION • INDORE & ONLINE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Book a Fitness Consultation
        </h1>
        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          Select your preferred date and slot to speak directly with Coach <strong className="text-white">Nilesh Hadote</strong>. Instant WhatsApp confirmation included.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        {booked ? (
          <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
            <div className="w-20 h-20 bg-lime-400/20 text-lime-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-lime-400/10 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">SLOT RESERVED SUCCESSFULLY</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Consultation Confirmed!</h2>
              <p className="text-slate-300 text-sm">
                Your appointment is reserved for <strong className="text-white">{form.date}</strong> at <strong className="text-lime-400">{form.time} IST</strong>.
              </p>
            </div>

            {/* Summary Ticket */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 text-left text-xs space-y-3 shadow-inner">
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Head Coach:</span>
                <span className="text-white font-bold">Nilesh Hadote</span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Client Name:</span>
                <span className="text-white font-semibold">{form.name}</span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Contact Number:</span>
                <span className="text-white font-semibold">{form.phone}</span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Primary Goal:</span>
                <span className="text-lime-400 font-semibold">{form.goal}</span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">Selected Slot:</span>
                <span className="text-lime-400 font-bold">{form.date} • {form.time} IST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Location Base:</span>
                <span className="text-slate-300">Indore, Madhya Pradesh / Online</span>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-4 px-6 rounded-2xl text-base shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Booking Details to Nilesh on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-slate-400">
                WhatsApp tab should open automatically. If not opened, click above to notify Coach Nilesh immediately.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setBooked(false)}
                className="text-xs text-slate-400 hover:text-white underline transition-colors"
              >
                ← Book Another Slot or Edit Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400 focus:outline-none transition-colors"
                  placeholder="Rahul Sharma"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400 focus:outline-none transition-colors"
                  placeholder="rahul@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400 focus:outline-none transition-colors"
                  placeholder="+91 99933 22135"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Fitness Goal *</label>
                <select
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400 focus:outline-none transition-colors"
                >
                  {fitnessGoals.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                <Calendar className="w-3.5 h-3.5 inline mr-1 text-lime-400" />
                Preferred Date *
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Interactive Slot Selector */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold text-slate-300">
                <Clock className="w-3.5 h-3.5 inline mr-1 text-lime-400" />
                Select Preferred Time Slot *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = form.time === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setForm({ ...form, time: slot })}
                      className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                        isSelected
                          ? 'bg-lime-400 text-slate-950 border-lime-400 shadow-md shadow-lime-400/20 scale-[1.02]'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {slot} IST
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-bold">Instant WhatsApp Notification:</strong>
                Submitting this will automatically notify Coach Nilesh on WhatsApp (<strong className="text-emerald-400">+91 9993322135</strong>) with your selected slot and client details.
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-slate-950 font-black py-4 rounded-2xl text-base shadow-xl shadow-lime-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>{loading ? 'Reserving Slot...' : 'Confirm Slot & Connect on WhatsApp'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
