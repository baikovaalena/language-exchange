'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ActionIcon, Anchor, Button, Divider, Stack } from '@mantine/core';
import { IconLanguage, IconMenu2, IconX } from '@tabler/icons-react';
import { scrollToTop } from '@shared/lib/scroll';
import styles from './Navbar.module.scss';
import { navLinks } from '../model/links';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.logo}
          onClick={() => {
            scrollToTop();
          }}
        >
          <div className={styles.logoIcon}>
            <IconLanguage size={20} stroke={1.5} />
          </div>
          Language exchange
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Anchor key={link.id} href={link.href} className={styles.navLink} underline="never">
              {link.label}
            </Anchor>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button component={Link} href="/login" variant="subtle" color="gray" size="sm">
            Войти
          </Button>
          <Button component={Link} href="/registration" size="sm" color="#2563eb">
            Начать бесплатно
          </Button>
        </div>

        <ActionIcon
          className={styles.burger}
          variant="transparent"
          color="gray"
          size="lg"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Меню"
        >
          {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </ActionIcon>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Stack gap={4}>
            {navLinks.map((link) => (
              <Anchor
                key={link.id}
                href={link.href}
                className={styles.mobileLink}
                underline="never"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>
          <Divider my="sm" />
          <Stack gap={8}>
            <Button component={Link} href="/login" variant="default" fullWidth>
              Войти
            </Button>
            <Button component={Link} href="/registration" fullWidth color="#2563eb">
              Начать бесплатно
            </Button>
          </Stack>
        </div>
      )}
    </header>
  );
};
