<template>
  <div
    :class="[
      `flex p-[10px] rounded-lg hover:bg-opacity-10 dark:hover:bg-opacity-20 select-none`,
      `hover:bg-emerald-500 hover:text-emerald-600`,
      `dark:hover:bg-blue-900 dark:hover:text-blue-700`,
      menu.active === value && `bg-emerald-600 bg-opacity-10 text-emerald-600`,
      menu.active === value && `dark:bg-blue-900 dark:bg-opacity-10 dark:text-blue-700`,
    ]"
    v-motion="leftMontionConfig(delay)"
  >
    <Text
      ref="text_sec"
      class="cursor-default"
      :icon="icon"
      :text="title"
    ></Text>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";
const menu = useMenuStore();
const props = defineProps<{
  icon: string;
  title: string;
  value: string;
  delay?: number;
}>();
</script>
