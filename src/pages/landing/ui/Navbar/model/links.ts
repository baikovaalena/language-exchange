import { ANCHORS } from '@shared/constants/anchors';

interface IAnchorLink {
  translationKey: 'features' | 'howItWorks' | 'reviews';
  anchor: string;
}

export const ANCHOR_LINKS: IAnchorLink[] = [
  { translationKey: 'features', anchor: ANCHORS.features },
  { translationKey: 'howItWorks', anchor: ANCHORS.how },
  { translationKey: 'reviews', anchor: ANCHORS.reviews },
];
