import Link from 'next/link';
import Image from 'next/image';
import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { Box, Title, Text } from '@mantine/core';
import STUDY_IMG from '@/shared/images/study.webp';
import { steps } from '../model/steps';
import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  return (
    <Box component="section" id="how" className={styles.section}>
      <Box className={styles.inner}>
        <Box className={styles.left}>
          <Text component="span" className={styles.tag}>
            Как это работает
          </Text>
          <Title order={2} className={styles.title}>
            Три шага до первого разговора
          </Title>
          <Text component="p" className={styles.subtitle}>
            Никаких сложных настроек — только быстрый старт и живое общение.
          </Text>

          <Box className={styles.steps}>
            {steps.map((s, i) => (
              <Box key={s.id} className={styles.step}>
                <Box className={styles.stepLeft}>
                  <Box className={styles.stepNum}>{s.num}</Box>
                  {i < steps.length - 1 && <Box className={styles.stepLine} />}
                </Box>
                <Box className={styles.stepContent}>
                  <Title order={3} className={styles.stepTitle}>
                    {s.title}
                  </Title>
                  <Text component="p" className={styles.stepDesc}>
                    {s.desc}
                  </Text>
                </Box>
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
            <Text component="p" className={styles.quoteText}>
              &ldquo;Мой французский вырос с нуля до B1 за полгода!&rdquo;
            </Text>
            <Text component="p" className={styles.quoteAuthor}>
              — Sophie, Paris
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
