<template>
  <div
    :class="[`bg-white ${!size && 'h-full'} w-max p-[2px] rounded-sm`]"
    :style="{ height: size && `${size}px` }"
  >
    <div :class="[`aspect-[1/1] bg-cover h-full`]" :style="{
      backgroundImage: `url(${url})`,
    }"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  size?: number;
  url: string;
}>();
</script>
