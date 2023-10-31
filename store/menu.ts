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
        value: "index",
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
        value: "about",
        icon: "i-heroicons-puzzle-piece-solid",
        title: "关于本站",
        url: "/about",
        delay: 600,
      },
      {
        value: "more",
        icon: "i-heroicons-sun-20-solid",
        title: "More",
        url: "dev",
        delay: 700,
      },
    ]);

    const active = ref<string>("index");
    const fixedOpen = ref<boolean>(false);

    return {
      menus,
      active,
      fixedOpen
    };
  }
);
