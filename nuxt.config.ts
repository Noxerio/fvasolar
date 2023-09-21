// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',

   [
       'nuxt-mail',
      {
           message: {
               to: 'frantisek.fiala@fva-solar.cz',
           },
           smtp: {
               service: 'gmail',
               auth: {
                   user: 'alavisek@gmail.com',
                   pass: 'zoks llqm ikro fgxa',
               }
           },
       }
   ],
  ],

  image: {
    provider: 'netlify',
    netlify: {
      baseURl: process.env.IMAGES_URL
    }
  },
  app: {
    head: {
      script: [
        {src: "https://identity.netlify.com/v1/netlify-identity-widget.js", tagPosition: "head"}
      ]
    }
  }
})
