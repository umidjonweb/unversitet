// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   build: {
      transpile: [
          "@headlessui/vue",
          "@heroicons/vue",
      ],
   },
   devtools: { enabled: true },
   modules: [
      '@element-plus/nuxt',
      '@vueuse/nuxt'
      
    ],
   css: ['~/assets/css/main.css', 'remixicon/fonts/remixicon.css'],
   postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
})
