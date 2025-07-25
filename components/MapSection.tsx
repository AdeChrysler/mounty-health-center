import React from 'react';
import { CONTACT_INFO, PARTNER_LOGOS, WHATSAPP_BOOKING_URL } from '../constants';

const PhoneIcon = () => <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.461 4.415a1 1 0 01-.297 1.13l-2.133 2.134a11.047 11.047 0 005.57 5.57l2.134-2.133a1 1 0 011.13-.297l4.415 1.46a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const MailIcon = () => <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const CalendarIcon = () => <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;

const MapSection = (): React.ReactNode => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-left mb-12">
                     <h2 className="text-2xl sm:text-3xl font-bold text-cyan-800 border-b-4 border-cyan-500 inline-block pb-2">PARTNERSHIP</h2>
                </div>
                <div className="flex justify-around items-center flex-wrap gap-8 mb-16">
                    {PARTNER_LOGOS.map((logo, index) => (
                        <img key={index} src={logo} alt={`Partner logo ${index + 1}`} className="h-10 sm:h-12 object-contain" />
                    ))}
                </div>
                <div className="lg:relative bg-gray-300 rounded-lg shadow-lg overflow-hidden">
                    <div className="h-80 lg:h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8093081594266!2d115.19870897567952!3d-8.709650991339489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410020033e71%3A0x9c1dfb68c36f45ba!2sApotek%20Mounty%20Health%20Center!5e0!3m2!1sen!2sid!4v1752908824012!5m2!1sen!2sid"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="lg:absolute lg:top-10 lg:left-10 bg-cyan-800 text-white p-8 lg:rounded-lg w-full lg:max-w-sm">
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 border-b-2 border-cyan-600 pb-2">WORKING HOURS</h3>
                        <div className="flex justify-between items-center mb-8">
                            <span>Mon - Sunday</span>
                            <span className="font-semibold bg-cyan-600 px-3 py-1 rounded-full text-sm">24 hours</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 border-b-2 border-cyan-600 pb-2">CONTACT DETAILS</h3>
                        <ul className="space-y-4 text-sm sm:text-base">
                            <li className="flex items-center gap-4">
                                <PhoneIcon />
                                <a href={`tel:${CONTACT_INFO.phoneHref}`} className="hover:text-cyan-300">{CONTACT_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <MailIcon />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-300 break-all">{CONTACT_INFO.email}</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <CalendarIcon />
                                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Book appointment</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;