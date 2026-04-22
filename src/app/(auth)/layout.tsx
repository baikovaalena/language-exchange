import styles from './layout.module.scss';
import { Text } from '@mantine/core';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <Text className={styles.title}>Language Exchange L</Text>
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
}
