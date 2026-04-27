import { Anchor, Box, Text } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';
import { FOOTER_LINK_LABELS } from '../lib/constants';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Box className={styles.inner}>
        <Box className={styles.logoBlock}>
          <Box className={styles.logoIcon}>
            <IconLanguage size={16} stroke={1.5} />
          </Box>
          <Text component="span" size="md" fw={600} className={styles.logoText}>
            Language exchange
          </Text>
        </Box>

        <Text component="p" size="sm" className={styles.copyright}>
          © 2026 Language exchange. Все права защищены.
        </Text>

        <Box className={styles.links}>
          {FOOTER_LINK_LABELS.map((link) => (
            <Anchor key={link} href="#" size="sm" className={styles.link} underline="never">
              {link}
            </Anchor>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
