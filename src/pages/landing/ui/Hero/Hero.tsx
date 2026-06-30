import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { Box, Image, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/constants/routes';
import people from '@/shared/images/people.webp';
import avatar1 from '@/shared/images/avatar-1.webp';
import avatar2 from '@/shared/images/avatar-2.webp';
import study from '@/shared/images/study.webp';
import styles from './Hero.module.scss';

const stackImages = [
  { src: avatar1, altKey: 'hero.images.avatar1' },
  { src: avatar2, altKey: 'hero.images.avatar2' },
  { src: people, altKey: 'hero.images.people' },
  { src: study, altKey: 'hero.images.study' },
] as const;

export const Hero = () => {
  const { t } = useTranslation('landing');

  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgGradient} />
      <Box className={styles.bgCircle1} />
      <Box className={styles.bgCircle2} />

      <Box className={styles.inner}>
        <Box className={styles.left}>
          <Box className={styles.badge}>
            <Box component="span" className={styles.badgeDot} />
            <Text component="span" size="sm">
              {t('hero.badge')}
            </Text>
          </Box>

          <Title order={1} mb="lg">
            {t('hero.title.start')}{' '}
            <Box component="span" className={styles.headlineAccent}>
              {t('hero.title.accent')}
              <Box component="span" className={styles.headlineUnderline} />
            </Box>
          </Title>

          <Text component="p" size="lg" lh="lg" className={styles.subtext}>
            {t('hero.subtitle')}
          </Text>

          <Box className={styles.ctaRow}>
            <Link to={ROUTES.registration} className={styles.ctaPrimary}>
              {t('hero.cta')} <IconArrowRight size={20} />
            </Link>
          </Box>

          <Box className={styles.socialProof}>
            <Box className={styles.avatarStack}>
              {stackImages.map(({ src, altKey }) => (
                <Image key={src} src={src} alt={t(altKey)} className={styles.stackAvatar} />
              ))}
            </Box>
            <Box>
              <Box className={styles.stars}>
                {Array.from({ length: 5 }, (_, i) => (
                  <IconStarFilled key={i} size={13} className={styles.starIcon} />
                ))}
              </Box>
              <Text component="p" size="xs" className={styles.reviewText}>
                {t('hero.socialProof')}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className={styles.right}>
          <Box className={styles.imageCard}>
            <Image src={people} alt={t('hero.images.people')} className={styles.heroImage} />
            <Box className={styles.imageOverlay} />
          </Box>

          <Box className={clsx(styles.floatingCard, styles.floatingCardBottom)}>
            <Image src={avatar1} alt={t('hero.images.avatar1')} className={styles.floatingAvatar} />
            <Box>
              <Text component="p" size="sm" fw={600} className={styles.floatingName}>
                {t('hero.student.name')}
              </Text>
              <Text component="p" size="xs" lh="sm" className={styles.floatingMeta}>
                {t('hero.student.meta')}
              </Text>
              <Box className={styles.floatingStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStarFilled key={i} size={11} className={styles.starIcon} />
                ))}
              </Box>
            </Box>
            <Box component="span" className={styles.onlineDot} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
