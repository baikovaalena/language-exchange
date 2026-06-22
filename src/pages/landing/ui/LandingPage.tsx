import { Box } from '@mantine/core';
import { Hero } from '@widgets/hero';
import { HowItWorks } from '@widgets/how-it-works';
import { Navbar } from '@widgets/navbar';
import styles from './LandingPage.module.scss';

export const LandingPage = () => {
  return (
    <Box className={styles.page}>
      <Navbar />
      <Box component="main" className={styles.main}>
        <Hero />
        <HowItWorks />
      </Box>
    </Box>
  );
};
