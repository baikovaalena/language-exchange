import { Box } from '@mantine/core';
import { Hero } from './Hero/Hero';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { Navbar } from './Navbar/Navbar';
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
