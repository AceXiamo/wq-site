<template>
  <div class="gap-[10px] h-[50px] px-[30px] flex items-end">
    <div
      class="w-[25px] h-[25px] rounded-md bg-emerald-500 grid place-content-center"
    >
      <i class="i-heroicons-rectangle-group text-[14px] text-white" />
    </div>

    <div
      class="px-[5px] h-[25px] rounded-md bg-emerald-500 bg-opacity-10 grid place-content-center cursor-default"
    >
      <span class="text-[12px] text-emerald-500">{{ year }}</span>
    </div>

    <div
      class="w-[25px] h-[25px] rounded-md bg-emerald-500 bg-opacity-10 grid place-content-center cursor-default"
    >
      <span class="text-[12px] text-emerald-500">{{ month }}</span>
    </div>

    <div
      :class="[
        `w-[25px] h-[25px] rounded-md bg-emerald-500 grid place-content-center`,
        year === lower[0] && month === lower[1]
          ? `grayscale-[1] cursor-no-drop`
          : `hover:bg-opacity-70 cursor-pointer`,
      ]"
      @click="clickHandle(-1)"
    >
      <i class="i-heroicons-chevron-left-20-solid text-[14px] text-white" />
    </div>

    <div
      :class="[
        `w-[25px] h-[25px] rounded-md bg-emerald-500 grid place-content-center`,
        year === upper[0] && month === upper[1]
          ? `grayscale-[1] cursor-no-drop`
          : `hover:bg-opacity-70 cursor-pointer`,
      ]"
      @click="clickHandle(1)"
    >
      <i class="i-heroicons-chevron-right-20-solid text-[14px] text-white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

const now = dayjs(),
  lower = ["2023", "09"],
  upper = [now.format("YYYY"), now.format("MM")];
const year = ref<string>(now.format("YYYY"));
const month = ref<string>(now.format("MM"));

const emits = defineEmits(["change"]);

const clickHandle = (num: number) => {
  const date = dayjs(`${year.value}-${month.value}`).add(num, "month");
  year.value = date.format("YYYY");
  month.value = date.format("MM");
  emits("change", year.value + "-" + month.value);
};
</script>
