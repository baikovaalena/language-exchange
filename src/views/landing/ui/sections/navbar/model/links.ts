interface INavLink {
  id: string;
  label: string;
  href: string;
}

export const navLinks: INavLink[] = [
  { id: 'features', label: 'Возможности', href: '#features' },
  { id: 'how-it-works', label: 'Как это работает', href: '#how' },
  { id: 'testimonials', label: 'Отзывы', href: '#testimonials' },
];
