import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const useCommandPaletteLocaleActions = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t } = useTranslation(['common']);

  const changeLocale = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale: locale });
  };

  useRegisterActions(
    [
      {
        id: 'language-chinese',
        name: '中文',
        keywords:
          'locale language translation traditional chinese taiwanese 語言 語系 翻譯 中文 台灣 繁體',
        perform: () => changeLocale('zh-TW'),
        icon: <span className="p-1">🇹🇼</span>,
        parent: 'language',
        section: t('operation'),
      },
    ],
    [asPath]
  );
};
