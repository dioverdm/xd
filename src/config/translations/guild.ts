import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const guild = createI18n(provider, {
  en: {
    features: 'Features',
    banner: {
      title: 'Getting Started',
      description: 'Create your bot and type something',
    },
    error: {
      'not found': 'Where is it?',
      'not found description': "The bot can't access the server, let's invite him!",
      load: 'Failed to load guild',
    },
    bn: {
      'enable feature': 'Enable',
      'config feature': 'Config',
      invite: 'Invite bot',
      settings: 'Settings',
    },
  },
  cn: {
    features: 'Administrar la funcionalidad del bot',
    banner: {
      title: 'Pruébalo gratis',
      description: 'Personaliza a Pogo OS para tu servidor',
    },
    error: {
      'not found': '¿Dónde está?',
      'not found description': 'Pogo OS no puede acceder al servidor, ¡invitémoslo!',
      load: 'No se puede cargar el servidor',
    },
    bn: {
      'enable feature': 'Habilitar funciones',
      'config feature': 'Configuración',
      invite: 'Invitar a Pogo OS',
      settings: 'configuración',
    },
  },
});
