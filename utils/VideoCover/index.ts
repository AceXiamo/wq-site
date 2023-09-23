import { h, render } from "vue";
import VideoCover from "@/utils/VideoCover/VideoCover.vue";

const getCover = (url: string): Promise<string> => {
  return new Promise(resolve => {
    const video: any = document.createElement("video");
    video.autoplay = "autoplay";
    video.crossOrigin = "anonymous";
    video.src = url;
    video.onplay = function () {
      window.URL.revokeObjectURL(video.src);
      const canvas = document.createElement("canvas");
      canvas.width = this.videoWidth;
      canvas.height = this.videoHeight;
      const ctx: any = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
      const base64 = canvas.toDataURL("image/png");
      resolve(base64);
    };
  });
};

const showCover = async ({
  url,
  target,
}: {
  url: string;
  target: HTMLElement;
}) => {
  const location = target.getBoundingClientRect();
  const base64 = await getCover(url);
  const div: HTMLElement = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = "100px";
  div.style.aspectRatio = "500/281.25";
  div.style.overflow = "hidden";
  div.style.top = location.top + "px";
  div.style.left = location.left + "px";
  div.style.transform = "translateX(calc(-100% - 10px))";
  const vNode = h(VideoCover, {
    base64,
    target: target,
    close: () => {
      div.remove();
    },
  });
  render(vNode, div);
  document.body.appendChild(div);
};

export default { showCover };
