import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero = (): React.ReactNode => {
  return (
    <section id="home" className="relative bg-cyan-800">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
             <img src="https://images2.imgbox.com/a6/1e/b37zZfNn_o.png" alt="Mounty Health Center professional care" className="rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm" />
          </div>
          <div className="md:w-1/2 text-white md:pl-12 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tighter">
              MOUNTY HEALTH CENTER
            </h1>
            <p className="text-base sm:text-lg mb-8 font-light">
              Premium wellness support with mobile IV therapy services. Experience professional care and revitalization in the comfort of your villa. Our expert team delivers comprehensive wellness assessments and preventive care solutions directly to you. From vitamin infusions to travel wellness support, we bring professional healthcare to your doorstep. Our team is here to deliver the expertise and care you need, right at your doorstep.
            </p>
            <a 
              href={CONTACT_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-colors duration-300 inline-block shadow-lg"
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