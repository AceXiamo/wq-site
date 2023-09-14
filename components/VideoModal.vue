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
            <div class="text-[12px] text-gray-500 w-[40px]">Title:</div>
            <span class="text-[14px]">{{ title }}</span>
          </div>

          <div class="flex items-end mt-[5px]">
            <div class="text-[12px] text-gray-500 w-[40px]">Begin:</div>
            <span class="text-[12px] text-gray-500">{{ begin }}</span>
          </div>
          <div class="flex items-end">
            <div class="text-[12px] text-gray-500 w-[40px]">End:</div>
            <span class="text-[12px] text-gray-500">{{ end }}</span>
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
import { ref, onMounted } from 'vue'
import mpegts from 'mpegts.js'
import { Record } from "@/api/live";

const modalShow = ref<boolean>(false)
const title = ref<string>('')
const begin = ref<string>('')
const end = ref<string>('')

const host = 'https://file.qwq.link/'
const show = (row: Record) => {
  modalShow.value = true
  title.value = row.title!
  begin.value = row.begin!
  end.value = row.end!

  nextTick(() => {
    if (mpegts.getFeatureList().mseLivePlayback) {
      let videoElement: any = document.querySelector('#videoElement')
      let player = mpegts.createPlayer({
        type: 'flv', // could also be mpegts, m2ts, flv
        isLive: false,
        url: host + row.key,
      })

      player.attachMediaElement(videoElement)
      player.load()
      player.play()
    }
  })
}

defineExpose({
  show,
})
</script>

<style>
.modal_1000 {
  width: 1000px;
  max-width: unset !important;
}
</style>
