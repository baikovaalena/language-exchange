'use client';

import Link from 'next/link';
import { Button, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import styles from '../../AuthPage.module.scss';

export function LoginPage() {
  return (
    <div className={styles.card}>
      <Title order={2} className={styles.title}>
        С возвращением
      </Title>

      <form className={styles.form}>
        <TextInput type="email" label="Электронная почта" placeholder="you@example.com" required />
        <PasswordInput label="Пароль" placeholder="••••••••" required />
        <Button type="submit" size="md" fullWidth className={styles.submit}>
          Войти
        </Button>
      </form>

      <div className={styles.footer}>
        <Text component="span" size="sm" c="dimmed">
          Нет аккаунта?{' '}
          <Link href="/registration" className={styles.link}>
            Зарегистрироваться
          </Link>
        </Text>
        <Link href="#" className={styles.mutedLink}>
          Отправить письмо для подтверждения повторно
        </Link>
      </div>
    </div>
  );
}
