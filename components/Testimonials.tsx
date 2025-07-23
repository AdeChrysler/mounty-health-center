import React from 'react';
import { TESTIMONIALS, WHATSAPP_BOOKING_URL, CONTACT_INFO } from '../constants';
import { Testimonial } from '../types';

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const KidsTreatmentIcon = () => (
    <div className="w-full h-64 rounded-lg bg-cyan-700 flex items-center justify-center mb-6">
        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    </div>
);


const CheckCircleIcon = () => <svg className="w-4 h-4 text-blue-500 ml-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;
const GoogleIcon = () => <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path></svg>;

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <div className="flex items-start sm:items-center justify-between mb-4">
            <div className="flex items-start sm:items-center">
                <div className="w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">{testimonial.initials}</div>
                <div>
                    <div className="flex items-center">
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <CheckCircleIcon />
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
            </div>
            <a href={CONTACT_INFO.googleReviewsLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 ml-2">
              <GoogleIcon />
            </a>
        </div>
        <div className="flex mb-2">
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={true} />)}
        </div>
        <p className="text-gray-600 text-sm sm:text-base">{testimonial.review}</p>
        {testimonial.review.includes('...') && <span className="text-sm text-cyan-600 opacity-70 cursor-not-allowed">Read more</span>}
    </div>
);

const Testimonials = (): React.ReactNode => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-800 mb-2">PATIENT TESTIMONIALS</h2>
                        <p className="text-gray-600 mb-8 text-sm sm:text-base">IT'S ALWAYS THE WORD OF MOUTH THAT'S THE BEST ADVICE. HERE ARE SOME OF OUR...</p>
                        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6">
                            {TESTIMONIALS.map(t => <TestimonialCard key={t.name} testimonial={t} />)}
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-cyan-800 text-white p-6 sm:p-10 rounded-lg shadow-xl">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">A KID'S THOUGHT</h3>
                        <p className="text-cyan-200 mb-6 text-sm sm:text-base">WHAT DO OUR SMALLEST PATIENT SAY?</p>
                        <KidsTreatmentIcon />
                        <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-base sm:text-lg mb-6">
                            "The nurses and doctors are very nice to me and make me feel safe. They made me healthy super fast and I am not afraid of docters anymore" — Zaza
                        </blockquote>
                        <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-cyan-800 transition-colors duration-300 text-sm sm:text-base">
                            Book Our Treatments For Children
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
