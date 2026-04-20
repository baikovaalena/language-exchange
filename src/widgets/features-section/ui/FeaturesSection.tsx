import { Divider, SimpleGrid, Stack } from '@mantine/core';
import { features } from '../model/features';
import styles from './FeaturesSection.module.scss';

export function FeaturesSection() {
  return (
    <section className={styles.section}>
      <SimpleGrid cols={{ base: 1, md: 3 }}>
        {features.map((feature, i) => (
          <Stack key={i} gap={12} className={styles.card}>
            {i > 0 && (
              <Divider
                orientation="vertical"
                color="var(--color-border)"
                style={{ position: 'absolute' }}
              />
            )}
            <span className={styles.iconWrapper}>{feature.icon}</span>
            <span className={styles.label}>{feature.label}</span>
            <p className={styles.description}>{feature.description}</p>
          </Stack>
        ))}
      </SimpleGrid>
    </section>
  );
}
