import { IconWorld, IconMessage, IconShieldCheck, IconBolt } from '@tabler/icons-react';
import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const features: Feature[] = [
  {
    icon: <IconWorld size={24} stroke={1.5} />,
    title: 'Партнёры со всего мира',
    description:
      'Более 120 стран, носители языка и энтузиасты — найдите идеального собеседника за секунды.',
    color: 'var(--color-primary)',
    bg: 'var(--color-primary-light)',
  },
  {
    icon: <IconMessage size={24} stroke={1.5} />,
    title: 'Чат в реальном времени',
    description:
      'Встроенный мессенджер с историей и уведомлениями — общайтесь без лишних приложений.',
    color: 'var(--color-purple)',
    bg: 'var(--color-purple-light)',
  },
  {
    icon: <IconShieldCheck size={24} stroke={1.5} />,
    title: 'Безопасная среда',
    description:
      'Верификация профилей, система отзывов и рейтингов гарантируют честное сообщество.',
    color: 'var(--color-success)',
    bg: 'var(--color-success-light)',
  },
  {
    icon: <IconBolt size={24} stroke={1.5} />,
    title: 'Умный подбор',
    description:
      'Фильтры по языку, уровню, интересам и часовому поясу — чтобы вы совпали с партнёром.',
    color: 'var(--color-warning)',
    bg: 'var(--color-amber-light)',
  },
];
