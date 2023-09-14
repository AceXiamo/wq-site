// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  devtools: { enabled: false },
  nitro: {
    devProxy: {
      "/api": { target: "https://qwq.wiki", changeOrigin: true },
    },
  },
});
