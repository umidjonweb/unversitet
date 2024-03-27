// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
      '@element-plus/nuxt',
      
    ],
   css: ['~/assets/css/main.css', 'remixicon/fonts/remixicon.css'],
   postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
})
