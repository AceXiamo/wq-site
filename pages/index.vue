<template>
  <div class="flex flex-col p-[20px] gap-[20px] min-h-screen">
    <div class="flex gap-[20px] items-center">
      <span>🍂</span>
      <div class="ml-auto">
        <ColorMode></ColorMode>
      </div>
    </div>

    <!-- <div class="text-[25px]">Home</div> -->
    <div class="flex gap-[20px] flex-auto">
      <div class="w-max">
        <UCard>
          <Nav></Nav>
        </UCard>
        <Disk></Disk>
      </div>
      <ClientOnly>
        <Table class="flex-auto"></Table>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import Wave from "@/assets/js/wave";

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
