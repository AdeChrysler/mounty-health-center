
import React, { useState, useEffect, useMemo } from 'react';
import { PROMOTIONS, WHATSAPP_BOOKING_URL } from '../constants';
import { Promotion } from '../types';

// Icons for promotions
const AcidRefluxIcon = () => <svg className="w-24 h-24 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.5.56 2.88 1.5 3.99L7.5 21h9l-1.5-5.01c.94-1.11 1.5-2.49 1.5-3.99zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3" /></svg>;
const JetlagIcon = () => <svg className="w-24 h-24 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20zm6 12l-4-4-4 4m0 4l4-4" /></svg>;
const HangoverIcon = () => <svg className="w-24 h-24 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 15v6M4.93 4.93l1.41 1.41m11.32 0l-1.41 1.41M12 2v2M4.93 19.07l1.41-1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2" /></svg>;

const PROMOTION_ICONS: { [key: string]: React.FC } = {
  'acid-reflux': AcidRefluxIcon,
  'jetlag': JetlagIcon,
  'hangover': HangoverIcon
};


const PromotionCard: React.FC<{ promo: Promotion }> = ({ promo }) => {
  const Icon = PROMOTION_ICONS[promo.icon];
  return (
  <div className="relative w-full h-[550px] rounded-xl overflow-hidden shadow-2xl text-white group flex flex-col justify-between p-6 bg-gradient-to-br from-cyan-600 to-cyan-800">
     <div className="flex justify-start">
        <div className="bg-white/90 p-2 rounded-full">
            <div className="bg-cyan-600 p-1 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"></path></svg>
            </div>
        </div>
    </div>
    
    <div className="flex flex-col items-center text-center">
        {Icon && <Icon />}
        <h3 className="text-3xl font-bold mt-4">{promo.title}</h3>
        <div className="border border-white/50 rounded-full px-4 py-1 text-sm bg-black/30 backdrop-blur-sm my-6">
          <span className="font-semibold">{promo.ivType}</span> - {promo.ivLabel}
        </div>
    </div>
    
    <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-white text-cyan-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center">
      Book Now
    </a>
  </div>
)};

const Promotions = (): React.ReactNode => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const transitionDuration = 500; // ms

  const slides = useMemo(() => {
    if (PROMOTIONS.length === 0) return [];
    if (PROMOTIONS.length <= 3) return PROMOTIONS; // Don't loop if not enough items
    return [PROMOTIONS[PROMOTIONS.length - 1], ...PROMOTIONS, PROMOTIONS[0]];
  }, []);
  
  const isLooping = slides.length > PROMOTIONS.length;

  const prevSlide = () => {
    if (!isLooping) {
        setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
        return;
    }
    setCurrentIndex(prev => prev - 1);
    setTransitionEnabled(true);
  };

  const nextSlide = () => {
    if (!isLooping) {
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        return;
    }
    setCurrentIndex(prev => prev + 1);
    setTransitionEnabled(true);
  };

  useEffect(() => {
    if (!isLooping) return;
    
    if (currentIndex === 0 || currentIndex === slides.length - 1) {
        const timer = setTimeout(() => {
            setTransitionEnabled(false);
            if (currentIndex === 0) {
                setCurrentIndex(slides.length - 2); // Jump to the last real slide
            } else if (currentIndex === slides.length - 1) {
                setCurrentIndex(1); // Jump to the first real slide
            }
        }, transitionDuration);
        return () => clearTimeout(timer);
    }
  }, [currentIndex, slides.length, isLooping]);

  if (slides.length === 0) return null;

  return (
    <section id="promotions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <div
                className="flex"
                style={{
                    transform: `translateX(-${(100 / 3) * (isLooping ? currentIndex : currentIndex % slides.length)}%)`,
                    transition: !transitionEnabled ? 'none' : `transform ${transitionDuration}ms ease-out`,
                }}
            >
                {slides.map((promo, index) => (
                    <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                        <PromotionCard promo={promo} />
                    </div>
                ))}
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-[-1rem]">
              <button onClick={prevSlide} className="bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10 transition-all -ml-6">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextSlide} className="bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10 transition-all -mr-6">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
