import { Box, Title, Text } from '@mantine/core';
import { features } from '../model/features';
import styles from './FeaturesSection.module.scss';

export const FeaturesSection = () => {
  return (
    <Box component="section" id="features" className={styles.section}>
      <Box className={styles.inner}>
        <Box className={styles.header}>
          <Text component="span" className={styles.tag}>
            Возможности
          </Text>
          <Title order={2} className={styles.title}>
            Всё для успешной практики
          </Title>
          <Text component="p" className={styles.subtitle}>
            Language exchange собрал всё необходимое в одном продукте — без лишней сложности.
          </Text>
        </Box>

        <Box className={styles.grid}>
          {features.map((f) => (
            <Box key={f.title} className={styles.card}>
              <Box
                className={styles.iconBox}
                style={{ background: f.bg, color: f.color } as React.CSSProperties}
              >
                {f.icon}
              </Box>
              <Title order={3} className={styles.cardTitle}>
                {f.title}
              </Title>
              <Text component="p" className={styles.cardDesc}>
                {f.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
