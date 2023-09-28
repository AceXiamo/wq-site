<template>
  <div
    v-if="musicStore.current"
    v-motion="bottomToTop()"
    class="absolute left-0 bottom-0 h-[70px] right-0 dark:bg-indigo-900 dark:bg-opacity-10 bg-emerald-700 bg-opacity-10 p-[10px] flex items-center"
  >
    <div class="absolute left-0 h-full dark:bg-indigo-500 dark:bg-opacity-20 bg-emerald-600 bg-opacity-10 z-0" :style="{
      width: musicStore.current.progress + '%'
    }"></div>
    <Cover class="relative z-10" :url="musicStore.current.pid"></Cover>
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
        :status="musicStatus"
        @click="changeMusicStatus"
      ></MusicStatus>
      <MusicPlayItem></MusicPlayItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMusicStore } from "~/store/music";

const musicStore = useMusicStore();
const musicStatus = ref<MusicStatus>(MUSIC_STATUS[0]);

const changeMusicStatus = () => {
  musicStatus.value =
    MUSIC_STATUS[(MUSIC_STATUS.indexOf(musicStatus.value) + 1) % 3];
};
</script>
