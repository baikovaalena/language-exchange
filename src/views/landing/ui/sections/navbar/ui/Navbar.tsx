'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ActionIcon, Anchor, Button, Divider, Stack } from '@mantine/core';
import { IconLanguage, IconMenu2, IconX } from '@tabler/icons-react';
import styles from './Navbar.module.scss';
import { NAV_LINKS } from '../model/links';
import { scrollToTop } from '@shared/lib/scroll/scroll';

export function Navbar() {
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
          {NAV_LINKS.map(([label, href]) => (
            <Anchor key={href} href={href} className={styles.navLink} underline="never">
              {label}
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
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Меню"
        >
          {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </ActionIcon>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Stack gap={4}>
            {NAV_LINKS.map(([label, href]) => (
              <Anchor
                key={href}
                href={href}
                className={styles.mobileLink}
                underline="never"
                onClick={() => setMobileOpen(false)}
              >
                {label}
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
}
