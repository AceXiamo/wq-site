export default class Plyer {
  audio: HTMLAudioElement | null = null;
  public timeUpdate: ((currentTime: number, duration: number) => void) | null =
    null;
  public onPause: (() => void) | null = null;
  public onPlay: (() => void) | null = null;
  public onEnd: (() => void) | null = null;

  constructor() {}

  public init(url: string) {
    if (!this.audio) this.audio = document.createElement("audio");
    this.audio.src = url;

    this.audio && this.audio.addEventListener("timeupdate", this.onTimeUpdate);
    this.audio.oncanplay = () => {
      this.audio && this.audio.play();
    };
  }

  public play() {
    this.audio && this.audio.play();
    this.onPlay && this.onPlay();
  }

  public pause() {
    this.audio && this.audio.pause();
    this.onPause && this.onPause();
  }

  public destroy() {
    this.audio &&
      this.audio.removeEventListener("timeupdate", this.onTimeUpdate);
    this.audio && this.audio.pause();
    this.audio = null;
  }

  private onTimeUpdate = (e: Event) => {
    const { currentTime, duration } = this.audio || {};
    if (this.timeUpdate) {
      this.timeUpdate(currentTime || 0, duration || 0);
    }
  };
}

const canvasgenarate = () => {
  let audioCanvasElement = document.createElement('canvas'), canvasW = 200;
  audioCanvasElement.width = canvasW;
  audioCanvasElement.style.position = 'fixed';
  audioCanvasElement.style.bottom = '0';
  
  document.body.append(audioCanvasElement)
}

const drawAudioLine = (
  ctx: any,
  x: any,
  y: any,
  w: any,
  h: any,
  color: any
) => {
  // 绘制方形
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(1, -1);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.fillRect(0, 0, w, h);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // 绘制顶部圆
  ctx.save();
  ctx.translate(x, y - h);
  ctx.scale(1, -1);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(w / 2, 0, w / 2, 0, (360 * Math.PI) / 180, false);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // 绘制底部圆
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(1, -1);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(w / 2, 0, w / 2, 0, (360 * Math.PI) / 180, false);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};
