const fallbackSiteUrl = 'https://example.com';

export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || fallbackSiteUrl,
  defaultLocale: 'en',
  ogImage: '/og-image.svg',
  themeColor: '#082f49'
};
