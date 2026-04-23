import { Box } from '@mantine/core';
import { Navbar } from './sections/navbar/ui/Navbar';
import { Hero } from './sections/hero/ui/Hero';
import { LanguageTicker } from './sections/language-ticker/ui/LanguageTicker';
import { FeaturesSection } from './sections/features-section/ui/FeaturesSection';
import { HowItWorks } from './sections/how-it-works/ui/HowItWorks';
import { SocialProof } from './sections/social-proof/ui/SocialProof';
import { BottomCTA } from './sections/bottom-cta/ui/BottomCTA';
import { Footer } from '@widgets/footer';
import { ScrollToTopButton } from '@widgets/scroll-to-top';
import styles from './LandingPage.module.scss';

export const LandingPage = () => {
  return (
    <Box className={styles.page}>
      <Navbar />
      <Box component="main" className={styles.main}>
        <Hero />
        <LanguageTicker />
        <FeaturesSection />
        <HowItWorks />
        <SocialProof />
        <BottomCTA />
      </Box>
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};
