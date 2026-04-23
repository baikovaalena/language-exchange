import Link from 'next/link';
import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { Box, Title, Text } from '@mantine/core';
import HERO_IMG from '@/shared/images/people.webp';
import AVATAR1 from '@/shared/images/avatar-1.webp';
import AVATAR2 from '@/shared/images/avatar-2.webp';
import STUDY_IMG from '@/shared/images/study.webp';
import styles from './Hero.module.scss';
import Image from 'next/image';

export const Hero = () => {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgGradient} />
      <Box className={styles.bgCircle1} />
      <Box className={styles.bgCircle2} />

      <Box className={styles.inner}>
        <Box className={styles.left}>
          <Box className={styles.badge}>
            <Box component="span" className={styles.badgeDot} />
            <Text component="span" size="sm">Более 50 000 пользователей по всему миру</Text>
          </Box>

          <Title order={1} lh="xs" lts="-0.025em" className={styles.headline}>
            Найди партнёра для{' '}
            <Box component="span" className={styles.headlineAccent}>
              языкового обмена
              <Box component="span" className={styles.headlineUnderline} />
            </Box>
          </Title>

          <Text component="p" lh="lg" className={styles.subtext}>
            Общайся с носителями языка, практикуй разговорную речь и открывай новые культуры — всё в
            одном месте.
          </Text>

          <Box className={styles.ctaRow}>
            <Link href="/registration" className={styles.ctaPrimary}>
              Начать бесплатно <IconArrowRight size={20} />
            </Link>
          </Box>

          <Box className={styles.socialProof}>
            <Box className={styles.avatarStack}>
              {[AVATAR1, AVATAR2, HERO_IMG, STUDY_IMG].map((src, i) => (
                <Image key={i} src={src} alt="" className={styles.stackAvatar} />
              ))}
            </Box>
            <Box>
              <Box className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStarFilled key={i} size={13} className={styles.starIcon} />
                ))}
              </Box>
              <Text component="p" size="xs" className={styles.reviewText}>
                4.9 · более 12 000 отзывов
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className={styles.right}>
          <Box className={styles.imageCard}>
            <Image src={HERO_IMG} alt="Language exchange" className={styles.heroImage} />
            <Box className={styles.imageOverlay} />
          </Box>

          <Box className={`${styles.floatingCard} ${styles.floatingCardBottom}`}>
            <Image src={AVATAR1} alt="" className={styles.floatingAvatar} />
            <Box>
              <Text component="p" size="sm" fw={600} className={styles.floatingName}>
                Kenji Tanaka
              </Text>
              <Text component="p" fz={11} lh="sm" className={styles.floatingMeta}>
                🇯🇵 Japanese · Native
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
