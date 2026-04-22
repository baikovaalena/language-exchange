'use client';

import Link from 'next/link';
import { Button, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import styles from '../../AuthPage.module.scss';

export const RegistrationPage = () => {
  return (
    <div className={styles.card}>
      <Title order={2} className={styles.title}>
        Создайте аккаунт
      </Title>

      <form className={styles.form}>
        <TextInput label="Имя и фамилия" placeholder="Иван Иванов" required />
        <TextInput type="email" label="Электронная почта" placeholder="you@example.com" required />
        <PasswordInput label="Пароль" placeholder="••••••••" required />
        <PasswordInput label="Подтвердите пароль" placeholder="••••••••" required />
        <Button type="submit" size="md" fullWidth className={styles.submit}>
          Создать аккаунт
        </Button>
      </form>

      <div className={styles.footer}>
        <Text component="span" size="sm" c="dimmed">
          Уже есть аккаунт?{' '}
          <Link href="/login" className={styles.link}>
            Войти
          </Link>
        </Text>
      </div>
    </div>
  );
};
