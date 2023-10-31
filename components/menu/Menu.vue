<template>
  <div class="flex flex-col gap-[10px] mt-[40px]">
    <MenuItem
      v-for="(item, index) in menu.menus"
      :key="index"
      :value="item.value"
      :title="item.title"
      :icon="item.icon"
      :delay="item.delay"
      @click="menuClick(item)"
    ></MenuItem>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore, Menu } from "@/store/menu";
import { emojis } from '@/utils/common';

const menu = useMenuStore();
const router = useRouter();
const toast = useToast();

const menuClick = (item: Menu) => {
  if (item.url.startsWith("http")) {
    window.open(item.url, "_blank");
  } else if (item.url === "dev") {
    toast.add({
      title: "🧱 Tip",
      description: `待定喵. ${emojis[Math.floor(Math.random() * emojis.length)]}`,
    });
  } else {
    menu.active = item.value;
    router.push(item.url);
  }
};
</script>
