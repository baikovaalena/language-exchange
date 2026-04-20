import { Box, Group } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import icon from '@/shared/images/icon-language-exchange.png';
import styles from './Navbar.module.scss';

export function Navbar() {
  return (
    <Box component="nav" className={styles.nav}>
      <Group justify="space-between" align="center">
        <Link href="/" className={styles.logo}>
          <Image src={icon} alt="Language Exchange" className={styles.logoIcon} />
          Language Exchange
        </Link>
        <Group gap={24} align="center">
          <a href="#" className={styles.loginLink}>
            Log in
          </a>
          <a href="#" className={styles.signupLink}>
            Sign up
          </a>
        </Group>
      </Group>
    </Box>
  );
}
