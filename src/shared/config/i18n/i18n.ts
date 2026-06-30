// Auto-discover locale files via Vite's import.meta.glob, so new
// languages/namespaces are picked up without manual imports here.
import i18n from 'i18next';
import type { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { STORAGE_KEYS } from '@shared/constants/localStorage';

const savedLanguage = localStorage.getItem(STORAGE_KEYS.language) ?? 'ru';

const localeModules = import.meta.glob<{ default: Record<string, unknown> }>(
  '../locales/*/*.json',
  { eager: true },
);

const resources: Resource = {};
const namespaceSet = new Set<string>();

for (const [path, module] of Object.entries(localeModules)) {
  const [, language, namespace] = path.match(/\.\.\/locales\/([^/]+)\/([^/]+)\.json$/) ?? [];

  if (!language || !namespace) {
    continue;
  }

  resources[language] ??= {};
  resources[language][namespace] = module.default;
  namespaceSet.add(namespace);
}

i18n.use(initReactI18next).init({
  resources,
  ns: Array.from(namespaceSet),
  defaultNS: 'translation',
  lng: savedLanguage,
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

export default i18n;
