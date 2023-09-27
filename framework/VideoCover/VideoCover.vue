<template>
  <div :class="[className]">
    <img
      :src="base64"
      style="
        height: 100px;
        aspect-ratio: 500 / 281.25;
        width: 100%;
        object-fit: cover;
        object-position: center;
      "
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const props = defineProps<{
  base64: string;
  target: HTMLElement;
  close: () => void;
}>();

const className = ref("show-ani");
onMounted(() => {
  props.target.onmouseleave = () => {
    console.log(123);
    className.value = "hide-ani";
    setTimeout(() => {
      props.close();
    }, 300);
  };
});
</script>

<style lang="less" scoped>
.show-ani {
  animation: show 0.3s linear forwards;
}

.hide-ani {
  animation: hide 0.3s linear forwards;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes hide {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
