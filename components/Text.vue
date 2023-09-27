<template>
  <div
    class="flex items-center"
    :style="{ gap: `${gap}px`, fontSize: `${size}px` }"
  >
    <div class="translate-y-[2px]" v-if="icon">
      <i :class="icon" />
    </div>
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: Number,
    default: 14,
  },
  gap: {
    type: Number,
    default: 10,
  },
  color: {
    type: String,
    default: "#fff",
  },
  icon: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});
</script>
