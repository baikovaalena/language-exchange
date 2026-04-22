import AVATAR1 from '@/shared/images/avatar-1.webp';
import AVATAR2 from '@/shared/images/avatar-2.webp';
import AVATAR3 from '@/shared/images/study.webp';
import { StaticImageData } from 'next/image';

interface Testimonial {
  avatar: StaticImageData;
  name: string;
  country: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    avatar: AVATAR1,
    name: 'Kenji Tanaka',
    country: '🇯🇵 Tokyo, Japan',
    rating: 5,
    text: 'За 3 месяца мой испанский вырос с нуля до разговорного уровня. Language exchange — лучшее, что со мной случалось в изучении языков.',
  },
  {
    avatar: AVATAR2,
    name: 'Maria Garcia',
    country: '🇪🇸 Madrid, Spain',
    rating: 5,
    text: 'Нашла партнёра по обмену из Франции, и теперь мы разговариваем каждую неделю. Моя уверенность выросла невероятно!',
  },
  {
    avatar: AVATAR3,
    name: 'Sophie Laurent',
    country: '🇫🇷 Paris, France',
    rating: 5,
    text: 'Интерфейс красивый и удобный. Фильтры помогли найти идеального собеседника по часовому поясу.',
  },
];
