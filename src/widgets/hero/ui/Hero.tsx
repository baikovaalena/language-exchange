import { Group, Stack } from '@mantine/core';
import people from '@shared/images/people.png';
import people1 from '@shared/images/people1.png';
import people2 from '@shared/images/people2.png';
import people3 from '@shared/images/people3.png';
import people4 from '@shared/images/people4.png';
import people5 from '@shared/images/people5.png';
import Image from 'next/image';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.heroLayout}>
        <div className={styles.imagesLeft}>
          <Image src={people1} alt="Speaker" className={`${styles.avatar} ${styles.avatarLg}`} />
          <Image src={people2} alt="Speaker" className={`${styles.avatar} ${styles.avatarSm}`} />
          <Image src={people3} alt="Speaker" className={`${styles.avatar} ${styles.avatarMd}`} />
        </div>

        <Stack align="center" gap={0} className={styles.content}>
          <span className={styles.tag}>Language practice through conversation</span>

          <h1 className={styles.headline}>
            Speak more.
            <br />
            <span className={styles.headlineAccent}>Fear less.</span>
          </h1>

          <p className={styles.subtext}>
            Connect with native speakers worldwide and build real fluency through conversation.
          </p>
          <Group gap={24} align="center">
            <a href="#" className={styles.ctaPrimary}>
              Get Started
            </a>
            <a href="#" className={styles.ctaSecondary}>
              Log in
            </a>
          </Group>
        </Stack>

        <div className={styles.imagesRight}>
          <Image src={people4} alt="Speaker" className={`${styles.avatar} ${styles.avatarMd}`} />
          <Image src={people5} alt="Speaker" className={`${styles.avatar} ${styles.avatarLg}`} />
          <Image src={people} alt="Speaker" className={`${styles.avatar} ${styles.avatarSm}`} />
        </div>
      </div>
    </section>
  );
}
