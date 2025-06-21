// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxthub/core',
    'nuxt-auth-utils',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-05-15',
  hub: {
    database: true,
    blob: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})