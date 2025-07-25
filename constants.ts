import { NavLink, Promotion, ServicePackage, NewsArticle, Testimonial } from './types';

export const WHATSAPP_BOOKING_URL = "https://api.whatsapp.com/send?phone=6285142740977&text=Hello%20I%20want%20to%20consult%20about%20the%20treatment%20in%20Mounty%20Clinics%20%23WEB";

export const CONTACT_INFO = {
  email: 'contact@mountyhealthcenter.com',
  phone: '0851-4274-0977',
  phoneHref: '+6285142740977',
  address: 'Jl. Kepaon Indah No.8, Pemogan, Denpasar Selatan, Kota Denpasar, Bali 80221',
  whatsapp: WHATSAPP_BOOKING_URL,
  instagram: 'https://www.instagram.com/mountyhealthcenter',
  hours: 'Open daily, closes 10:00 PM',
  googleReviewsLink: 'https://maps.app.goo.gl/WPCDHji4oSoZvasTA',
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Jl.+Kepaon+Indah+No.8,+Pemogan,+Denpasar+Selatan,+Kota+Denpasar,+Bali+80221',
};

export const NAV_LINKS: NavLink[] = [
  { name: 'About Us', href: '#about' },
  { name: 'Promotions', href: '#promotions' },
  {
    name: 'IV Therapies',
    href: '#therapies',
    subLinks: [
      { name: 'Jetlag IV', href: '#therapies' },
      { name: 'Hangover IV', href: '#therapies' },
      { name: 'Immunity Boost', href: '#therapies' },
    ],
  },
  { name: 'Tests', href: '#treatments' },
  { name: 'Doctor on Call', href: '#treatments' },
  { name: 'Blogs', href: '#latest-news' },
];

export const PROMOTIONS: Promotion[] = [
  {
    title: 'Soothe Your Stomach, Enjoy Bali',
    icon: 'bali-belly',
    ivType: 'BALI BELLY IV',
    ivLabel: 'STOMACH RELIEF',
    imageUrl: 'https://images2.imgbox.com/c5/ba/GEafaKHx_o.jpg',
  },
  {
    title: 'Ease Your Acid, Reclaim Comfort',
    icon: 'acid-reflux',
    ivType: 'GERD IV',
    ivLabel: 'ACID RELIEF',
    imageUrl: 'https://images2.imgbox.com/87/2a/CgHXWB7S_o.jpg',
  },
  {
    title: 'Reset Your Clock, Recharge Your Mind',
    icon: 'jetlag',
    ivType: 'JETLAG IV',
    ivLabel: 'SLEEP & RESET',
    imageUrl: 'https://images2.imgbox.com/81/f7/SNpdSZCk_o.jpg',
  },
  {
    title: 'Detox Your Body, Rehydrate Your Brain',
    icon: 'hangover',
    ivType: 'HANGOVER IV',
    ivLabel: 'POST-PARTY FIX',
    imageUrl: 'https://images2.imgbox.com/1e/20/aMguP9vX_o.jpg',
  },
];

export const THERAPY_PACKAGES: ServicePackage[] = [
    {
        headline: 'Beat Bali Belly,\nReclaim Your Holiday',
        title: 'BALI BELLY IV - DIGESTIVE RELIEF',
        description: 'Soothe and recover from traveler\'s stomach issues with our specialized IV therapy, designed to rehydrate and restore balance.',
        icon: 'bali-belly',
        imageUrl: 'https://images2.imgbox.com/c5/ba/GEafaKHx_o.jpg',
        pageId: 'bali-belly'
    },
    {
        headline: 'Hydrate.\nDetox.\nBounce Back.',
        title: 'IMMUNE BOOSTER PACKAGES',
        description: 'Strengthen your body’s defenses with a powerful blend of vitamins and antioxidants to help you stay healthy and vibrant.',
        icon: 'immune-booster',
        imageUrl: 'https://images2.imgbox.com/d3/55/A9ZvstBm_o.jpg',
        pageId: 'immune-booster'
    },
    {
        headline: 'Detox Your Body,\nRehydrate Your Brain',
        title: 'HANGOVER IV - POST-PARTY FIX',
        description: 'Recover effectively from the night before with our basic, standard, or premium Hangover IV packages, perfect for rapid rehydration at your home or hotel.',
        icon: 'hangover-package',
        imageUrl: 'https://images2.imgbox.com/1e/20/aMguP9vX_o.jpg',
        pageId: 'hangover-drip'
    }
];

export const TREATMENT_TYPES = [
    { name: 'VACCINATIONS', icon: 'capsule' },
    { name: 'MEDICAL TESTS', icon: 'dropper' },
    { name: 'PRIVATE WELLNESS TESTS', icon: 'calendar' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
    {
        title: 'MONTHLY IV DRIP DEALS IN BALI (JUNE 2025)',
        icon: 'iv-drip',
        date: 'June 16, 2025'
    },
    {
        title: 'SICKNESS IN BALI 2025: MOST COMMON ILLNESSES & HOW TO HANDLE THEM FAST',
        icon: 'health-report',
        date: 'June 16, 2025'
    },
    {
        title: 'DEEPSCAN VS PRIMEPROTECT: CHOOSING THE RIGHT ADVANCED STD PANEL IN BALI',
        icon: 'lab-test',
        date: 'June 16, 2025'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Alexander C',
        initials: 'A',
        date: '2025-03-20',
        review: 'Thank you Dwi'
    },
    {
        name: 'Britney Campbell',
        initials: 'B',
        date: '2025-03-18',
        review: 'Amazing service, ordered a nurse & doctor to come to my villa when I had a stomach bug. Got better in 24 hours....'
    }
];

export const PARTNER_LOGOS = [
    'https://raw.githubusercontent.com/user-attachments/assets/de942f74-32b0-4a81-bb65-515456f9b8b9/euro-center.svg',
    'https://raw.githubusercontent.com/user-attachments/assets/c96d83a1-799d-4e9f-9f44-9844f6f7d0a2/class-assistance.svg',
    'https://raw.githubusercontent.com/user-attachments/assets/69d30009-40fe-4e5c-9c71-332e1857945c/savitar-group.svg',
    'https://raw.githubusercontent.com/user-attachments/assets/81c85d88-b2a8-4226-a006-215f7b0f796d/best-service-group.svg',
];
