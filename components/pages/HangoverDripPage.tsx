import React from 'react';
import { WHATSAPP_BOOKING_URL } from '../../constants';

const CheckIcon = () => <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;

const HangoverDripPage = () => {
    return (
        <div className="bg-white animate-fade-in">
            <div className="container mx-auto px-4 py-6">
                 <a href="#therapies" className="text-cyan-600 hover:text-cyan-800 hover:underline font-semibold inline-flex items-center transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to All Therapies
                </a>
            </div>
            <section className="relative py-24 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images2.imgbox.com/1e/20/aMguP9vX_o.jpg')" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">Hangover IV Drip</h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light">Your ultimate post-party fix to detox, rehydrate, and bounce back fast.</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-4">Recover and Recharge After a Big Night Out</h2>
                            <p className="text-gray-700 mb-4 text-lg leading-relaxed">A great night out can leave you feeling drained, dehydrated, and unproductive the next day. Our Hangover IV Drip is the perfect remedy, designed to quickly alleviate the unpleasant symptoms of a hangover.</p>
                            <p className="text-gray-700 text-lg leading-relaxed">This powerful infusion rehydrates your body, flushes out toxins, and restores lost nutrients, so you can conquer the day ahead without the headache, nausea, and fatigue.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-cyan-800 mb-6">Key Ingredients & Benefits</h3>
                            <ul className="space-y-4 text-gray-700 text-lg">
                                <li className="flex items-start"><CheckIcon /> <span><strong>IV Fluids:</strong> Rapidly combats dehydration, a primary cause of hangover symptoms.</span></li>
                                <li className="flex items-start"><CheckIcon /> <span><strong>Vitamin B Complex:</strong> Helps boost energy levels and improve brain function.</span></li>
                                <li className="flex items-start"><CheckIcon /> <span><strong>Anti-inflammatory & Anti-nausea Medication:</strong> Effectively reduces headaches, muscle aches, and stomach upset.</span></li>
                                <li className="flex items-start"><CheckIcon /> <span><strong>Vitamin C:</strong> An antioxidant that helps neutralize toxins from alcohol.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-cyan-700 py-16 md:py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Don't Waste Your Day</h2>
                    <p className="mb-8 text-lg max-w-2xl mx-auto font-light">Book our Hangover IV Drip and get back to feeling your best. We deliver wellness directly to you.</p>
                    <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-cyan-700 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-xl transform hover:scale-105">
                        Book Hangover Relief Now
                    </a>
                </div>
            </section>
        </div>
    );
}
export default HangoverDripPage;
