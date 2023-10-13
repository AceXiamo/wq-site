<template>
  <div v-motion="rightToLeft()">
    <div class="gap-[10px] h-[50px] px-[30px] flex items-end">
      <div class="text-[20px] font-bold">🌟 关于本站</div>
    </div>

    <div class="flex flex-col gap-[15px] px-[30px] my-[20px]">
      <WQAvatar />
      <div class="flex flex-col gap-[5px] mt-[20px]">
        <div class="text-gray-500">这里是天才猫猫林晚秋wq的站点喵~</div>
      </div>
      <div class="flex flex-col gap-[5px]">
        <div class="text-gray-500 text-[13px] flex gap-[5px]">
          <div>1️⃣</div>
          <span>每天的录播会在次日的凌晨四点进行同步</span>
        </div>
        <div class="text-gray-500 text-[13px] flex gap-[5px]">
          <div>2️⃣</div>
          <span
            >录播暂时保存至了腾讯云对象存储，流量由服务器中转，理论上行速率大概在
            4MB/s，受限于运营商，香港服务器的带宽可能会跑不满 🥲</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
