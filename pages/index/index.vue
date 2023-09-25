<template>
  <div class="flex flex-col p-[20px] gap-[20px] min-h-screen">
    <div class="flex gap-[20px] items-center">
      <WQAvatar />
      <span class="ml-[20px] text-[30px]">Neko's Record Site</span>
      <div class="ml-auto">
        <ColorMode />
      </div>
    </div>
    <div class="flex flex-auto h-0 gap-[20px]">
      <div
        class="flex-1 dark:bg-slate-800 bg-slate-100 dark:bg-opacity-20 grid place-content-center rounded-md"
      >
        <div class="gap-[10px] flex flex-col">
          <span class="text-[13px] text-gray-500">待定...</span>
        </div>
      </div>
      <RecordList></RecordList>
      <div class="flex-1">
        <!-- <Calendar /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WQAvatar from "./components/WQAvatar.vue";
import Calendar from "./components/Calendar.vue";
import Wave from "@/utils/wave"
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
