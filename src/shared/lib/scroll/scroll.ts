'use client';

import { useEffect, useState } from 'react';

export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, behavior });
}

export function useIsScrolled(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
