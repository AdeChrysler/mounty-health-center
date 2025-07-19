
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Promotions from './components/Promotions';
import HomeDelivery from './components/HomeDelivery';
import TherapySection from './components/TherapySection';
import Treatments from './components/Treatments';
import LatestNews from './components/LatestNews';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import AboutSection from './components/AboutPage';

function App(): React.ReactNode {
  return (
    <div className="bg-gray-50 text-gray-700 font-sans leading-normal tracking-normal">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Promotions />
        <HomeDelivery />
        <TherapySection />
        <Treatments />
        <LatestNews />
        <Testimonials />
        <MapSection />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;