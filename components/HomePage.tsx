
import React from 'react';
import Hero from './Hero';
import Promotions from './Promotions';
import HomeDelivery from './HomeDelivery';
import TherapySection from './TherapySection';
import Treatments from './Treatments';
import LatestNews from './LatestNews';
import Testimonials from './Testimonials';
import MapSection from './MapSection';
import AboutSection from './AboutPage';

const HomePage = (): React.ReactNode => {
    return (
        <>
            <Hero />
            <AboutSection />
            <Promotions />
            <HomeDelivery />
            <TherapySection />
            <Treatments />
            <LatestNews />
            <Testimonials />
            <MapSection />
        </>
    );
};

export default HomePage;
