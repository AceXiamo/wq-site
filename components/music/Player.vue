<template>
  <div
    v-if="musicStore.current"
    v-motion="bottomToTop()"
    class="absolute left-0 bottom-0 h-[70px] right-0 dark:bg-indigo-900 dark:bg-opacity-10 bg-[#F7FAF8] bg-opacity-80 p-[10px] flex items-center"
  >
    <div
      class="absolute left-0 h-full dark:bg-indigo-500 dark:bg-opacity-20 bg-emerald-600 bg-opacity-10 z-0"
      :style="{
        width: musicStore.current.progress + '%',
      }"
    ></div>
    <Cover class="relative z-10" :url="`https://image.qwq.link/images/2023/08/30/WechatIMG146.png`"></Cover>
    <div class="flex flex-col gap-[5px] ml-[10px] relative z-10">
      <div class="text-[13px] font-bold truncate w-[95px] overflow-hidden">
        {{ musicStore.current.title }}
      </div>
      <div class="text-[12px] text-gray-500 truncate w-[95px] overflow-hidden">
        {{ musicStore.current.artist![0] }}
      </div>
    </div>

    <div class="flex ml-auto items-center gap-[10px] relative z-10">
      <MusicStatus
        :status="musicStore.playStatus"
        @click="changeMusicStatus"
      ></MusicStatus>
      <MusicPlayItem></MusicPlayItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMusicStore, MUSIC_STATUS } from "~/store/music";

const musicStore = useMusicStore();

const changeMusicStatus = () => {
  musicStore.playStatus =
    MUSIC_STATUS[(MUSIC_STATUS.indexOf(musicStore.playStatus) + 1) % 3];
};
</script>
