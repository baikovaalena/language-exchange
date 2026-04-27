'use client';

import Link from 'next/link';
import { Anchor, Button, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import styles from '../../AuthPage.module.scss';

export const LoginPage = () => {
  return (
    <Paper className={styles.card}>
      <Title order={4} ta="center" mb="lg">
        С возвращением
      </Title>

      <Stack component="form" className={styles.form} gap="md">
        <TextInput type="email" label="Электронная почта" placeholder="you@example.com" required />
        <PasswordInput label="Пароль" placeholder="••••••••" required />
        <Button type="submit" size="md" fullWidth className={styles.submit}>
          Войти
        </Button>
      </Stack>

      <Stack gap="xs" align="center" mt="xl" ta="center">
        <Text size="sm" c="dimmed">
          Нет аккаунта?{' '}
          <Link href="/registration" className={styles.link}>
            Зарегистрироваться
          </Link>
        </Text>
        <Anchor
          component={Link}
          href="#"
          size="sm"
          c="dimmed"
          underline="never"
          display="block"
          styles={{
            root: {
              '&:hover': {
                color: 'var(--color-text-primary)',
              },
            },
          }}
        >
          Отправить письмо для подтверждения повторно
        </Anchor>
      </Stack>
    </Paper>
  );
};
