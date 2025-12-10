import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutSection from './components/AboutSection';
import BranchesSection from './components/BranchesSection';
import FacilitiesSection from './components/FacilitiesSection';
import EventsSection from './components/EventsSection';
import EventDetail from './components/EventDetail';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Scroll to top component when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper to keep Navbar and Footer consistent
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* pt-16 accounts for fixed navbar height on pages without hero */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Specialized layout for Home (no top padding because Hero covers it)
const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        } />
        
        <Route path="/quienes-somos" element={
          <Layout>
            <AboutSection />
          </Layout>
        } />
        
        <Route path="/ramas" element={
          <Layout>
            <BranchesSection />
          </Layout>
        } />
        
        <Route path="/dependencias" element={
          <Layout>
            <FacilitiesSection />
          </Layout>
        } />
        
        <Route path="/eventos" element={
          <Layout>
            <EventsSection />
          </Layout>
        } />

        <Route path="/eventos/:id" element={
          <Layout>
            <EventDetail />
          </Layout>
        } />
        
        <Route path="/contacto" element={
          <Layout>
            <ContactSection />
          </Layout>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;