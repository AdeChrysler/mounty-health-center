import React from 'react';
import { WHATSAPP_BOOKING_URL } from '../../constants';

const CheckIcon = () => <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;

const ImmuneBoosterPage = () => {
    return (
        <div className="bg-white animate-fade-in">
            <div className="container mx-auto px-4 py-6">
                 <a href="#therapies" className="text-cyan-600 hover:text-cyan-800 hover:underline font-semibold inline-flex items-center transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to All Therapies
                </a>
            </div>
            <section className="relative py-24 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images2.imgbox.com/d3/55/A9ZvstBm_o.jpg')" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">Immune Booster IV Drip</h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light">Strengthen your body's defenses and stay vibrant with our powerful vitamin infusion.</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-4">Fortify Your Body's Natural Shield</h2>
                            <p className="text-gray-700 mb-4 text-lg leading-relaxed">In today's fast-paced world, maintaining a strong immune system is crucial. Our Immune Booster IV Drip delivers a high-potency blend of vitamins and antioxidants directly into your bloodstream for maximum absorption.</p>
                            <p className="text-gray-700 text-lg leading-relaxed">This therapy is perfect for those looking to prevent illness, reduce recovery time, or simply feel their best. It enhances your immune response, increases energy levels, and protects your body from oxidative stress.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-cyan-800 mb-6">Key Ingredients & Benefits</h3>
                            <ul className="space-y-4 text-gray-700 text-lg">
                                <li className="flex items-start"><CheckIcon /> <span><strong>High-Dose Vitamin C:</strong> A powerful antioxidant that is essential for a healthy immune response.</span></li>
                                <li className="flex items-start"><CheckIcon /> <span><strong>Zinc:</strong> A crucial mineral that helps fight off infection and reduce inflammation.</span></li>
                                <li className="flex items-start"><CheckIcon /> <span><strong>B-Vitamins:</strong> Vital for energy production and supporting overall cellular health.</span></li>
                                <li className="flex items-start"><CheckIcon /> <span><strong>Glutathione:</strong> The body's master antioxidant, which detoxifies and strengthens the immune system.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-cyan-700 py-16 md:py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Invest in Your Health</h2>
                    <p className="mb-8 text-lg max-w-2xl mx-auto font-light">Give your immune system the support it needs to keep you healthy and active. Book your Immune Booster drip today.</p>
                    <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-cyan-700 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-xl transform hover:scale-105">
                        Schedule Your Boost Now
                    </a>
                </div>
            </section>
        </div>
    );
}
export default ImmuneBoosterPage;
