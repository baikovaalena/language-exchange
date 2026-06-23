import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation('');
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem('lng', nextLanguage);
  };

  return (
    <Button variant="default" size="sm" onClick={toggleLanguage}>
      {nextLanguage.toUpperCase()}
    </Button>
  );
};
