// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
  ],
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
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
