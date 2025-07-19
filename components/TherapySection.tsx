import React from 'react';
import { THERAPY_PACKAGES, CONTACT_INFO, WHATSAPP_BOOKING_URL } from '../constants';
import { ServicePackage } from '../types';

const StarIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const BaliBellyIcon = () => <svg className="w-20 h-20 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.636 18.364A9 9 0 0012 21a9 9 0 006.364-2.636M12 12a4 4 0 01-4-4" /></svg>;
const ImmuneBoosterIcon = () => <svg className="w-20 h-20 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 11V3" /></svg>;
const HangoverPackageIcon = () => <svg className="w-20 h-20 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" /></svg>;

const SERVICE_ICONS: { [key: string]: React.FC } = {
  'bali-belly': BaliBellyIcon,
  'immune-booster': ImmuneBoosterIcon,
  'hangover-package': HangoverPackageIcon
};


const PhoneIcon = () => <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.461 4.415a1 1 0 01-.297 1.13l-2.133 2.134a11.047 11.047 0 005.57 5.57l2.134-2.133a1 1 0 011.13-.297l4.415 1.46a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const MailIcon = () => <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const CalendarIcon = () => <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;

const ServiceCard: React.FC<{ service: ServicePackage }> = ({ service }) => {
    const Icon = SERVICE_ICONS[service.icon];
    return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div className="relative h-56 bg-cyan-50 flex items-center justify-center">
            {Icon && <Icon />}
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2">
                <div className="bg-cyan-600 rounded-full p-4 border-4 border-white shadow-md">
                    <StarIcon />
                </div>
            </div>
        </div>
        <div className="p-6 pt-10 text-center flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4">{service.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-auto bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
                Book Your Treatment
            </a>
        </div>
    </div>
)};

const TherapySection = (): React.ReactNode => {
    return (
        <section id="therapies" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-cyan-800 text-center mb-12">VITAMIN THERAPY AT YOUR VILLA OR HOTEL</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-3/4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {THERAPY_PACKAGES.map(pkg => (
                                <ServiceCard key={pkg.title} service={pkg} />
                            ))}
                        </div>
                    </div>
                    <aside className="lg:w-1/4 bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-200 pb-2">WORKING HOURS</h3>
                        <div className="flex justify-between items-center mb-8">
                            <span>Mon - Sunday</span>
                            <span className="font-semibold bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">24 hours</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-200 pb-2">CONTACT DETAILS</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <PhoneIcon />
                                <a href={`tel:${CONTACT_INFO.phoneHref}`} className="text-gray-600 hover:text-cyan-600">{CONTACT_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <MailIcon />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-cyan-600">{CONTACT_INFO.email}</a>
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