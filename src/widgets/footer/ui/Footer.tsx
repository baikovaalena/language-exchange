import { Group } from '@mantine/core';
import styles from './Footer.module.scss';

const links = ['About', 'Privacy', 'Contact'];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>Language Exchange</span>
      <span className={styles.copyright}>© 2026 Language Exchange</span>
      <Group gap={20}>
        {links.map((link) => (
          <a key={link} href="#" className={styles.link}>
            {link}
          </a>
        ))}
      </Group>
    </footer>
  );
}
