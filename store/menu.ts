import { defineStore } from "pinia";

export type Menu = {
  value: string;
  icon: string;
  title: string;
  url: string;
  delay?: number;
};

export const useMenuStore = defineStore(
  "menu",
  () => {
    const menus = ref<Menu[]>([
      {
        value: "record",
        icon: "i-heroicons-video-camera",
        title: "小猫的录播",
        url: "/",
        delay: 200,
      },
      {
        value: "playlist",
        icon: "i-heroicons-musical-note-20-solid",
        title: "小猫的歌单",
        url: "/playlist",
        delay: 300,
      },
      {
        value: "bili",
        icon: "i-heroicons-sparkles-20-solid",
        title: "小猫的B站空间",
        url: "https://space.bilibili.com/2115353085",
        delay: 400,
      },
      {
        value: "bili",
        icon: "i-heroicons-film",
        title: "小猫的直播间",
        url: "https://live.bilibili.com/25081972",
        delay: 500,
      },
      {
        value: "more",
        icon: "i-heroicons-sun-20-solid",
        title: "More",
        url: "dev",
        delay: 600,
      },
    ]);

    const active = ref<string>("record");

    return {
      menus,
      active,
    };
  },
  {
    persist: {
      key: "menu",
    },
  }
);
