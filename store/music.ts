import { defineStore } from "pinia";
import { Music } from "~/server/api/music/list.post";
import Player from "~/utils/player";

export const useMusicStore = defineStore("musics", () => {
  const musics = ref<Music[]>([]);
  const current = ref<Music | null>(null);
  const player = new Player();

  const timeUpdate = (currentTime: number, duration: number) => {
    current.value!.progress = (currentTime / duration) * 100;
    current.value!.duration = duration - currentTime;

    if (duration > 0 && current.value!.duration <= 0) {
      current.value!.duration = 0;
      current.value!.progress = 0;

      let index = musics.value.indexOf(current.value!);
      let next = musics.value[index + 1] || musics.value[0];
      play(next);
    }
  };

  const play = (item: Music) => {
    musics.value.forEach(music => {
      music.play = false;
    });

    current.value = item;
    current.value.duration = 0;
    current.value.pause = false;

    player.init(current.value.mid!);
    player.timeUpdate = timeUpdate;

    player.onPause = () => {
      current.value!.pause = true;
    }

    player.onPlay = () => {
      current.value!.pause = false;
    }
  };

  return {
    musics,
    current,
    timeUpdate,
    play,
    player
  };
});
