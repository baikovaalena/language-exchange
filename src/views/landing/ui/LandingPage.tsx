import { Box } from '@mantine/core';
import { Navbar } from '@widgets/navbar/ui/Navbar';
import { Hero } from '@widgets/hero/ui/Hero';
import { LanguageTicker } from '@widgets/language-ticker/ui/LanguageTicker';
import { FeaturesSection } from '@widgets/features-section/ui/FeaturesSection';
import { HowItWorks } from '@widgets/how-it-works/ui/HowItWorks';
import { SocialProof } from '@widgets/social-proof/ui/SocialProof';
import { BottomCTA } from '@widgets/bottom-cta/ui/BottomCTA';
import { Footer } from '@widgets/footer/ui/Footer';
import { ScrollToTopButton } from '@widgets/scroll-to-top/ui/ScrollToTopButton';
import styles from './LandingPage.module.scss';

export function LandingPage() {
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
}
