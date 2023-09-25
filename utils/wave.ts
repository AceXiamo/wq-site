class Wave {
  private container: HTMLElement;
  private options: {
    number: number;
    smooth: number;
    velocity: number;
    height: number;
    colors: string[];
    border: {
      show: boolean;
      width: number;
      color: string[];
    };
    opacity: number;
    position: string;
  };
  private canvas: any;
  private ctx: any;
  private lines: { hex: string; rgba: string }[];
  private frame: number | null;
  private step: number;
  private status: string;

  constructor(container: string, options: any) {
    const originOption = {
      number: 3,
      smooth: 50,
      velocity: 1,
      height: 0.3,
      colors: ["#ff7657"],
      border: {
        show: false,
        width: 2,
        color: [""],
      },
      opacity: 0.5,
      position: "bottom",
    };
    this.container = document.querySelector(container) as HTMLElement;
    this.options = Object.assign(originOption, options);
    this.lines = [];
    this.frame = null;
    this.step = 0;
    this.status = "pause";
    this.init();
    this.draw();
  }

  private init(): void {
    if (this.container.querySelector("canvas") === null) {
      const canvas = document.createElement("canvas");
      canvas.style.position = "absolute";
      canvas.style.bottom = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.zIndex = "-1";
      this.container.appendChild(canvas);
    }
    this.canvas = this.container.querySelector("canvas")!;
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
    this.ctx = this.canvas.getContext("2d")!;
    this.setLines();
  }

  public animate(): void {
    this.status = "animating";
    this.draw();
  }

  public pause(): void {
    cancelAnimationFrame(this.frame!);
    this.frame = null;
    this.status = "pause";
  }

  public setOptions(options: any): void {
    this.options = Object.assign(this.options, options);
    this.setLines();
    this.reset();
    if (this.status === "pause") {
      this.draw();
    }
  }

  private reset(): void {
    this.init();
  }

  private draw(): void {
    const canvas = this.canvas;
    const ctx = this.ctx;
    const height = this.getWaveHeight();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.step += this.options.velocity;
    this.lines.forEach((line, index) => {
      const angle =
        ((this.step + (index * 180) / this.lines.length) * Math.PI) / 180;
      const leftHeight = Math.sin(angle) * this.options.smooth;
      const rightHeight = Math.cos(angle) * this.options.smooth;
      const vertexs = this.getVertexs(leftHeight, rightHeight);
      ctx.fillStyle = line.rgba;
      ctx.beginPath();
      ctx.moveTo(vertexs[0][0], vertexs[0][1]);
      if (this.options.border.show) {
        ctx.lineWidth = this.options.border.width;
        ctx.strokeStyle = this.options.border.color[index]
          ? this.options.border.color[index]
          : line.hex;
      }
      if (
        this.options.position === "left" ||
        this.options.position === "right"
      ) {
        ctx.bezierCurveTo(
          height + leftHeight - this.options.smooth,
          canvas.height / 2,
          height + rightHeight - this.options.smooth,
          canvas.width / 2,
          vertexs[1][0],
          vertexs[1][1]
        );
      } else {
        ctx.bezierCurveTo(
          canvas.width / 2,
          height + leftHeight - this.options.smooth,
          canvas.width / 2,
          height + rightHeight - this.options.smooth,
          vertexs[1][0],
          vertexs[1][1]
        );
      }

      if (this.options.border.show) {
        ctx.stroke();
      }
      ctx.lineTo(vertexs[2][0], vertexs[2][1]);
      ctx.lineTo(vertexs[3][0], vertexs[3][1]);
      ctx.lineTo(vertexs[0][0], vertexs[0][1]);
      ctx.closePath();
      ctx.fill();
    });
    const that = this;
    if (this.status === "animating") {
      this.frame = requestAnimationFrame(() => {
        that.draw();
      });
    }
  }

  private setLines(): void {
    this.lines = [];
    for (let i = 0; i < this.options.number; i++) {
      const color = this.options.colors[i % this.options.colors.length];
      const line = {
        hex: this.colorHex(color),
        rgba: this.colorRgb(color, this.options.opacity),
      };
      this.lines.push(line);
    }
  }

  private getVertexs(leftHeight: number, rightHeight: number): number[][] {
    const canvasHeight = this.canvas.height;
    const canvasWidth = this.canvas.width;
    const waveHeight = this.getWaveHeight();
    switch (this.options.position) {
      case "bottom":
        return [
          [0, waveHeight + leftHeight],
          [canvasWidth, waveHeight + rightHeight],
          [canvasWidth, canvasHeight],
          [0, canvasHeight],
        ];
      case "top":
        return [
          [0, waveHeight + leftHeight],
          [canvasWidth, waveHeight + rightHeight],
          [canvasWidth, 0],
          [0, 0],
        ];
      case "left":
        return [
          [waveHeight + leftHeight, 0],
          [waveHeight + rightHeight, canvasHeight],
          [0, canvasHeight],
          [0, 0],
        ];
      case "right":
        return [
          [waveHeight + leftHeight, 0],
          [waveHeight + rightHeight, canvasHeight],
          [canvasWidth, canvasHeight],
          [canvasWidth, 0],
        ];
    }
    return [];
  }

  private getWaveHeight(): number {
    if (this.options.height > 1) {
      switch (this.options.position) {
        case "bottom":
          return this.canvas.height - this.options.height;
        case "top":
          return this.options.height;
        case "left":
          return this.options.height;
        case "right":
          return this.canvas.width - this.options.height;
      }
    } else {
      switch (this.options.position) {
        case "bottom":
          return this.canvas.height * (1 - this.options.height);
        case "top":
          return this.canvas.height * this.options.height;
        case "left":
          return this.canvas.width * this.options.height;
        case "right":
          return this.canvas.width * (1 - this.options.height);
      }
    }
    return 0;
  }

  private colorHex(color: string): string {
    let that = color;
    //十六进制颜色值的正则表达式
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是rgb颜色表示
    if (/^(rgb|RGB)/.test(that)) {
      const aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        if (hex.length < 2) {
          hex = "0" + hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = that;
      }
      return strHex;
    } else if (reg.test(that)) {
      const aNum = that.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return that;
      } else if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    }
    return that;
  }

  private colorRgb(color: string, opacity: number): string {
    let sColor = color.toLowerCase();
    //十六进制颜色值的正则表达式
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return `rgba(${sColorChange.join(",")},${opacity})`;
    }
    return sColor;
  }
}

export default Wave;
