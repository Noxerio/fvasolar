// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxt/content'
  ],
  app: {
    head: {
      script: [
        {src: "https://identity.netlify.com/v1/netlify-identity-widget.js", tagPosition: "head"}
      ]
    }
  }
})
