<template>
  <div class="flex flex-col w-full">
    <div class="flex items-end gap-[10px]">
      <div class="flex items-center gap-[10px]">
        <span>🗓️</span>
        <UBadge color="white" variant="solid" size="md">
          {{ currentY }}
        </UBadge>
        <UBadge color="white" variant="solid" size="md">
          {{ currentM }}
        </UBadge>
        <UButton
          icon="i-heroicons-chevron-down-20-solid"
          size="xs"
          variant="soft"
          color="orange"
        />
      </div>
    </div>

    <Disk></Disk>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import Disk from "./Disk.vue";

const now = dayjs();
const currentY = ref(now.format("YYYY"));
const currentM = ref(now.format("MM"));
</script>
