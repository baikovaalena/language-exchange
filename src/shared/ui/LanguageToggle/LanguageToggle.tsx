import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { STORAGE_KEYS } from '@shared/constants/localStorage';

export const LanguageToggle = () => {
  const { i18n, t } = useTranslation('landing');
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem(STORAGE_KEYS.language, nextLanguage);
  };

  return (
    <Button variant="default" size="sm" onClick={toggleLanguage} aria-label={t('navbar.language')}>
      {nextLanguage.toUpperCase()}
    </Button>
  );
};
