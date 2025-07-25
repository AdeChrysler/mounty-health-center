import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const useIntersectionObserver = (
  options: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className }) => {
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={containerRef}
      id={id}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
