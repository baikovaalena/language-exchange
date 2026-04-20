import people5 from '@shared/images/people5.png';
import Image from 'next/image';
import styles from './BottomCTA.module.scss';

export function BottomCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image src={people5} alt="People" className={styles.image} />
      </div>
      <h2 className={styles.headline}>Start speaking today.</h2>
      <a href="#" className={styles.cta}>
        Create Free Account
      </a>
    </section>
  );
}
