


import React from 'react';
import { THERAPY_PACKAGES, CONTACT_INFO, WHATSAPP_BOOKING_URL } from '../constants';
import { ServicePackage } from '../types';

const PhoneIcon = () => <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.461 4.415a1 1 0 01-.297 1.13l-2.133 2.134a11.047 11.047 0 005.57 5.57l2.134-2.133a1 1 0 011.13-.297l4.415 1.46a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const MailIcon = () => <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const CalendarIcon = () => <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;

const ServiceCard: React.FC<{ service: ServicePackage }> = ({ service }) => {
    return (
    <div
      className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl text-white group flex flex-col justify-end p-6 sm:p-8 bg-cover bg-center transform hover:-translate-y-2 transition-transform duration-300"
      style={{ backgroundImage: service.imageUrl ? `url(${service.imageUrl})` : undefined }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0 group-hover:from-black/90 transition-all duration-300"></div>

        <div className="relative z-10">
            <a
                href={`#/${service.pageId}`}
                className="w-full bg-white text-cyan-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center inline-block"
            >
                View Treatment
            </a>
      </div>
    </div>
)};

const TherapySection = (): React.ReactNode => {
    return (
        <section id="therapies" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 text-center mb-12">VITAMIN THERAPY AT YOUR VILLA OR HOTEL</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {THERAPY_PACKAGES.map(pkg => (
                                <ServiceCard key={pkg.title} service={pkg} />
                            ))}
                        </div>
                    </div>
                    <aside className="lg:w-1/4 bg-gray-50 p-8 rounded-lg shadow-md self-start">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-200 pb-2">WORKING HOURS</h3>
                        <div className="flex justify-between items-center mb-8">
                            <span>Mon - Sunday</span>
                            <span className="font-semibold bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">24 hours</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-200 pb-2">CONTACT DETAILS</h3>
                        <ul className="space-y-4 text-sm sm:text-base">
                            <li className="flex items-center gap-4">
                                <PhoneIcon />
                                <a href={`tel:${CONTACT_INFO.phoneHref}`} className="text-gray-600 hover:text-cyan-600">{CONTACT_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <MailIcon />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-cyan-600 break-all">{CONTACT_INFO.email}</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <CalendarIcon />
                                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600">Book appointment</a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default TherapySection;