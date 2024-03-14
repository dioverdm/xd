import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const common = createI18n(provider, {
  en: {
    loading: 'Loading',
    search: 'Search',
    'select lang': 'Select your language',
    'select role': 'Select a role',
    'select channel': 'Select a channel',
    dashboard: 'Dashboard',
    profile: 'Profile',
    pages: 'Pages',
    logout: 'Logout',
  },
  cn: {
    loading: 'Cargando',
    search: 'Buscar',
    'select lang': 'Elige tu idioma',
    'select role': 'Seleccionar rol',
    'select channel': 'Seleccionar canal',
    dashboard: 'Panel',
    profile: 'informacion del usuario',
    pages: 'Todas las páginas',
    logout: 'desconectar',
  },
});
