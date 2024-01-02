<template>
  <div class="gap-[10px] h-[50px] px-[30px] flex items-end" v-motion="rightToLeft()">
    <div :class="[`w-[25px] h-[25px] rounded-md bg-emerald-500 grid place-content-center`, `dark:bg-blue-700`]">
      <i class="i-heroicons-rectangle-group text-[14px] text-white" />
    </div>
    <div
      :class="[
        `px-[5px] h-[25px] rounded-md bg-emerald-500 bg-opacity-10 grid place-content-center cursor-default`,
        `dark:bg-blue-700 dark:bg-opacity-30`,
      ]"
    >
      <span class="text-[12px] text-emerald-500 dark:text-blue-700">{{ year }}</span>
    </div>
    <div
      :class="[
        `px-[5px] h-[25px] rounded-md bg-emerald-500 bg-opacity-10 grid place-content-center cursor-default`,
        `dark:bg-blue-700 dark:bg-opacity-30`,
      ]"
    >
      <span class="text-[12px] text-emerald-500 dark:text-blue-700">{{ month }}</span>
    </div>

    <div
      :class="[
        `w-[25px] h-[25px] rounded-md bg-emerald-500 dark:bg-blue-700 grid place-content-center`,
        year === lower[0] && month === lower[1] ? `grayscale-[1] cursor-no-drop` : `hover:bg-opacity-70 cursor-pointer`,
      ]"
      @click="clickHandle(-1)"
    >
      <i class="i-heroicons-chevron-left-20-solid text-[14px] text-white" />
    </div>

    <div
      :class="[
        `w-[25px] h-[25px] rounded-md bg-emerald-500 dark:bg-blue-700 grid place-content-center`,
        year === upper[0] && month === upper[1] ? `grayscale-[1] cursor-no-drop` : `hover:bg-opacity-70 cursor-pointer`,
      ]"
      @click="clickHandle(1)"
    >
      <i class="i-heroicons-chevron-right-20-solid text-[14px] text-white" />
    </div>

    <div class="text-[12px] text-gray-300 dark:text-gray-600">( 仅保存近两月 )</div>
  </div>
  <RecordList ref="recordList"></RecordList>
  <div class="h-[30px]"></div>
</template>

<script setup lang="ts">
import { setTitle } from '~/utils/common';
import dayjs from 'dayjs';

const recordList = ref();
const now = dayjs(),
  lower = [now.subtract(1, 'month').format('YYYY'), now.subtract(1, 'month').format('MM')],
  upper = [now.format('YYYY'), now.format('MM')];
const year = ref<string>(now.format('YYYY'));
const month = ref<string>(now.format('MM'));

const clickHandle = (num: number) => {
  if (num === 1) {
    if (year.value === upper[0] && month.value === upper[1]) return;
  } else if (num === -1) {
    if (year.value === lower[0] && month.value === lower[1]) return;
  }

  const date = dayjs(`${year.value}-${month.value}`).add(num, 'month');
  year.value = date.format('YYYY');
  month.value = date.format('MM');
  recordList.value?.loadData(year.value + '-' + month.value);
};

onMounted(() => {
  setTitle('✨ 小猫 の 录播');
});
</script>
