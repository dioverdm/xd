import { createI18n } from '@/utils/i18n';
import { common } from './common';
import { provider } from './provider';

export const profile = createI18n(provider, {
  en: {
    logout: common.translations.en.logout,
    language: 'Language',
    'language description': 'Select your language',
    settings: 'Settings',
    'dark mode': 'Dark Mode',
    'dark mode description': 'Enables dark theme in order to protect your eyes',
    'dev mode': 'Developer Mode',
    'dev mode description': 'Used for debugging and testing',
  },
  cn: {
    logout: common.translations.cn.logout,
    language: 'Idioma',
    'language description': 'Elige tu idioma',
    settings: 'Configuración',
    'dark mode': 'Modo oscuro',
    'dark mode description': 'Habilite el tema oscuro para proteger sus ojos',
    'dev mode': 'Modo desarrollador',
    'dev mode description': 'Para depurar y probar',
  },
});
