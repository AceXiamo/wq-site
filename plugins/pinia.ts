import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";

const pinia = createPinia();
export default defineNuxtPlugin(() => {
  pinia.use(piniaPluginPersistedstate);
});
