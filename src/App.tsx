import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/FloatingContact';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingParticles } from './components/FloatingParticles';
import { ScrollProgress } from './components/ScrollProgress';

// Lazy-load page routes to reduce initial bundle size
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then((m) => ({ default: m.ServiceDetail })));
const Projects = lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const FAQ = lazy(() => import('./pages/FAQ').then((m) => ({ default: m.FAQ })));
const CostCalculator = lazy(() => import('./pages/CostCalculator').then((m) => ({ default: m.CostCalculator })));
const SeasonalCalendar = lazy(() => import('./pages/SeasonalCalendar').then((m) => ({ default: m.SeasonalCalendar })));

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FBF9]">
      
      <ScrollToTopOnMount />
      <ScrollProgress />
      <FloatingParticles />
      <Header />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cost-calculator" element={<CostCalculator />} />
              <Route path="/seasonal-calendar" element={<SeasonalCalendar />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      
      <Footer />
      <FloatingContact />
      <ScrollToTop />
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}