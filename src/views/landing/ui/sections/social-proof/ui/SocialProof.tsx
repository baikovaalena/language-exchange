import { IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image';
import { Box, Title, Text } from '@mantine/core';
import { REVIEWS } from '../model/reviews';
import styles from './SocialProof.module.scss';

export const SocialProof = () => {
  return (
    <Box component="section" id="reviews" className={styles.section}>
      <Box className={styles.header}>
        <Text component="span" size="sm" fw={500} className={styles.tag}>
          Отзывы
        </Text>
        <Title order={2} fz="var(--fs-section)" mb="sm">
          Что говорят пользователи
        </Title>
        <Text component="p" size="lg" className={styles.subtitle}>
          Реальные истории от реальных людей
        </Text>
      </Box>

      <Box className={styles.grid}>
        {REVIEWS.map((review) => (
          <Box key={review.id} className={styles.card}>
            <Box className={styles.stars}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <IconStarFilled key={i} size={14} className={styles.starIcon} />
              ))}
            </Box>
            <Text component="p" size="md" lh="xl" className={styles.text}>
              &ldquo;{review.text}&rdquo;
            </Text>
            <Box className={styles.author}>
              <Image src={review.avatar} alt={review.name} className={styles.avatar} />
              <Box>
                <Text component="p" size="sm" fw={600} className={styles.authorName}>
                  {review.name}
                </Text>
                <Text component="p" size="xs" className={styles.authorCountry}>
                  {review.country}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
