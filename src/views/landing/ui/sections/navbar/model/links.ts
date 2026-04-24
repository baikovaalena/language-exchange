interface INavLink {
  id: string;
  label: string;
  href: string;
}

export const NAV_LINKS: INavLink[] = [
  { id: 'features', label: 'Возможности', href: '#features' },
  { id: 'how-it-works', label: 'Как это работает', href: '#how' },
  { id: 'reviews', label: 'Отзывы', href: '#reviews' },
];
