<template>
  <div class="flex flex-col p-[20px] gap-[20px] min-h-screen">
    <div class="flex gap-[20px] items-center">
      <WQAvatar />
      <div class="ml-auto">
        <ColorMode />
      </div>
    </div>
    <div class="flex gap-[20px] flex-auto">
      <div class="w-[240px]">
        <UCard>
          <Nav :liveRecCount="table?.data.size" />
        </UCard>
        <Disk />
      </div>
      <!-- <Table class="flex-auto" ref="table" /> -->
      <div
        class="flex-auto flex flex-col items-center"
      >
        <div class="flex-auto h-0 overflow-auto flex flex-col gap-[20px] bg-red">
          <div class="flex gap-[50px]" v-for="index of 5" :key="index">
            <WQAvatar />
            <div
              class="w-[600px] bg-slate-100 dark:bg-slate-800 rounded-md p-[20px]"
            >
              <div class="">
                <span class="text-[13px]">
                  【重大通知】
                  距离林晚秋小姐的生日会还有不到一个月的时间了，时间过得好快呀，好想和呆秋卟一起过生日~以下是相关事项通知：<br />
                  ❤关于实体礼物邮寄❤ <br />
                  如果有想邮寄实体礼物的，可以邮寄到代收点：<br />
                  广东省惠州市龙门县塔新路三巷八号 联系手机:13249362470<br />
                  请在9.31号前发出，生日会当天也会直播开箱，一起看看收到的大家送的生日礼物~<br />
                  ❤关于棉花糖收集❤<br />
                  呆秋卟有想对秋秋说的话都可以写到里面，秋秋都能看到的，也会在生日会当天和大家一起念棉花糖，希望大家可以踊跃投稿！<br />
                  投稿地址：https://2some.one/@天才猪猪林晚秋wq<br />
                  还可以扫二维码或者发送到这个邮箱 3493259173170099@2some.one<br />
                  （提醒：只支持文字投稿，图片是收不到的[眠眠兔_偷看]）
                </span>
              </div>
              <div class="grid grid-cols-3 gap-[20px] mt-[20px]">
                <div
                  class="aspect-[1/1] rounded-md overflow-hidden"
                  v-for="index of 3"
                >
                  <img
                    class="w-full h-full object-cover"
                    src="https://image.qwq.link/images/2023/08/30/twitter_takesinobu_20230815-010318_1691254202767667200_photo.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WQAvatar from "./components/WQAvatar.vue";
import ColorMode from "./components/ColorMode.vue";
import Nav from "./components/Nav.vue";
import Disk from "./components/Disk.vue";
import Table from "./components/Table.vue";
import Wave from "@/assets/js/wave";

const table = ref();
onMounted(() => {
  const wave = new Wave("body", {
    number: 2,
    smooth: 50,
    velocity: 1,
    height: 0,
    border: {
      show: false,
    },
    opacity: 0.04,
    colors: ["#0ea5e9", "#4f46e5"],
  });
  wave.animate();
});
</script>
