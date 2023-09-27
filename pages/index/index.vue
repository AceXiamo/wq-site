<template>
  <Head v-motion="rightToLeft()"></Head>
  <RecordList></RecordList>
  <div class="h-[30px]"></div>
</template>

<script setup lang="ts">
import RecordList from "./components/RecordList.vue";
import Head from "./components/Head.vue";
</script>
