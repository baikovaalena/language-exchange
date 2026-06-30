import { useState } from 'react';
import type { MouseEvent } from 'react';
import { ActionIcon, Anchor, Box, Button, Divider, Stack } from '@mantine/core';
import { IconLanguage, IconMenu2, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/constants/routes';
import { scrollToSection, scrollToTop } from '@shared/lib/scroll';
import { ANCHOR_LINKS } from './model/links';
import styles from './Navbar.module.scss';
import { ThemeToggle } from '@shared/ui/ThemeToggle';
import { LanguageToggle } from '@shared/ui/LanguageToggle';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation('landing');

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, anchor: string) => {
    event.preventDefault();
    setMobileOpen(false);
    scrollToSection(anchor);
  };

  return (
    <Box component="header" className={styles.header}>
      <Box className={styles.inner}>
        <Link to={ROUTES.home} className={styles.logo} onClick={scrollToTop}>
          <Box className={styles.logoIcon}>
            <IconLanguage size={20} stroke={1.5} />
          </Box>
          Language Exchange
        </Link>

        <Box component="nav" className={styles.nav}>
          {ANCHOR_LINKS.map((link) => (
            <Anchor
              key={link.translationKey}
              href={`#${link.anchor}`}
              size="sm"
              className={styles.navLink}
              underline="never"
              onClick={(event) => handleAnchorClick(event, link.anchor)}
            >
              {t(`navbar.links.${link.translationKey}`)}
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
                key={link.translationKey}
                href={`#${link.anchor}`}
                size="md"
                className={styles.mobileLink}
                underline="never"
                onClick={(event) => handleAnchorClick(event, link.anchor)}
              >
                {t(`navbar.links.${link.translationKey}`)}
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
