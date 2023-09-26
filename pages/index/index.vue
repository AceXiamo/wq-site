<template>
  <div class="relative h-screen overflow-auto flex justify-center">
    <div
      :class="[
        `sticky top-0 w-[300px] mt-[100px] h-[80%] rounded-l-lg p-[40px]`,
        `bg-[#EBF2ED]`,
        `dark:bg-[#101224]`,
      ]"
    >
      <WQAvatar :size="50" v-motion="leftMontionConfig()" />
      <Menu></Menu>
    </div>
    <div
      :class="[
        `w-[700px] h-max my-[100px] rounded-r-lg bg-[#F6FAF8] flex flex-col`,
        `dark:bg-[#161829]`,
        `sticky top-0`,
      ]"
    >
      <RecordList></RecordList>
    </div>
    <div class="w-max h-max sticky top-[10px] mt-[100px] ml-[10px]">
      <ColorMode></ColorMode>
    </div>
  </div>
</template>

<script setup lang="ts">
import WQAvatar from "./components/WQAvatar.vue";
import RecordList from "./components/RecordList.vue";
</script>
