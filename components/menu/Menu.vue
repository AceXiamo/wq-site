<template>
  <div class="flex flex-col gap-[10px] mt-[40px]">
    <MenuItem
      v-for="(item, index) in menu.menus"
      :key="index"
      :value="item.value"
      :title="item.title"
      :icon="item.icon"
      :delay="item.delay"
      @click="menu.active = item.value"
    ></MenuItem>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "@/store/menu";
const menu = useMenuStore();
</script>
