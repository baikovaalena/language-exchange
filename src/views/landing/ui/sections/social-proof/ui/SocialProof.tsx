import { IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image';
import { Box, Title, Text } from '@mantine/core';
import { testimonials } from '../model/testimonials';
import styles from './SocialProof.module.scss';

export function SocialProof() {
  return (
    <Box component="section" id="testimonials" className={styles.section}>
      <Box className={styles.header}>
        <Text component="span" className={styles.tag}>
          Отзывы
        </Text>
        <Title order={2} className={styles.title}>
          Что говорят пользователи
        </Title>
        <Text component="p" className={styles.subtitle}>
          Реальные истории от реальных людей
        </Text>
      </Box>

      <Box className={styles.grid}>
        {testimonials.map((t) => (
          <Box key={t.name} className={styles.card}>
            <Box className={styles.stars}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <IconStarFilled key={i} size={14} className={styles.starIcon} />
              ))}
            </Box>
            <Text component="p" className={styles.text}>
              &ldquo;{t.text}&rdquo;
            </Text>
            <Box className={styles.author}>
              <Image src={t.avatar} alt={t.name} className={styles.avatar} />
              <Box>
                <Text component="p" className={styles.authorName}>
                  {t.name}
                </Text>
                <Text component="p" className={styles.authorCountry}>
                  {t.country}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
