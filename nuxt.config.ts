// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@formkit/auto-animate/nuxt"],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: "",
  },
});
