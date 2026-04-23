'use client';

import Link from 'next/link';
import { Button, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import styles from '../../AuthPage.module.scss';

export const LoginPage = () => {
  return (
    <Paper className={styles.card}>
      <Title order={2} fw={600} lh="xs" lts="-0.01em" className={styles.title}>
        С возвращением
      </Title>

      <Stack component="form" className={styles.form} gap="md">
        <TextInput type="email" label="Электронная почта" placeholder="you@example.com" required />
        <PasswordInput label="Пароль" placeholder="••••••••" required />
        <Button type="submit" size="md" fullWidth className={styles.submit}>
          Войти
        </Button>
      </Stack>

      <Stack className={styles.footer} gap={0} align="center" mt="xl">
        <Text size="sm" c="dimmed">
          Нет аккаунта?{' '}
          <Link href="/registration" className={styles.link}>
            Зарегистрироваться
          </Link>
        </Text>
        <Link href="#" className={styles.mutedLink}>
          Отправить письмо для подтверждения повторно
        </Link>
      </Stack>
    </Paper>
  );
};
