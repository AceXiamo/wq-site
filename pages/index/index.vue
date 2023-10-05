<template>
  <IndexHead @change="(val: string) => {
    recordList?.loadData(val)
  }" v-motion="rightToLeft()"></IndexHead>
  <RecordList ref="recordList"></RecordList>
  <div class="h-[30px]"></div>
</template>

<script setup lang="ts">
import { setTitle } from "~/utils/common";

const recordList = ref()

onMounted(() => {
  setTitle('录播')
})
</script>
