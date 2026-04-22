import { IconLanguage } from '@tabler/icons-react';
import styles from './Footer.module.scss';

const links = ['Конфиденциальность', 'Условия', 'Поддержка'];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoBlock}>
          <div className={styles.logoIcon}>
            <IconLanguage size={16} stroke={1.5} />
          </div>
          <span className={styles.logoText}>Language exchange</span>
        </div>

        <p className={styles.copyright}>© 2026 Language exchange. Все права защищены.</p>

        <div className={styles.links}>
          {links.map((link) => (
            <a key={link} href="#" className={styles.link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
