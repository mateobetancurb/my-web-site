// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mateobetancur.com',
  // Content Security Policy. Astro auto-generates per-page hashes for its bundled
  // scripts/styles and emits a <meta http-equiv> CSP. The external font stylesheet and
  // font files are allowlisted below. `frame-ancestors` and the other response-only
  // security headers cannot live in a <meta> CSP, so they're set in `public/_headers`.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' https://fonts.gstatic.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
      styleDirective: {
        resources: ["'self'", 'https://fonts.googleapis.com'],
      },
    },
  },
  integrations: [
    sitemap({
      // Exclude the root redirect page (noindex) so only the real localized pages are listed.
      filter: (page) => page !== 'https://mateobetancur.com/',
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-ES' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});