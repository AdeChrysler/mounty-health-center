import React from 'react';
import { TREATMENT_TYPES, WHATSAPP_BOOKING_URL } from '../constants';

const CapsuleIcon = () => <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" transform="rotate(-45 12 12)"></path></svg>;
const DropperIcon = () => <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2.5 2.5 0 00-3.536 0L12 19.264l-3.892-3.836a2.5 2.5 0 10-3.536 3.536l6.666 6.666a.5.5 0 00.708 0l6.666-6.666a2.5 2.5 0 000-3.536zM12 21.264l-2.12-2.122m4.242 0L12 21.264M12 17V3"></path></svg>;
const CalendarIcon = () => <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
const ArrowRightCircleIcon = () => <svg className="w-8 h-8 text-gray-300 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;

const ICONS: { [key: string]: React.FC } = {
    capsule: CapsuleIcon,
    dropper: DropperIcon,
    calendar: CalendarIcon
};

const Treatments = (): React.ReactNode => {
  return (
    <section id="treatments" className="relative bg-cyan-800 text-white py-20 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-black/10 hidden lg:block" aria-hidden="true">
            {/* Decorative background element */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">WE'VE GOT THE TREATMENTS</h2>
                <div className="space-y-4">
                    {TREATMENT_TYPES.map(treatment => {
                        const Icon = ICONS[treatment.icon];
                        return (
                            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" key={treatment.name} className="flex items-center justify-between bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 group">
                                <div className="flex items-center gap-4 sm:gap-6">
                                    {Icon && <Icon />}
                                    <span className="text-lg sm:text-xl font-semibold text-gray-800">{treatment.name}</span>
                                </div>
                                <ArrowRightCircleIcon />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Treatments;
