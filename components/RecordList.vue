<template>
  <div
    class="flex flex-col min-h-[100px] h-max rounded px-[30px]"
    id="list-container"
    v-auto-animate
    v-motion="rightToLeft()"
  >
    <div
      :class="[
        `flex items-center h-[110px] text-[14px] gap-[10px] border-b border-b-gray-100 py-[20px] relative snap-start`,
        `dark:border-b-gray-800`,
        `before:content-[''] before:absolute before:bottom-0 before:h-[1px] before:left-0 before:w-0 before:bg-green-500`,
        `before:transition-all before:duration-500`,
        `hover:before:w-[100%]`,
      ]"
      v-for="(item, index) in items"
      :key="index"
    >
      <div
        :class="[
          `h-full flex-none aspect-[500/281.25] bg-cover rounded-md relative`,
          `opacity-100 rounded-sm`,
          `border-2 border-gray-300 dark:border-gray-100`,
        ]"
        :style="{
          backgroundImage: `url(https://image.qwq.link/images/2023/08/15/twitter_8528co28_20230814-111456_1691045735935180800_photo.jpg)`,
        }"
      ></div>

      <div class="flex flex-col gap-[5px]">
        <span>🎥【 {{ item.title }} 】</span>
        <div class="flex gap-[10px]">
          <span class="text-gray-400 text-[11px]">Time:</span>
          <span class="text-gray-400 text-[11px]">{{ item.begin }}</span>
        </div>
        <div class="flex gap-[10px]">
          <span class="text-gray-400 text-[11px]">Size:</span>
          <span class="text-gray-400 text-[11px]">{{
            byte2GB(item.size!)
          }}</span>
        </div>
      </div>
      <div class="ml-auto flex items-end gap-[10px] h-full">
        <UButton size="xs" variant="soft" @click="download(item)">
          <i class="i-heroicons-arrow-down-circle" />
          <span class="translate-y-[1px]">下载</span>
        </UButton>
        <UButton size="xs" color="blue" variant="soft" @click="view(item)">
          <i class="i-heroicons-play-circle" />
          <span class="translate-y-[1px]">预览</span>
        </UButton>
      </div>
    </div>
  </div>
  <ClientOnly>
    <VideoModal ref="videoModal" />
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Record } from "~/server/api/cos/records.post";
import { FILE_DOMAIN } from "~/utils/constants";
import Loading from "~/framework/Loading";
import dayjs from "dayjs";

const videoModal = ref();
const items = ref<Record[]>([]);

onMounted(() => {
  loadData();
});

const loadData = (date: string = dayjs().format("YYYY-MM")) => {
  items.value = [];
  const loading = Loading.show({
    element: "#list-container",
    hasBg: false,
  });
  const params: {
    prefix?: string;
  } = {
    prefix: "[" + date,
  };
  useFetch("/api/cos/records", {
    method: "post",
    params,
  }).then(res => {
    setTimeout(() => {
      items.value = res.data.value?.items || [];
      loading.close();
    }, 500);
  });
};

const byte2GB = (byte: number) => {
  return (byte / 1024 / 1024 / 1024).toFixed(2) + "GB";
};

const view = (row: Record) => {
  if (row.key) {
    videoModal.value.show(row);
  }
};

const download = (row: Record) => {
  const url = FILE_DOMAIN + row.key!;
  const a = document.createElement("a");
  a.href = url;
  a.download = url;
  a.click();
};

defineExpose({
  loadData,
});
</script>
