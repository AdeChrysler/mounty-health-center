import React from 'react';
import { CONTACT_INFO } from '../constants';

const MedicalCrossIcon = () => (
    <svg className="w-48 h-48 md:w-64 md:h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v12m6-6H6"></path>
    </svg>
);


const Hero = (): React.ReactNode => {
  return (
    <section id="home" className="relative bg-cyan-800">
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left flex justify-center">
             <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-cyan-700 flex items-center justify-center shadow-2xl border-4 border-white">
                <MedicalCrossIcon />
             </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tighter">
              MOUNTY HEALTH CENTER
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light">
              Premium wellness support with mobile IV therapy services. Experience professional care and revitalization in the comfort of your villa. Our expert team delivers comprehensive wellness assessments and preventive care solutions directly to you. From vitamin infusions to travel wellness support, we bring professional healthcare to your doorstep. Our team is here to deliver the expertise and care you need, right at your doorstep.
            </p>
            <a 
              href={CONTACT_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-cyan-700 transition-colors duration-300 inline-block shadow-lg"
            >
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;