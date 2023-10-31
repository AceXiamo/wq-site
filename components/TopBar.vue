<template>
  <div
    :class="[
      `fixed top-0 left-0 right-0 h-[60px] bg-[#EBF2ED] z-[9] hidden px-[20px] shadow-lg`,
      `dark:bg-[#101224]`,
      `lg:flex items-center`,
    ]"
  >
    <div class="grid place-content-center" @click="menu.fixedOpen = true">
      <i class="i-heroicons-swatch-solid w-5 h-5" />
    </div>
    <div class="ml-auto"><ColorMode></ColorMode></div>
  </div>

  <MenuFixed />
</template>

<script lang="ts" setup>
import { useMenuStore, Menu } from '@/store/menu';
const menu = useMenuStore();
</script>
