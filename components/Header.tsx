import React, { useState } from 'react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { NavLink } from '../types';

const MedicalCrossIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"></path></svg>
);

const Logo = () => (
  <a href="#home" className="flex items-center space-x-3">
    <div className="bg-cyan-600 p-2 rounded-full">
      <MedicalCrossIcon />
    </div>
    <span className="text-xl font-bold tracking-wide text-gray-800">MOUNTY HEALTH CENTER</span>
  </a>
);

const MailIcon = () => <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>;
const PhoneIcon = () => <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>;
const InstagramIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>;
const ChevronDownIcon = () => <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>;

const NavItem: React.FC<{ link: NavLink }> = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSublinks = link.subLinks && link.subLinks.length > 0;

  return (
    <li 
      className="relative group" 
      onMouseEnter={() => hasSublinks && setIsOpen(true)}
      onMouseLeave={() => hasSublinks && setIsOpen(false)}
    >
      <a href={link.href} className={`flex items-center px-3 py-2 text-sm font-medium hover:text-cyan-600 transition-colors ${link.name === 'Promotions' ? 'text-cyan-600' : 'text-gray-600'}`}>
        {link.name}
        {hasSublinks && <ChevronDownIcon />}
      </a>
      {hasSublinks && isOpen && (
        <ul className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-1 z-20">
          {link.subLinks?.map(subLink => (
            <li key={subLink.name}>
              <a href={subLink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-cyan-600">
                {subLink.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Header = (): React.ReactNode => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Logo />
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <MailIcon />
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-cyan-600">{CONTACT_INFO.email}</a>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon />
              <a href={`tel:${CONTACT_INFO.phoneHref}`} className="text-gray-600 hover:text-cyan-600">{CONTACT_INFO.phone}</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-2">
              {NAV_LINKS.map(link => <NavItem key={link.name} link={link} />)}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-600"><InstagramIcon /></a>
            <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 text-white font-bold py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors duration-300 text-sm">
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="bg-cyan-700 text-white text-center py-2 text-sm font-semibold tracking-wider">
        24/7 PROFESSIONAL WELLNESS CARE | FREE HOME DELIVERY
      </div>
    </header>
  );
}

export default Header;