import Link from 'next/link';
import Image from 'next/image';
import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { Box, Stack, Title, Text } from '@mantine/core';
import STUDY_IMG from '@/shared/images/study.webp';
import { STEPS } from '../model/steps';
import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  return (
    <Box component="section" id="how" className={styles.section}>
      <Box className={styles.inner}>
        <Box className={styles.left}>
          <Text component="span" size="sm" fw={500} className={styles.tag}>
            Как это работает
          </Text>
          <Title order={2} lts="-0.025em" fz="var(--fs-section)" mb="md">
            Три шага до первого разговора
          </Title>
          <Text component="p" size="lg" lh="lg" className={styles.subtitle}>
            Никаких сложных настроек — только быстрый старт и живое общение.
          </Text>

          <Box className={styles.steps}>
            {STEPS.map((s, i) => (
              <Box key={s.id} className={styles.step}>
                <Box className={styles.stepLeft}>
                  <Box className={styles.stepNum}>{s.num}</Box>
                  {i < STEPS.length - 1 && <Box className={styles.stepLine} />}
                </Box>
                <Stack className={styles.stepContent} gap="xs">
                  <Title order={3} fz="md">
                    {s.title}
                  </Title>
                  <Text component="p" size="sm" lh="lg" className={styles.stepDesc}>
                    {s.desc}
                  </Text>
                </Stack>
              </Box>
            ))}
          </Box>

          <Link href="/registration" className={styles.cta}>
            Попробовать бесплатно <IconArrowRight size={20} />
          </Link>
        </Box>

        <Box className={styles.right}>
          <Box className={styles.imageCard}>
            <Image src={STUDY_IMG} alt="Study" className={styles.image} />
          </Box>

          <Box className={styles.quoteCard}>
            <Box className={styles.quoteStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={14} className={styles.starIcon} />
              ))}
            </Box>
            <Text component="p" size="sm" lh="md" className={styles.quoteText}>
              &ldquo;Мой французский вырос с нуля до B1 за полгода!&rdquo;
            </Text>
            <Text component="p" size="xs" className={styles.quoteAuthor}>
              — Sophie, Paris
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
