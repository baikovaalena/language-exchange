import { IconArrowsLeftRight, IconChartBar, IconMessageCircle } from '@tabler/icons-react';
import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  label: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <IconMessageCircle size={18} stroke={1.5} />,
    label: 'Speak with natives',
    description:
      'Have real conversations with fluent speakers who help you sound natural from day one.',
  },
  {
    icon: <IconArrowsLeftRight size={18} stroke={1.5} />,
    label: 'Language exchange',
    description:
      'Trade languages with a partner — you teach yours, they teach theirs. Mutual growth.',
  },
  {
    icon: <IconChartBar size={18} stroke={1.5} />,
    label: 'Track your growth',
    description:
      'See your conversation hours, vocabulary, and confidence build over time with quiet precision.',
  },
];
