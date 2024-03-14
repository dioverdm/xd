import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const feature = createI18n(provider, {
  en: {
    unsaved: 'Save Changes',
    error: {
      'not enabled': 'Not Enabled',
      'not enabled description': 'Try enable this feature?',
      'not found': 'Not Found',
      'not found description': "Hmm... Weird we can't find it",
    },
    bn: {
      enable: 'Enable Feature',
      disable: 'Disable',
      save: 'Save',
      discard: 'Discard',
    },
  },
  cn: {
    unsaved: 'Tiene cambios sin guardar',
    error: {
      'not enabled': 'No disponible',
      'not enabled description': '¿Intentas habilitar esta función?',
      'not found': '未找到功能',
      'not found description': 'Extraño... no podemos encontrarlo.',
    },
    bn: {
      enable: 'Habilitar funciones',
      disable: 'Desactivar funciones',
      save: 'Guardar cambios',
      discard: 'Abandonar',
    },
  },
});
