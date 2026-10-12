import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { PersonalTrainingPage } from './pages/public/PersonalTrainingPage';
import { OnlineCoachingPage } from './pages/public/OnlineCoachingPage';
import { WeightLossPage } from './pages/public/WeightLossPage';
import { MuscleBuildingPage } from './pages/public/MuscleBuildingPage';
import { DietNutritionPage, VegDietPage, NonVegDietPage } from './pages/public/DietNutritionPage';
import { MentorshipPage } from './pages/public/MentorshipPage';
import { PricingPage } from './pages/public/PricingPage';
import { BlogPage, BlogPostPage } from './pages/public/BlogPage';
import { SuccessStoriesPage } from './pages/public/SuccessStoriesPage';
import { CalorieCalculatorPage } from './pages/public/CalorieCalculatorPage';
import { ContactPage, BookConsultationPage } from './pages/public/ContactPage';
import { PrivacyPolicyPage, TermsPage, RefundPolicyPage, DisclaimerPage } from './pages/public/LegalPages';
import { LoginPage, RegisterPage } from './pages/public/LoginPage';

// Client Pages
import { ClientDashboard } from './pages/client/ClientDashboard';
import { ClientWorkouts, ClientDiet } from './pages/client/ClientWorkouts';
import { ClientCheckIn, ClientProgress, ClientBookings } from './pages/client/ClientCheckIn';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ClientManagement, PlanBuilders, LibraryManagement } from './pages/admin/ClientManagement';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-lime-400 selection:text-slate-950">
          <AnnouncementBar />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about-nilesh-hadote" element={<AboutPage />} />
              <Route path="/about-nilesh-hatode" element={<AboutPage />} />
              <Route path="/personal-training" element={<PersonalTrainingPage />} />
              <Route path="/online-fitness-coaching" element={<OnlineCoachingPage />} />
              <Route path="/weight-loss-coaching" element={<WeightLossPage />} />
              <Route path="/muscle-building-program" element={<MuscleBuildingPage />} />
              <Route path="/diet-and-nutrition" element={<DietNutritionPage />} />
              <Route path="/vegetarian-diet-plan" element={<VegDietPage />} />
              <Route path="/non-vegetarian-diet-plan" element={<NonVegDietPage />} />
              <Route path="/one-to-one-mentorship" element={<MentorshipPage />} />
              <Route path="/coaching-plans" element={<PricingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/calorie-calculator" element={<CalorieCalculatorPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book-consultation" element={<BookConsultationPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Client Routes */}
              <Route path="/client/dashboard" element={<ClientDashboard />} />
              <Route path="/client/workouts" element={<ClientWorkouts />} />
              <Route path="/client/diet" element={<ClientDiet />} />
              <Route path="/client/check-in" element={<ClientCheckIn />} />
              <Route path="/client/progress" element={<ClientProgress />} />
              <Route path="/client/bookings" element={<ClientBookings />} />

              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/clients" element={<ClientManagement />} />
              <Route path="/admin/plan-builders" element={<PlanBuilders />} />
              <Route path="/admin/library" element={<LibraryManagement />} />
            </Routes>
          </main>

          <FloatingWhatsApp />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
