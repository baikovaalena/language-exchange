import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { Box, Image, Stack, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/constants/routes';
import studyImage from '@/shared/images/study.webp';
import styles from './HowItWorks.module.scss';

const STEP_IDS = ['01', '02', '03'] as const;

export const HowItWorks = () => {
  const { t } = useTranslation('landing');

  return (
    <Box component="section" id="how" className={styles.section}>
      <Box className={styles.inner}>
        <Box className={styles.left}>
          <Text component="span" size="sm" fw={500} className={styles.tag}>
            {t('howItWorks.tag')}
          </Text>
          <Title order={2} mb="md">
            {t('howItWorks.title')}
          </Title>
          <Text component="p" size="lg" lh="lg" className={styles.subtitle}>
            {t('howItWorks.subtitle')}
          </Text>

          <Box className={styles.steps}>
            {STEP_IDS.map((id, i) => (
              <Box key={id} className={styles.step}>
                <Box className={styles.stepLeft}>
                  <Box className={styles.stepNum}>{id}</Box>
                  {i < STEP_IDS.length - 1 && <Box className={styles.stepLine} />}
                </Box>
                <Stack className={styles.stepContent} gap="xs">
                  <Title order={3} fz="md">
                    {t(`howItWorks.steps.${id}.title`)}
                  </Title>
                  <Text component="p" size="sm" lh="lg" className={styles.stepDesc}>
                    {t(`howItWorks.steps.${id}.desc`)}
                  </Text>
                </Stack>
              </Box>
            ))}
          </Box>

          <Link to={ROUTES.registration} className={styles.cta}>
            {t('howItWorks.cta')} <IconArrowRight size={20} />
          </Link>
        </Box>

        <Box className={styles.right}>
          <Box className={styles.imageCard}>
            <Image src={studyImage} alt={t('howItWorks.imageAlt')} className={styles.image} />
          </Box>

          <Box className={styles.quoteCard}>
            <Box className={styles.quoteStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={14} className={styles.starIcon} />
              ))}
            </Box>
            <Text component="p" size="sm" lh="md" className={styles.quoteText}>
              {t('howItWorks.quote')}
            </Text>
            <Text component="p" size="xs" className={styles.quoteAuthor}>
              {t('howItWorks.quoteAuthor')}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
