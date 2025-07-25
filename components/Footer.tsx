import React from 'react';
import { NAV_LINKS, CONTACT_INFO, WHATSAPP_BOOKING_URL } from '../constants';

const Logo = () => (
    <a href="#home" className="inline-block bg-white p-2 rounded-md">
        <img src="https://images2.imgbox.com/b3/08/m5zjAOHP_o.png" alt="Mounty Health Center Logo" className="h-9" />
    </a>
);

const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0 3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>;

const Footer = (): React.ReactNode => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="md:col-span-2 lg:col-span-1">
                        <Logo />
                        <p className="mt-4 text-gray-400 text-sm">
                            Health Treatments at the comfort of your home. From general assessments, hangover cures, vitamine boosts to Bali belly relief packages and wound treatments.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">About Us</h4>
                        <ul className="space-y-2 text-sm">
                             <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                             <li><a href="#promotions" className="text-cyan-400 hover:text-white">Promotions</a></li>
                             <li><a href="#latest-news" className="text-gray-400 hover:text-white">Blogs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            {NAV_LINKS.find(l => l.name === 'IV Therapies')?.subLinks?.map(subLink => (
                               <li key={subLink.name}><a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">{subLink.name}</a></li>
                            ))}
                            <li><a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Tests</a></li>
                            <li><a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Doctor On Call</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="leading-relaxed">{CONTACT_INFO.address}</li>
                            <li>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white break-all">{CONTACT_INFO.email}</a></li>
                            <li>WhatsApp: <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">{CONTACT_INFO.phone}</a></li>
                            <li>{CONTACT_INFO.hours}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    &copy;{new Date().getFullYear()} Copyright | Mounty Health Center | Developed by <a href="#" className="text-cyan-500 hover:underline">Synergy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;