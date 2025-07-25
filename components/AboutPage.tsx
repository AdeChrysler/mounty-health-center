import React from 'react';
import { CONTACT_INFO, WHATSAPP_BOOKING_URL } from '../constants';

const StarIcon = () => <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
const GoogleIcon = () => <svg className="h-12 w-12 mx-auto mb-4" viewBox="0 0 48 48"><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path></svg>;
const MapPinIcon = () => <svg className="w-6 h-6 mr-3 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const ClockIcon = () => <svg className="w-6 h-6 mr-3 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const PhoneIcon = () => <svg className="w-6 h-6 mr-3 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.461 4.415a1 1 0 01-.297 1.13l-2.133 2.134a11.047 11.047 0 005.57 5.57l2.134-2.133a1 1 0 011.13-.297l4.415 1.46a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;

const ProfessionalIcon = () => <svg className="w-11 h-11 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const AvailabilityIcon = () => <svg className="w-11 h-11 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const PatientCenteredIcon = () => <svg className="w-11 h-11 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>;


const AboutSection = (): React.ReactNode => {
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-cyan-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Mounty Health Center, our mission is to provide accessible, high-quality, and compassionate medical care to the residents and visitors of Bali. We combine modern medicine with a patient-first approach, ensuring you receive the best possible care, whether at our clinic or in the comfort of your home or hotel.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-800 mb-12 text-center">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div className="text-center flex flex-col items-center">
                    <div className="bg-cyan-100 rounded-full p-4 mb-4"><ProfessionalIcon/></div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Team</h3>
                    <p className="text-gray-600">Our team consists of licensed doctors and nurses dedicated to providing expert medical care and advice.</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div className="bg-cyan-100 rounded-full p-4 mb-4"><AvailabilityIcon/></div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 On-Call Service</h3>
                    <p className="text-gray-600">Health concerns can arise at any time. Our on-call services are available 24 hours a day, 7 days a week.</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div className="bg-cyan-100 rounded-full p-4 mb-4"><PatientCenteredIcon/></div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Patient-Centered Care</h3>
                    <p className="text-gray-600">Your comfort and well-being are our top priorities. We tailor our services to meet your individual health needs.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 bg-white">
         <div className="container mx-auto px-4 max-w-2xl text-center">
            <GoogleIcon />
            <h2 className="text-3xl font-bold text-cyan-800 mb-4">Trusted by the Community</h2>
            <div className="flex items-center justify-center space-x-1 text-yellow-400">
                <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
            </div>
            <p className="text-2xl font-semibold text-gray-800 my-4">4.6 <span className="text-lg font-normal text-gray-500">out of 5 stars</span></p>
            <p className="text-lg text-gray-600">Based on 20+ Google Reviews.</p>
            <a href={CONTACT_INFO.googleReviewsLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-cyan-600 font-semibold hover:underline">
                Read our reviews on Google
            </a>
         </div>
      </section>

      <section className="bg-cyan-800 text-white py-16">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-3xl font-bold mb-6">Visit Our Clinic</h2>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start">
                           <MapPinIcon />
                           <span>{CONTACT_INFO.address}</span>
                        </li>
                        <li className="flex items-center">
                           <ClockIcon/>
                           <span>{CONTACT_INFO.hours}</span>
                        </li>
                         <li className="flex items-center">
                           <PhoneIcon/>
                           <a href={`tel:${CONTACT_INFO.phoneHref}`} className="hover:text-cyan-300">{CONTACT_INFO.phone}</a>
                        </li>
                    </ul>
                    <a href={CONTACT_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-white text-cyan-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg">
                      Get Directions
                    </a>
                </div>
                <div className="h-80 rounded-lg shadow-xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8093081594266!2d115.19870897567952!3d-8.709650991339489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410020033e71%3A0x9c1dfb68c36f45ba!2sApotek%20Mounty%20Health%20Center!5e0!3m2!1sen!2sid!4v1752908824012!5m2!1sen!2sid"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;