
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import HomePage from './components/HomePage';
import BaliBellyPage from './components/pages/BaliBellyPage';
import HangoverDripPage from './components/pages/HangoverDripPage';
import ImmuneBoosterPage from './components/pages/ImmuneBoosterPage';

const routes: { [key: string]: React.FC } = {
  '#/bali-belly': BaliBellyPage,
  '#/immune-booster': ImmuneBoosterPage,
  '#/hangover-drip': HangoverDripPage,
};

function App(): React.ReactNode {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash || '#home';
      setCurrentPath(newPath);
      // For page navigation, scroll to top instantly
      if (routes[newPath]) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial load: set path and scroll if it's a page
    const initialPath = window.location.hash || '#home';
    setCurrentPath(initialPath);
    if (routes[initialPath]) {
        window.scrollTo(0, 0);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Effect for scrolling to sections on the HomePage
  useEffect(() => {
    // Custom smooth scroll function with ease-in-out effect
    const smoothScrollTo = (targetY: number, duration: number) => {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(timeElapsed, startY, distance, duration));
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Only scroll if it's a section hash (not a page route)
    if (currentPath.startsWith('#') && !routes[currentPath]) {
      const id = currentPath.substring(1);
      // A small delay to allow the page to render before scrolling
      const scrollDelay = 100; 
      
      setTimeout(() => {
        let element: HTMLElement | null = null;
        if (id && id !== 'home') {
            element = document.getElementById(id);
        }

        if (element) {
          const headerOffset = 90; // Height of sticky header to prevent content from being hidden
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
          
          smoothScrollTo(offsetPosition, 2000); // 2000ms = 2 seconds
        } else if (id === 'home' || currentPath === '#') {
          smoothScrollTo(0, 2000); // Scroll to top for home
        }
      }, scrollDelay);
    }
  }, [currentPath]);

  const PageComponent = routes[currentPath] || HomePage;

  return (
    <div className="bg-gray-50 text-gray-700 font-sans leading-normal tracking-normal">
      <Header />
      <main>
        <PageComponent />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;
