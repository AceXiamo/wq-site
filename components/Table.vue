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
            <UButton size="xs" variant="soft">下载</UButton>
            <UButton size="xs" color="blue" variant="soft" @click="view(row)">预览</UButton>

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

    <ClientOnly>
      <VideoModal ref="videoModal"></VideoModal>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { RecordsResult, Record,  records } from "@/api/live";

const regex = /\[(.*?)\]/g;
const videoModal = ref()

onMounted(() => {
  loadData();
});

const loading = ref<boolean>(true);
const page = ref(1);
const selected = ref<Record[]>([]);
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

const view = (row: Record) => {
  videoModal.value.show(row)
};
</script>
