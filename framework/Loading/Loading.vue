<template>
  <div
    :class="className"
    class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[10] min-h-[100px]"
    :style="{ backgroundColor: hasBg ? 'rgba(0,0,0,.1)' : '' }"
  >
    <i class="i-heroicons-arrow-path-20-solid animate-spin text-[30px]" />
  </div>
</template>

<script lang="ts" setup>
const className = ref("show-ani");
const props = withDefaults(
  defineProps<{
    hasBg?: boolean;
    close: () => void;
  }>(),
  {
    hasBg: true,
  },
);

const close = () => {
  props.close();
};

defineExpose({
  close,
});
</script>

<style scoped>
.show-ani {
  animation: show 0.3s linear forwards;
}

.hide-ani {
  animation: hide 0.3s linear forwards;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
