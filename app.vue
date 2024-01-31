<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
import Wave from "./utils/wave";
import { useMenuStore } from "~/store/menu";
import SiteIcon from "~/utils/site_icon";

const router = useRouter();
const menuStore = useMenuStore();

onMounted(() => {
  routerHandle();
  waveHandle();
  SiteIcon.init();
});

const routerHandle = () => {
  menuStore.active = String(router.currentRoute.value.name);
};

const waveHandle = () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.left = "0";
  div.style.right = "0";
  div.style.bottom = "0";
  div.style.zIndex = "-1";
  div.id = "wave_container";
  const wave = new Wave("#wave_container", {
    number: 2,
    smooth: 50,
    velocity: 1,
    height: 0,
    border: {
      show: false,
    },
    opacity: 0.04,
    colors: ["#0ea5e9", "#4f46e5"],
  });
  wave.animate();
};
</script>
