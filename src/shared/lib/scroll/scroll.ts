'use client';

import { useEffect, useState } from 'react';

export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, behavior });
}

export function useIsScrolled(threshold = 0) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
