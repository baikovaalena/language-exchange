import { useState } from 'react';
import { ActionIcon, Anchor, Box, Button, Divider, Stack } from '@mantine/core';
import { IconLanguage, IconMenu2, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/constants/routes';
import { scrollToTop } from '@shared/lib/scroll';
import { ANCHOR_LINKS } from './model/links';
import styles from './Navbar.module.scss';
import { ThemeToggle } from '@shared/ui/ThemeToggle';
import { LanguageToggle } from '@shared/ui/LanguageToggle';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation('landing');

  return (
    <Box component="header" className={styles.header}>
      <Box className={styles.inner}>
        <Link
          to={ROUTES.home}
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
          {ANCHOR_LINKS.map((link) => (
            <Anchor
              key={link.navKey}
              component={Link}
              to={link.href}
              size="sm"
              className={styles.navLink}
              underline="never"
            >
              {t(`navbar.links.${link.navKey}`)}
            </Anchor>
          ))}
        </Box>

        <Box className={styles.right}>
          <Box className={styles.desktopControls}>
            <LanguageToggle />
            <ThemeToggle />
          </Box>

          <Box className={styles.actions}>
            <Button component={Link} to={ROUTES.login} variant="subtle" color="gray" size="sm">
              {t('navbar.login')}
            </Button>
            <Button
              component={Link}
              to={ROUTES.registration}
              size="sm"
              className={styles.signUpButton}
            >
              {t('navbar.registration')}
            </Button>
          </Box>

          <ActionIcon
            className={styles.burger}
            variant="transparent"
            color="gray"
            size="lg"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={t('navbar.menu')}
          >
            {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </ActionIcon>
        </Box>
      </Box>

      {mobileOpen && (
        <Box className={styles.mobileMenu}>
          <Stack gap="0.25rem">
            {ANCHOR_LINKS.map((link) => (
              <Anchor
                key={link.navKey}
                component={Link}
                to={link.href}
                size="md"
                className={styles.mobileLink}
                underline="never"
                onClick={() => setMobileOpen(false)}
              >
                {t(`navbar.links.${link.navKey}`)}
              </Anchor>
            ))}
          </Stack>
          <Divider my="xs" />
          <Box className={styles.mobileControls}>
            <LanguageToggle />
            <ThemeToggle />
          </Box>
          <Divider my="xs" />
          <Stack gap="0.5rem">
            <Button component={Link} to={ROUTES.login} variant="default" fullWidth>
              {t('navbar.login')}
            </Button>
            <Button
              component={Link}
              to={ROUTES.registration}
              fullWidth
              className={styles.signUpButton}
            >
              {t('navbar.registration')}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};
