<template>
  <div
    id="list-container"
    class="flex flex-col w-[600px] gap-[20px] flex-none h-full overflow-y-auto hide-scroll snap-y relative"
  >
    <div class="flex flex-col h-max rounded pb-[10px]">
      <div
        :class="[
          `flex items-center text-[14px] gap-[10px] px-[10px] border-b border-b-gray-100 py-[10px] relative snap-start`,
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
            `h-full aspect-[500/281.25] dark:bg-white bg-black bg-opacity-[.15] relative`,
            ` opacity-100 rounded-md`,
            `after:bg-[url(https://image.qwq.link/images/2023/08/30/twitter_jiuyesang_20230829-132638_1696514699440066932_photo.jpg)] after:bg-cover`,
            `after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bottom-[2px] after:right-[2px] after:rounded-md`,
          ]"
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
  </div>
  <ClientOnly>
    <VideoModal ref="videoModal" />
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Record } from "~/server/api/cos/records.post";
import VideoModal from "./VideoModal.vue";
import { FILE_DOMAIN } from "~/utils/constants";
import VideoCover from "~/utils/VideoCover";
import Loading from "~/utils/Loading";

const videoModal = ref();
const items = ref<Record[]>([]);

onMounted(() => {
  loadData();
});

const loadData = () => {
  const loading = Loading.show({
    element: "#list-container",
  });
  const params: {
    prefix?: string;
  } = {
    prefix: "[2023-09",
  };
  useFetch("/api/cos/records", {
    method: "post",
    params,
  })
    .then(res => {
      items.value = [...items.value, ...(res.data.value?.items || [])];
    })
    .finally(() => {
      loading.close();
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

const hover = async (e: MouseEvent, row: Record) => {
  const target = e.target as HTMLElement;
  VideoCover.showCover({
    // url: FILE_DOMAIN + row.key!,
    url: `https://file.qwq.link/video/twitter_%E3%82%90%E3%81%9F%E3%81%BF%20%EF%BC%8F%20itami%28%40itami_gomi%29_20230911-145840_1701248900055638104_video_1.mp4`,
    target,
  });
  // VideoCover.getCover(
  //   "https://file.qwq.link/video/twitter_%E3%82%90%E3%81%9F%E3%81%BF%20%EF%BC%8F%20itami%28%40itami_gomi%29_20230911-145840_1701248900055638104_video_1.mp4"
  // ).then(res => {
  //   console.log(res);
  // });
};
</script>
