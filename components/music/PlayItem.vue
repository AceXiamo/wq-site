<template>
  <div class="flex gap-[5px] items-center">
    <i class="i-heroicons-arrow-left-circle-solid text-[20px]" @click="last" />
    <div class="relative h-[30px] w-[30px]" @click="musicStore.pauseHandle()">
      <i
        v-if="!musicStore.current?.pause"
        class="i-heroicons-pause-circle-20-solid text-[30px] absolute top-0"
      />
      <i
        v-else
        class="i-heroicons-play-circle-20-solid text-[30px] absolute top-0"
      />
    </div>
    <i class="i-heroicons-arrow-right-circle-solid text-[20px]" @click="next" />
  </div>
</template>

<script lang="ts" setup>
import { useMusicStore } from "~/store/music";

const musicStore = useMusicStore();

const last = () => {
  let index = musicStore.musics.indexOf(musicStore.current!);
  if (index === 0) {
    musicStore.current = musicStore.musics[musicStore.musics.length - 1];
  } else {
    musicStore.current =
      musicStore.musics[musicStore.musics.indexOf(musicStore.current!) - 1];
  }

  musicStore.play(musicStore.current);
};

const next = () => {
  let index = musicStore.musics.indexOf(musicStore.current!);
  if (index === musicStore.musics.length - 1) {
    musicStore.current = musicStore.musics[0];
  } else {
    musicStore.current =
      musicStore.musics[musicStore.musics.indexOf(musicStore.current!) + 1];
  }

  musicStore.play(musicStore.current);
};
</script>
