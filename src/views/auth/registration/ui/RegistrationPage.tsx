'use client';

import Link from 'next/link';
import { Button, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import styles from '../../AuthPage.module.scss';

export const RegistrationPage = () => {
  return (
    <Paper className={styles.card}>
      <Title order={4} ta="center" mb="lg">
        Создайте аккаунт
      </Title>

      <Stack component="form" className={styles.form} gap="md">
        <TextInput label="Имя и фамилия" placeholder="Иван Иванов" required />
        <TextInput type="email" label="Электронная почта" placeholder="you@example.com" required />
        <PasswordInput label="Пароль" placeholder="••••••••" required />
        <PasswordInput label="Подтвердите пароль" placeholder="••••••••" required />
        <Button type="submit" size="md" fullWidth className={styles.submit}>
          Создать аккаунт
        </Button>
      </Stack>

      <Stack gap="xs" align="center" mt="xl" ta="center">
        <Text size="sm" c="dimmed">
          Уже есть аккаунт?{' '}
          <Link href="/login" className={styles.link}>
            Войти
          </Link>
        </Text>
      </Stack>
    </Paper>
  );
};
