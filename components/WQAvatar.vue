<template>
  <div
    :class="[
      `bg-cover relative`,
      `before:content-[''] before:absolute before:top-0 before:scale-[1.6] before:bottom-0 before:bg-cover`,
      `before:left-0 before:right-0 before:bg-[url('~/assets/images/avatar-container.webp')]`,
    ]"
    :style="{
      width: `${props.size}px`,
      height: `${props.size}px`,
    }"
  >
    <img
      src="~/assets/images/avatar.avif"
      class="w-full h-full object-cover rounded-full"
    />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: number
}>(), {
  size: 60,
})
</script>

