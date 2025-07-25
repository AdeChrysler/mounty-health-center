
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
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial load check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Effect for scrolling to sections on the HomePage
  useEffect(() => {
    // Only scroll if it's a section hash (not a page route)
    if (currentPath.startsWith('#') && !currentPath.startsWith('#/')) {
      const id = currentPath.substring(1);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
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
