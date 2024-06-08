import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'es'] as const;
export const localePrefix = 'always'; // Default
 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/', 
  '/blog': '/blog',
 
  // Dynamic params are supported via square brackets
  '/news/[articleSlug]': {
    en: '/blog/[articleSlug]',
    es: '/blog/[articleSlug]'
  },
 
  // Also (optional) catch-all segments are supported
  '/categories/[...slug]': {
    en: '/category/[...slug]',
    es: '/category/[...slug]'
  }
} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});