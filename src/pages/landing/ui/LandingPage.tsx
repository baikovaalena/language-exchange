import { Navbar } from '@widgets/navbar/ui/Navbar';
import { Hero } from '@widgets/hero/ui/Hero';
import { FeaturesSection } from '@widgets/features-section/ui/FeaturesSection';
import { SocialProof } from '@widgets/social-proof/ui/SocialProof';
import { BottomCTA } from '@widgets/bottom-cta/ui/BottomCTA';
import { Footer } from '@widgets/footer/ui/Footer';
import styles from './LandingPage.module.scss';

export function LandingPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Hero />
        </div>
        <FeaturesSection />
        <div className={styles.container}>
          <SocialProof />
        </div>
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
