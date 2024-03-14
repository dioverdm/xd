import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const dashboard = createI18n(provider, {
  en: {
    pricing: 'Pricing',
    learn_more: 'Learn More',
    invite: {
      title: 'Invite Pogo OS',
      description: 'Try Pogo OS with one click',
      bn: 'Invite now',
    },
    servers: {
      title: 'Select Server',
      description: 'Select the server to configure',
    },
    vc: {
      create: 'Create a voice channel',
      'created channels': 'Created Voice channels',
    },
    command: {
      title: 'Command Usage',
      description: 'Use of commands of your server',
    },
  },
  cn: {
    pricing: 'Precio',
    learn_more: 'Leer más',
    invite: {
      title: 'Invitar a Pogo OS',
      description: 'Prueba a Pogo OS con un solo clic',
      bn: 'invitar ahora',
    },
    servers: {
      title: 'Seleccionar servidor',
      description: 'Personaliza tu servidor (Próximamente)',
    },
    vc: {
      create: 'Crear un canal de voz',
      'created channels': 'Canal de voz creado',
    },
    command: {
      title: 'Uso de comandos',
      description: 'Vea el uso de comandos de su servidor',
    },
  },
});
