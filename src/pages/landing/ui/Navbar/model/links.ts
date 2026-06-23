import { ANCHORS } from '@shared/config/anchors';

interface IAnchorLink {
  navKey: 'features' | 'howItWorks' | 'reviews';
  href: string;
}

export const ANCHOR_LINKS: IAnchorLink[] = [
  { navKey: 'features', href: ANCHORS.features },
  { navKey: 'howItWorks', href: ANCHORS.how },
  { navKey: 'reviews', href: ANCHORS.reviews },
];
