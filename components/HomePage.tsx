
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
import AnimatedSection from './AnimatedSection.tsx';

const HomePage = (): React.ReactNode => {
    return (
        <>
            <Hero />
            <AnimatedSection id="about">
                <AboutSection />
            </AnimatedSection>
            <AnimatedSection id="promotions">
                <Promotions />
            </AnimatedSection>
            <AnimatedSection>
                <HomeDelivery />
            </AnimatedSection>
            <AnimatedSection id="therapies">
                <TherapySection />
            </AnimatedSection>
            <AnimatedSection id="treatments">
                <Treatments />
            </AnimatedSection>
            <AnimatedSection id="latest-news">
                <LatestNews />
            </AnimatedSection>
            <AnimatedSection>
                <Testimonials />
            </AnimatedSection>
            <AnimatedSection>
                <MapSection />
            </AnimatedSection>
        </>
    );
};

export default HomePage;