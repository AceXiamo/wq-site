<template>
  <Head @change="(val: string) => {
    recordList?.loadData(val)
  }" v-motion="rightToLeft()"></Head>
  <RecordList ref="recordList"></RecordList>
  <div class="h-[30px]"></div>
</template>

<script setup lang="ts">
import RecordList from "./components/RecordList.vue";
import Head from "./components/Head.vue";
import { setTitle } from "~/utils/common";

const recordList = ref()

onMounted(() => {
  setTitle('录播')
})
</script>
