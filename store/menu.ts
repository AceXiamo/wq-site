import { defineStore } from "pinia";

type Menu = {
  value: string;
  icon: string;
  title: string;
  delay?: number;
};

export const useMenuStore = defineStore("menu", () => {
  const menus = ref<Menu[]>([
    {
      value: "record",
      icon: "i-heroicons-video-camera",
      title: "录播",
      delay: 200,
    },
    {
      value: "playlist",
      icon: "i-heroicons-musical-note-20-solid",
      title: "歌单",
      delay: 300,
    },
  ]);

  const active = ref<string>("record");

  return {
    menus,
    active,
  };
});
