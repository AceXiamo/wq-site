// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/motion/nuxt",
    "@formkit/auto-animate/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/ui",
    '@nuxt/content'
  ],
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
  },
  ui: {
    icons: ['heroicons', 'iconamoon']
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});
