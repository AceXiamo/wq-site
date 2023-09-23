<template>
  <div class="flex flex-col p-[20px] gap-[20px] min-h-screen">
    <div class="flex gap-[20px] items-center">
      <WQAvatar />
      <span class="ml-[20px] text-[30px]">Neko's Record Site</span>
      <div class="ml-auto">
        <ColorMode />
      </div>
    </div>
    <div class="flex flex-auto h-0 gap-[50px]">
      <div class="flex-1"></div>
      <RecordList></RecordList>
      <div class="flex-1">
        <Calendar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WQAvatar from "./components/WQAvatar.vue";
import ColorMode from "./components/ColorMode.vue";
import Calendar from "./components/Calendar.vue";
import Wave from "@/assets/js/wave";
import RecordList from "./components/RecordList.vue";

onMounted(() => {
  const wave = new Wave("body", {
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
});

</script>
