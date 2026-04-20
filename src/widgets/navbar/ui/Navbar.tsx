import { Box, Group } from '@mantine/core';
import styles from './Navbar.module.scss';

export function Navbar() {
  return (
    <Box component="nav" className={styles.nav}>
      <Group justify="space-between" align="center">
        <span className={styles.logo}>Language Exchange</span>
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
