// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxt/content',
    '@vueuse/motion/nuxt',
    [
      'nuxt-mail',
      {
          message: {
              to: process.env.EMAIL_TO,
          },
          smtp: {
              service: 'gmail',
              auth: {
                  user: process.env.EMAIL_GMAIL_USER,
                  pass: process.env.EMAIL_GMAIL_KEY,
              }
          },
      }
  ],
  ],
  app: {
    head: {
      script: [
        {src: "https://identity.netlify.com/v1/netlify-identity-widget.js", tagPosition: "head"}
      ]
    }
  }
})
