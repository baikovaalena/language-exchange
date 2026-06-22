interface INavLink {
  navKey: 'features' | 'howItWorks' | 'reviews';
  href: string;
}

export const NAV_LINKS: INavLink[] = [
  { navKey: 'features', href: '/#features' },
  { navKey: 'howItWorks', href: '/#how' },
  { navKey: 'reviews', href: '/#reviews' },
];
