import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const auth = createI18n(provider, {
  en: {
    login: 'Sign in',
    'login description': 'Login and start using our bot today',
    login_bn: 'Login with Discord',
  },
  cn: {
    login: 'Inicie sesión',
    'login description': 'Inicia sesión y comienza a usar nuestro bot',
    login_bn: 'Iniciar sesión con Discord',
  },
});
