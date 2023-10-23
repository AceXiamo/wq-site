<template>
  <div v-motion="rightToLeft()">
    <div class="flex flex-col gap-[15px] px-[30px] my-[20px]">
      <div class="flex flex-col gap-[5px] mt-[20px]">
        <div class="text-[#333] dark:text-white text-[20px] font-bold">🌟 这里是天才猫猫林晚秋wq的站点喵~</div>
      </div>

      <div class="flex flex-col gap-[5px]">
        <div class="text-[#333] font-bold dark:text-white">关于录播</div>
        <div class="text-gray-500 text-[13px] flex gap-[5px]">
          <div>1️⃣</div>
          <span>每天的录播会在次日的凌晨四点进行同步</span>
        </div>
        <div class="text-gray-500 text-[13px] flex gap-[5px]">
          <div>2️⃣</div>
          <span
            >录播暂时保存在腾讯云对象存储，流量由服务器中转，理论上行速率大概在
            4MB/s，受限于运营商，香港服务器的带宽可能会跑不满 🥲</span
          >
        </div>
      </div>
      <div class="h-[2px] bg-gray-200 dark:bg-gray-700"></div>
      <div class="flex flex-col gap-[10px]">
        <div class="text-[#333] font-bold dark:text-white">
          <span>Repo commits</span>
          <span class="text-[12px] ml-[10px] text-gray-400">(最近三十条)</span>
        </div>
        <div class="flex flex-col gap-[5px]" v-auto-animate>
          <div
            class="flex flex-col gap-[5px] bg-gray-400 bg-opacity-10 rounded-md p-[6px_10px]"
            v-for="(item, index) in commits"
            :key="index"
          >
            <div class="font-bold">
              <span class="text-[#333] text-[12px] dark:text-white">{{ item.message }}</span>
            </div>
            <div class="flex items-center gap-[5px]">
              <img :src="item.auth.avatar" class="w-[20px] h-[20px] object-cover rounded-full" />
              <div class="flex gap-[5px] items-center">
                <span class="text-[12px] font-bold text-[#333] dark:text-white">{{ item.auth.name }}</span>
                <span class="text-[10px] text-gray-400">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CommitHistoryItem } from "~/server/api/github/commit.post";
import Request from "~/utils/request";
import { useGithubStore } from "~/store/github";
import { setTitle } from "~/utils/common";

const githubStore = useGithubStore()
let commits = ref<CommitHistoryItem[]>([]);

onMounted(() => {
  setTitle(`🐾 About`);
  
  if (githubStore.commits && githubStore.commits.length > 0) {
    commits.value = githubStore.commits;
    return;
  }
  Request.post({ url: `/api/github/commit` }).then((res: CommitHistoryItem[]) => {
    commits.value = res;
    githubStore.commits = res;
  });
});
</script>
