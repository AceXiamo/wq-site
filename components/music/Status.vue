<template>
  <div class="flex relative h-[20px] w-[20px]">
    <i
      v-if="status === 'repeat'"
      v-motion="bottomToTop()"
      class="i-iconamoon-playlist-repeat-list-fill text-[20px] absolute left-0 top-0"
    />
    <i
      v-if="status === 'repeat-one'"
      v-motion="bottomToTop()"
      class="i-iconamoon-playlist-repeat-song-fill text-[20px] absolute left-0 top-0"
    />
    <i
      v-if="status === 'shuffle'"
      v-motion="bottomToTop()"
      class="i-iconamoon-playlist-shuffle-fill text-[20px] absolute left-0 top-0"
    />
  </div>
</template>

<script lang="ts" setup>
import { MusicStatus, MUSIC_STATUS } from "~/store/music";

const props = withDefaults(
  defineProps<{
    status: MusicStatus;
  }>(),
  {
    status: MUSIC_STATUS[0],
  }
);
</script>
