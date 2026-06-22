import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { Box, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
// import STUDY_IMG from '@/shared/images/study.webp';
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
          <Title order={2} className={styles.title} mb="md">
            Три шага к свободному общению
          </Title>
          <Text component="p" size="lg" lh="lg" className={styles.subtitle}>
            Начать практику языка проще, чем кажется — всё занимает несколько минут.
          </Text>

          <Box className={styles.steps}>
            {STEPS.map(({ num, title, desc }, i) => (
              <Box key={num} className={styles.step}>
                <Box className={styles.stepLeft}>
                  <Box className={styles.stepNum}>{num}</Box>
                  {i < STEPS.length - 1 && <Box className={styles.stepLine} />}
                </Box>
                <Stack className={styles.stepContent} gap="xs">
                  <Title order={3} fz="md">
                    {title}
                  </Title>
                  <Text component="p" size="sm" lh="lg" className={styles.stepDesc}>
                    {desc}
                  </Text>
                </Stack>
              </Box>
            ))}
          </Box>

          <Link to="/registration" className={styles.cta}>
            Начать бесплатно <IconArrowRight size={20} />
          </Link>
        </Box>

        <Box className={styles.right}>
          <Box className={styles.imageCard}>
            {/* <img src={STUDY_IMG} alt="Студенты занимаются языком вместе" className={styles.image} /> */}
          </Box>

          <Box className={styles.quoteCard}>
            <Box className={styles.quoteStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={14} className={styles.starIcon} />
              ))}
            </Box>
            <Text component="p" size="sm" lh="md" className={styles.quoteText}>
              &ldquo;За месяц нашла постоянного партнёра для английского — общаемся каждую
              неделю.&rdquo;
            </Text>
            <Text component="p" size="xs" className={styles.quoteAuthor}>
              Мария, изучает английский
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
