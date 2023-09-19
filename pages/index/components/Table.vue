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
            <UButton size="xs" variant="soft"> 下载 </UButton>
            <UButton size="xs" color="blue" variant="soft" @click="view(row)">
              预览
            </UButton>
          </div>
        </template>
      </UTable>
    </div>
    <div class="flex justify-start">
      <UPagination
        v-model="page"
        :page-count="pageNum"
        :total="data.size || 0"
      />
    </div>

    <ClientOnly>
      <VideoModal ref="videoModal" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { Record, RecordRes } from "~/server/api/cos/records.post";
import VideoModal from "./VideoModal.vue";
const videoModal = ref();

onMounted(() => {
  loadData();
});

const loading = ref<boolean>(true);
const page = ref(1);
const selected = ref<Record[]>([]);
const data = ref<RecordRes>({});
const his = ref<string[]>([]);
const number = ref<number>(0);
const pageNum = 10;
let lastFlag = true;

const columns = [
  {
    key: "title",
    label: "✨ Title",
  },
  {
    key: "begin",
    label: "⏰ Live Begin Time",
  },
  {
    key: "size",
    label: "Size",
  },
  {
    key: "actions",
  },
];

const loadData = () => {
  loading.value = true;
  const params: {
    next?: string;
  } = {};
  if (his.value) {
    params.next = his.value[his.value.length - 1];
  }
  useFetch("/api/cos/records", {
    method: "post",
    params,
  })
    .then((res) => {
      data.value = res.data.value!;
      if (!lastFlag) {
        number.value += data.value.items?.length || 0;
      } else {
        his.value.push(data.value.next!);
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const byte2GB = (byte: number) => {
  return (byte / 1024 / 1024 / 1024).toFixed(2) + "GB";
};

watch(page, (val, oldVal) => {
  lastFlag = val < oldVal;
  if (lastFlag) {
    number.value -= pageNum;
    his.value.pop();
  }
  loadData();
});

const view = (row: Record) => {
  if (row.key) {
    videoModal.value.show(row);
  }
};

defineExpose({
  data
});
</script>
