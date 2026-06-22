import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { Box, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
// import HERO_IMG from '@/shared/images/people.webp';
// import AVATAR1 from '@/shared/images/avatar-1.webp';
// import AVATAR2 from '@/shared/images/avatar-2.webp';
// import STUDY_IMG from '@/shared/images/study.webp';
import styles from './Hero.module.scss';

// const STACK_AVATARS = [AVATAR1, AVATAR2, HERO_IMG, STUDY_IMG];

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
            <Text component="span" size="sm">
              Платформа для языкового обмена
            </Text>
          </Box>

          <Title order={1} className={styles.title} mb="lg">
            Учите языки{' '}
            <Box component="span" className={styles.headlineAccent}>
              с носителями
              <Box component="span" className={styles.headlineUnderline} />
            </Box>
          </Title>

          <Text component="p" size="lg" lh="lg" className={styles.subtext}>
            Находите партнёров для практики, общайтесь в чате и на видеозвонках — бесплатно и без
            посредников.
          </Text>

          <Box className={styles.ctaRow}>
            <Link to="/registration" className={styles.ctaPrimary}>
              Начать обучение <IconArrowRight size={20} />
            </Link>
          </Box>

          <Box className={styles.socialProof}>
            <Box className={styles.avatarStack}>
              {/* {STACK_AVATARS.map((src) => (
                <img key={src} src={src} alt="" className={styles.stackAvatar} />
              ))} */}
            </Box>
            <Box>
              <Box className={styles.stars}>
                {Array.from({ length: 5 }, (_, i) => (
                  <IconStarFilled key={i} size={13} className={styles.starIcon} />
                ))}
              </Box>
              <Text component="p" size="xs" className={styles.reviewText}>
                4.9 · Более 10 000 пользователей
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className={styles.right}>
          <Box className={styles.imageCard}>
            {/* <img src={HERO_IMG} alt="Люди общаются и изучают языки" className={styles.heroImage} /> */}
            <Box className={styles.imageOverlay} />
          </Box>

          <Box className={clsx(styles.floatingCard, styles.floatingCardBottom)}>
            {/* <img src={AVATAR1} alt="" className={styles.floatingAvatar} /> */}
            <Box>
              <Text component="p" size="sm" fw={600} className={styles.floatingName}>
                Анна К.
              </Text>
              <Text component="p" size="xs" lh="sm" className={styles.floatingMeta}>
                Изучает английский
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
