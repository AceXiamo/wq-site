<template>
  <TopBar />
  <div class="relative h-screen overflow-auto flex justify-center">
    <div
      :class="[
        `sticky top-0 w-[300px] mt-[100px] h-[80%] rounded-l-lg p-[40px] overflow-hidden`,
        `bg-[#EBF2ED]`,
        `dark:bg-[#101224]`,
        `max-md:hidden`,
      ]"
    >
      <WQAvatar :size="50" v-motion="leftMontionConfig()" />
      <Menu></Menu>
      <MusicPlayer></MusicPlayer>
    </div>

    <div
      :class="[
        `w-[700px] h-max my-[100px] rounded-r-lg bg-[#F6FAF8] flex flex-col`,
        `dark:bg-[#161829]`,
        `sticky top-0`,
        `max-md:rounded-lg`,
      ]"
    >
      <slot />
    </div>
    <div :class="[`w-max h-max sticky top-[10px] mt-[100px] ml-[10px]`, `max-md:hidden`]" v-auto-animate>
      <ColorMode></ColorMode>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { leftMontionConfig } from '~/utils/motions';
</script>
