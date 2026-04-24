import { IconWorld, IconMessage, IconShieldCheck, IconBolt } from '@tabler/icons-react';
import { ReactNode } from 'react';

export type FeatureAccent = 'primary' | 'purple' | 'success' | 'warning';

interface IFeature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  accent: FeatureAccent;
}

export const FEATURES: IFeature[] = [
  {
    id: 'global-partners',
    icon: <IconWorld size={24} stroke={1.5} />,
    title: 'Партнёры со всего мира',
    description:
      'Более 120 стран, носители языка и энтузиасты — найдите идеального собеседника за секунды.',
    accent: 'primary',
  },
  {
    id: 'realtime-chat',
    icon: <IconMessage size={24} stroke={1.5} />,
    title: 'Чат в реальном времени',
    description:
      'Встроенный мессенджер с историей и уведомлениями — общайтесь без лишних приложений.',
    accent: 'purple',
  },
  {
    id: 'safe-environment',
    icon: <IconShieldCheck size={24} stroke={1.5} />,
    title: 'Безопасная среда',
    description:
      'Верификация профилей, система отзывов и рейтингов гарантируют честное сообщество.',
    accent: 'success',
  },
  {
    id: 'smart-matching',
    icon: <IconBolt size={24} stroke={1.5} />,
    title: 'Умный подбор',
    description:
      'Фильтры по языку, уровню, интересам и часовому поясу — чтобы вы совпали с партнёром.',
    accent: 'warning',
  },
];
