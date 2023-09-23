<template>
  <UModal
    v-model="modalShow"
    :ui="{
      base: 'h-full flex flex-col bg-red modal_1000',
      rounded: '',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      body: {
        base: 'grow',
      },
    }"
  >
    <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex flex-col">
          <span class="text-[22px]">🎥</span>
          <div class="flex items-end mt-[10px]">
            <div class="text-[12px] text-gray-500 w-[50px]">Title:</div>
            <span class="text-[14px]">{{ title }}</span>
          </div>

          <div class="flex items-end mt-[5px]">
            <div class="text-[12px] text-gray-500 w-[50px]">Begin:</div>
            <span class="text-[12px] text-gray-500">{{ begin }}</span>
          </div>
        </div>
      </template>
      <div class="w-full aspect-[500/281.25]">
        <video id="videoElement" class="w-full h-full" controls></video>
      </div>
      <template #footer>
        <!-- Content -->
      </template>
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import mpegts from "mpegts.js";
import { Record } from "~/server/api/cos/records.post";
import { FILE_DOMAIN } from "~/utils/constants";

const modalShow = ref<boolean>(false);
const title = ref<string>("");
const begin = ref<string>("");

const show = (row: Record) => {
  modalShow.value = true;
  title.value = row.title!;
  begin.value = row.begin!;

  nextTick(() => {
    if (mpegts.getFeatureList().mseLivePlayback) {
      let videoElement: any = document.querySelector("#videoElement");
      let player = mpegts.createPlayer({
        type: "flv", // could also be mpegts, m2ts, flv
        isLive: false,
        url: FILE_DOMAIN + row.key!,
        // url: `http://localhost:8080/file/out.flv`
      });

      player.attachMediaElement(videoElement);
      player.load();
      player.play();
    }
  });
};

defineExpose({
  show,
});
</script>

<style>
.modal_1000 {
  width: 1000px;
  max-width: unset !important;
}
</style>
