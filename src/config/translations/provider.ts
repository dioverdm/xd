import { initLanguages, initI18n } from '@/utils/i18n';
import Router, { useRouter } from 'next/router';

/**
 * Supported languages
 */
export type Languages = 'en' | 'cn';
export const { languages, names } = initLanguages<Languages>({
  en: 'English',
  cn: 'Español',
});

export const provider = initI18n<Languages>({
  useLang: () => {
    const router = useRouter();
    return (router.locale as Languages) ?? 'cn';
  },
});

export function useLang() {
  const lang = provider.useLang();
  return {
    lang,
    setLang(lang: Languages) {
      const path = Router.asPath;

      Router.push(path, path, { locale: lang });
    },
  };
}
