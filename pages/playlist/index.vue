<template>
  <Head v-motion="rightToLeft()"></Head>
  <div
    class="flex flex-col min-h-[100px] h-max px-[30px] relative mt-[10px]"
    id="music-container"
    v-auto-animate
    v-motion="rightToLeft()"
  >
    <div
      :class="[
        `flex items-center text-[14px] gap-[15px] py-[15px] relative snap-start transition-all duration-150 px-[10px] cursor-pointer`,
        `dark:hover:bg-blue-900 dark:hover:bg-opacity-10`,
        `hover:bg-green-800 hover:bg-opacity-10`,
      ]"
      v-for="(item, index) in musicStore.musics"
      :key="index"
      @click="musicStore.play(item)"
    >
      <div class="flex gap-[20px]">
        <span class="text-[14px] font-bold">{{ item.title }}</span>
        <span class="text-[13px] text-gray-500 mt-auto">{{
          item.artist && item.artist.join(" & ")
        }}</span>
      </div>
      <div class="flex">
        <div
          class="text-[12px] bg-yellow-600 bg-opacity-20 text-yellow-600 p-[2px_4px] rounded-sm flex items-center gap-[3px]"
          v-if="scMusics.includes(item.title!)"
        >
          <span class="text-[11px]">💰</span>
          <span>Super Chat</span>
        </div>
      </div>

      <div class="ml-auto">
        <div
          class="flex"
          v-if="musicStore.current?.title === item.title"
          v-motion="musicLine()"
        >
          <span class="text-gray-500 text-[10px]">{{
            timeFormat(musicStore.current?.duration || 0)
          }}</span>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 h-[1px]">
        <div
          class="absolute h-full left-0 w-full bg-gray-200 dark:bg-gray-800"
        ></div>
        <div
          class="bg-green-500 absolute left-0 h-full flex items-center transition-all duration-10"
          :style="{ width: `${musicStore.current?.progress}%` }"
          v-if="musicStore.current?.title === item.title"
          v-motion="musicLine()"
        >
          <div
            class="run-dot bg-green-500 h-[7px] w-[7px] rounded-full absolute right-0 translate-x-[50%]"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-[30px]"></div>
</template>

<script lang="ts" setup>
import Head from "./components/Head.vue";
import Loading from "~/framework/Loading";
import { useMusicStore } from "~/store/music";
import { setTitle } from "~/utils/common";

const musicStore = useMusicStore();
const scMusics = [`爱不会绝迹`];

onMounted(() => {
  if (!musicStore.musics || musicStore.musics.length === 0) load();
  setTitle('歌单')
});

const load = () => {
  const loading = Loading.show({
    element: "#music-container",
    hasBg: false,
  });
  useFetch("/api/music/list", {
    method: "post",
  })
    .then(res => {
      musicStore.musics = res.data.value || [];
    })
    .finally(() => {
      loading.close();
    });
};

const timeFormat = (duration: number) => {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration % 60);
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
};

onBeforeRouteLeave(() => {});
</script>

<style lang="less" scoped>
.run-dot::after,
.run-dot::before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2ec55e;
  border-radius: 100%;
}

.run-dot::before {
  animation: dotAni 3s infinite;
}

.run-dot::after {
  animation: dotAni 3s infinite;
  animation-delay: 1.5s;
}

@keyframes dotAni {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
