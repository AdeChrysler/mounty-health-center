import React from 'react';
import { WHATSAPP_BOOKING_URL } from '../constants';

const HomeCareIcon = () => (
    <svg className="w-48 h-48 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 21V10.5a1.5 1.5 0 013 0V21" />
    </svg>
);

const HomeDelivery = (): React.ReactNode => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-4">FREE HOME DELIVERY</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Wellness care should be accessible. That's why Mounty Health Center, Bali's leading mobile wellness service, brings professional support directly to you – with free delivery. Experience premium wellness care at your villa or hotel, with zero transportation fees, anywhere in Bali.
            </p>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-colors duration-300 shadow-lg"
            >
              Get Care Delivered to You
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl shadow-2xl bg-cyan-50 flex items-center justify-center p-8 h-[400px]">
              <div className="text-center text-cyan-800">
                  <HomeCareIcon />
                  <h3 className="text-2xl font-semibold tracking-widest mt-4">SPECIAL OFFER</h3>
                  <p className="text-4xl sm:text-5xl font-bold my-2">FREE HOME SERVICE</p>
                  <p className="text-xl sm:text-2xl font-light tracking-widest">EVERYWHERE!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDelivery;
