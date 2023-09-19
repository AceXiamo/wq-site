<template>
  <div class="flex flex-col p-[20px] gap-[20px] min-h-screen">
    <div class="flex gap-[20px] items-center">
      <WQAvatar />
      <div class="ml-auto">
        <ColorMode />
      </div>
    </div>

    <!-- <div class="text-[25px]">Home</div> -->
    <div class="flex gap-[20px] flex-auto">
      <div class="w-max">
        <UCard>
          <Nav :liveRecCount="table?.data.size" />
        </UCard>
        <Disk />
      </div>
      <Table class="flex-auto" ref="table" />
    </div>
  </div>
</template>

<script setup lang="ts">
import WQAvatar from "./components/WQAvatar.vue";
import ColorMode from "./components/ColorMode.vue";
import Nav from "./components/Nav.vue";
import Disk from "./components/Disk.vue";
import Table from "./components/Table.vue";
import Wave from "@/assets/js/wave";

const table = ref()
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
