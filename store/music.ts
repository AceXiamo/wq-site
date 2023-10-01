import { defineStore } from "pinia";
import { Music } from "~/server/api/music/list.post";
import Player from "~/utils/player";

export type MusicStatus = "repeat" | "repeat-one" | "shuffle";
export const MUSIC_STATUS: MusicStatus[] = ["repeat", "repeat-one", "shuffle"];

export const useMusicStore = defineStore("musics", () => {
  const musics = ref<Music[]>([]);
  const current = ref<Music | null>(null);
  const player = new Player();
  const playStatus = ref<MusicStatus>("repeat");

  const timeUpdate = (currentTime: number, duration: number) => {
    current.value!.progress = (currentTime / duration) * 100;
    current.value!.duration = duration - currentTime;

    if (duration > 0 && current.value!.duration <= 0) {
      let next;
      if (playStatus.value === "repeat") {
        let index = musics.value.indexOf(current.value!);
        next = musics.value[index + 1] || musics.value[0];
      } else if (playStatus.value === "shuffle") {
        let index = Math.floor(Math.random() * musics.value.length);
        next = musics.value[index];
      } else {
        next = current.value;
      }
      play(next!);
    }
  };

  const play = (item: Music) => {
    musics.value.forEach(music => {
      music.play = false;
    });

    current.value = item;
    current.value.duration = 0;
    current.value.pause = false;
    current.value.progress = 0;

    player.init(current.value.mid!);
    player.timeUpdate = timeUpdate;

    player.onPause = () => {
      current.value!.pause = true;
    };

    player.onPlay = () => {
      current.value!.pause = false;
    };
  };

  const pauseHandle = () => {
    if (current.value!.pause) {
      player.play();
    } else {
      player.pause();
    }
  };

  return {
    musics,
    current,
    timeUpdate,
    play,
    player,
    pauseHandle,
    playStatus
  };
});
