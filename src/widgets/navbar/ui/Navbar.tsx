import { useState } from 'react';
import { ActionIcon, Anchor, Box, Button, Divider, Stack } from '@mantine/core';
import { IconLanguage, IconMenu2, IconX } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@shared/lib/scroll';
import { NAV_LINKS } from '../model/links';
import styles from './Navbar.module.scss';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box component="header" className={styles.header}>
      <Box className={styles.inner}>
        <Link
          to="/"
          className={styles.logo}
          onClick={() => {
            scrollToTop();
          }}
        >
          <Box className={styles.logoIcon}>
            <IconLanguage size={20} stroke={1.5} />
          </Box>
          Language Exchange
        </Link>

        <Box component="nav" className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Anchor
              key={link.navKey}
              component={Link}
              to={link.href}
              size="sm"
              className={styles.navLink}
              underline="never"
            >
              {link.navKey}
            </Anchor>
          ))}
        </Box>

        <Box className={styles.right}>
          <Box className={styles.desktopControls}>
            <ThemeToggle />
          </Box>

          <Box className={styles.actions}>
            <Button component={Link} to="/login" variant="subtle" color="gray" size="sm">
              Войти
            </Button>
            <Button component={Link} to="/registration" size="sm" className={styles.signUpButton}>
              Регистрация
            </Button>
          </Box>

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
        </Box>
      </Box>

      {mobileOpen && (
        <Box className={styles.mobileMenu}>
          <Stack gap="0.25rem">
            {NAV_LINKS.map((link) => (
              <Anchor
                key={link.navKey}
                component={Link}
                to={link.href}
                size="md"
                className={styles.mobileLink}
                underline="never"
                onClick={() => setMobileOpen(false)}
              >
                {link.navKey}
              </Anchor>
            ))}
          </Stack>
          <Divider my="xs" />
          <Box className={styles.mobileControls}>
            <ThemeToggle />
          </Box>
          <Divider my="xs" />
          <Stack gap="0.5rem">
            <Button component={Link} to="/login" variant="default" fullWidth>
              Войти
            </Button>
            <Button component={Link} to="/registration" fullWidth className={styles.signUpButton}>
              Регистрация
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};
