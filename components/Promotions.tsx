

import React, { useState, useEffect, useMemo } from 'react';
import { PROMOTIONS, WHATSAPP_BOOKING_URL } from '../constants';
import { Promotion } from '../types';

// Icons for promotions
const AcidRefluxIcon = () => <svg className="w-24 h-24 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.5.56 2.88 1.5 3.99L7.5 21h9l-1.5-5.01c.94-1.11 1.5-2.49 1.5-3.99zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3" /></svg>;
const JetlagIcon = () => <svg className="w-24 h-24 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20zm6 12l-4-4-4 4m0 4l4-4" /></svg>;
const HangoverIcon = () => <svg className="w-24 h-24 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 15v6M4.93 4.93l1.41 1.41m11.32 0l-1.41 1.41M12 2v2M4.93 19.07l1.41-1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2" /></svg>;
const BaliBellyIcon = () => (
    <svg className="w-24 h-24 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21C14.0899 21 17 18.0899 17 14.5C17 10.9101 14.0899 8 10.5 8C6.91015 8 4 10.9101 4 14.5C4 18.0899 6.91015 21 10.5 21Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14.5C17 12.0147 18.567 10 20.5 10C21.3284 10 22 10.6716 22 11.5V11.5C22 12.3284 21.3284 13 20.5 13H17" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8C10.5 5.23858 12.7386 3 15.5 3C16.8807 3 18.134 3.55993 19 4.5" />
    </svg>
);

const PROMOTION_ICONS: { [key:string]: React.FC } = {
  'bali-belly': BaliBellyIcon,
  'acid-reflux': AcidRefluxIcon,
  'jetlag': JetlagIcon,
  'hangover': HangoverIcon
};


const PromotionCard: React.FC<{ promo: Promotion }> = ({ promo }) => {
  const hasImage = !!promo.imageUrl;

  const cardStyle = hasImage ? {
    backgroundImage: `url(${promo.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  const cardBgClass = hasImage ? '' : 'bg-gradient-to-br from-cyan-600 to-cyan-800';

  return (
    <div 
      className={`relative w-full h-[550px] rounded-xl overflow-hidden shadow-2xl text-white group flex flex-col justify-end p-6 ${cardBgClass}`}
      style={cardStyle}
    >
      <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="relative z-10 w-full bg-white text-cyan-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center">
        Book Now
      </a>
    </div>
  );
};

const Promotions = (): React.ReactNode => {
    const [numVisible, setNumVisible] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const transitionDuration = 500;
    const promos = PROMOTIONS;
    const numPromos = promos.length;

    useEffect(() => {
        const handleResize = () => {
            setNumVisible(window.innerWidth >= 1024 ? 3 : 1);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const initialIndex = useMemo(() => {
        if (numPromos === 0) return 0;
        return numPromos >= numVisible ? numVisible : numPromos;
    }, [numPromos, numVisible]);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const slides = useMemo(() => {
        if (numPromos === 0) return [];
        if (numPromos < numVisible) return promos;
        const head = promos.slice(-numVisible);
        const tail = promos.slice(0, numVisible);
        return [...head, ...promos, ...tail];
    }, [promos, numPromos, numVisible]);

    const isLooping = useMemo(() => slides.length > numPromos && numPromos >= numVisible, [slides.length, numPromos, numVisible]);

    useEffect(() => {
        if (!isLooping) return;

        if (currentIndex === initialIndex + numPromos) {
            const timer = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(initialIndex); 
            }, transitionDuration);
            return () => clearTimeout(timer);
        }

        if (currentIndex < initialIndex) {
            const timer = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(initialIndex + numPromos - numVisible);
            }, transitionDuration);
            return () => clearTimeout(timer);
        }
        
        if (!transitionEnabled) {
             requestAnimationFrame(() => setTransitionEnabled(true));
        }

    }, [currentIndex, isLooping, numPromos, initialIndex, transitionDuration, transitionEnabled, numVisible]);

    const prevSlide = () => {
        if (!isLooping || !transitionEnabled) return;
        setCurrentIndex(prev => prev - 1);
    };

    const nextSlide = () => {
        if (!isLooping || !transitionEnabled) return;
        setCurrentIndex(prev => prev + 1);
    };

    if (numPromos === 0) return null;

    const displaySlides = isLooping ? slides : promos;

    return (
        <section id="promotions" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex"
                            style={{
                                transform: `translateX(-${(100 / displaySlides.length) * currentIndex}%)`,
                                width: `${(displaySlides.length / numVisible) * 100}%`,
                                transition: !transitionEnabled ? 'none' : `transform ${transitionDuration}ms ease-out`,
                            }}
                        >
                            {displaySlides.map((promo, index) => (
                                <div key={index} className="w-full px-4" style={{ flex: `0 0 ${100 / displaySlides.length}%` }}>
                                    <PromotionCard promo={promo} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {isLooping && (
                        <>
                            <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10 transition-all" aria-label="Previous promotion">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10 transition-all" aria-label="Next promotion">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Promotions;