import Link from 'next/link';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import { Box, Title, Text } from '@mantine/core';
import styles from './BottomCTA.module.scss';

const perks = ['Бесплатно навсегда', 'Без кредитной карты', '120+ языков'];

export const BottomCTA = () => {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.card}>
        <Box className={styles.bgCircle1} />
        <Box className={styles.bgCircle2} />

        <Text component="span" className={styles.badge}>
          🎉 Регистрация бесплатна
        </Text>

        <Title order={2} className={styles.title}>
          Начните говорить сегодня
        </Title>
        <Text component="p" className={styles.subtitle}>
          Присоединитесь к 50 000+ пользователей, которые уже улучшают свои языки через живое
          общение.
        </Text>

        <Box className={styles.actions}>
          <Link href="/registration" className={styles.primaryBtn}>
            Создать аккаунт <IconArrowRight size={20} />
          </Link>
          <Link href="/login" className={styles.secondaryBtn}>
            Уже есть аккаунт
          </Link>
        </Box>

        <Box className={styles.perks}>
          {perks.map((p) => (
            <Box key={p} className={styles.perk}>
              <IconCheck size={16} className={styles.checkIcon} />
              <Text component="span">{p}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
