import { Box, Text } from '@mantine/core';
import styles from './LanguageTicker.module.scss';
import { languages } from '../model/languages';

export const LanguageTicker = () => {
  const doubled = [...languages, ...languages];

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.track}>
        {doubled.map((lang, i) => (
          <Text component="span" size="sm" fw={500} key={i} className={styles.item}>
            {lang}
          </Text>
        ))}
      </Box>
    </Box>
  );
};
