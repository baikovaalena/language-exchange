'use client';
import { IconLanguage } from '@tabler/icons-react';
import { Text, Title } from '@mantine/core';
import styles from './layout.module.scss';
import { useRouter } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <IconLanguage size={40} stroke={2.2} onClick={() => router.push('/')} />
          </div>
          <Title order={1} fz="var(--fs-section)" lts="-0.02em" className={styles.brand}>
            Language exchange
          </Title>
          <Text className={styles.tagline} size="lg" lh="md" fw={500}>
            Общайся. Учись. Практикуй.
          </Text>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
