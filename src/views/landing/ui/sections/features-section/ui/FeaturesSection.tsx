import { Box, Title, Text } from '@mantine/core';
import clsx from 'clsx';
import { FEATURES } from '../model/features';
import styles from './FeaturesSection.module.scss';

export const FeaturesSection = () => {
  return (
    <Box component="section" id="features" className={styles.section}>
      <Box className={styles.inner}>
        <Box className={styles.header}>
          <Text component="span" size="sm" fw={500} className={styles.tag}>
            Возможности
          </Text>
          <Title order={2} fz="var(--fs-section)" mb="md">
            Всё для успешной практики
          </Title>
          <Text component="p" size="lg" lh="md" className={styles.subtitle}>
            Language exchange собрал всё необходимое в одном продукте — без лишней сложности.
          </Text>
        </Box>

        <Box className={styles.grid}>
          {FEATURES.map((f) => (
            <Box key={f.id} className={styles.card}>
              <Box className={clsx(styles.iconBox, styles[`iconBox_${f.accent}`])}>{f.icon}</Box>
              <Title order={3} fz="md">
                {f.title}
              </Title>
              <Text component="p" size="sm" lh="lg" className={styles.cardDesc}>
                {f.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
