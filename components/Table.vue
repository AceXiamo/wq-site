<template>
  <div class="flex flex-col gap-[20px]">
    <div
      class="bg-[#F3F4F6] bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-20 rounded-md"
    >
      <UTable
        v-model="selected"
        :columns="columns"
        :rows="data.items"
        :loading="loading"
        @select="select"
        :loading-state="{
          icon: 'i-heroicons-arrow-path-20-solid',
          label: 'Loading...',
        }"
      >
        <template #size-data="{ row }">
          <span>{{ byte2GB(row.size || 0) }}</span>
        </template>
        <template #actions-data="{ row }">
          <div class="flex gap-[10px]">
            <UButton size="xs" variant="soft">下载</UButton>
            <UButton size="xs" color="blue" variant="soft">预览</UButton>

            <UPopover>
              <UButton size="xs" color="red" variant="soft">删除</UButton>
              <template #panel>
                <div class="w-[200px] p-[10px]">
                  <div class="flex gap-[5px] text-[13px] items-center">
                    <UIcon name="i-heroicons-question-mark-circle" />
                    <span>确认删除?</span>
                  </div>
                  <div class="flex justify-end mt-[10px]">
                    <UButton size="xs" color="red">确 认</UButton>
                  </div>
                </div>
              </template>
            </UPopover>
          </div>
        </template>
      </UTable>
    </div>
    <div class="flex justify-start">
      <UPagination v-model="page" :page-count="10" :total="data.size || 0" />
    </div>

    <div class="bg-white w-max">
      <video id="videoElement" class="w-[500px]" controls></video>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RecordsResult, records } from "@/api/live";
import mpegts from "mpegts.js";

const regex = /\[(.*?)\]/g;

onMounted(() => {
  loadData();
  if (mpegts.getFeatureList().mseLivePlayback) {
    let videoElement: any = document.getElementById("videoElement");
    let player = mpegts.createPlayer({
      type: "flv", // could also be mpegts, m2ts, flv
      isLive: false,
      url: "https://file.qwq.link/wq/live/[2023-09-13 20:57:19.flv~2023-09-13 23:11:19.flv] [⭐小猫又活了一天⭐].flv",
    });
    player.attachMediaElement(videoElement);
    player.load();
    player.play();
  }
});

type Item = {
  id: number;
  title: string;
  begin: string;
  end: string;
};

const loading = ref<boolean>(true);
const page = ref(1);
const selected = ref<Item[]>([]);
const data = ref<RecordsResult>({});
const his = ref<string[]>([]);

const columns = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "begin",
    label: "Live Begin Time",
  },
  {
    key: "end",
    label: "Live End Time",
  },
  {
    key: "size",
    label: "Size",
  },
  {
    key: "actions",
  },
];

function select(row: Item) {
  const index = selected.value.findIndex((item: Item) => item.id === row.id);
  if (index === -1) {
    selected.value.push(row);
  } else {
    selected.value.splice(index, 1);
  }
}

const loadData = () => {
  loading.value = true;
  records(his.value[his.value.length - 1])
    .then((res) => {
      data.value = res.data.value;
      data.value.items?.forEach((item) => {
        item.begin = "-";
        item.end = "-";
        item.title = "-";

        const match = item.key?.match(regex);
        if (match) {
          const [begin, end] = match[0].replace(/\[|\]/g, "").split("~");
          item.begin = begin;
          item.end = end;
          item.title = match[1].replace(/\[|\]/g, "");
        }
      });
      data.value.has && his.value.push(data.value.next!);
    })
    .finally(() => {
      loading.value = false;
    });
};

const byte2GB = (byte: number) => {
  return (byte / 1024 / 1024 / 1024).toFixed(2) + "GB";
};

watch(page, (val, oldVal) => {
  if (val < oldVal) {
    his.value.pop();
  }
  loadData();
});
</script>
