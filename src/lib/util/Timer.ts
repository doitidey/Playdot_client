import EventEmitter from "events";

export class Timer extends EventEmitter {
  // 최초 시작시간
  private time: number = -1;
  // requestAnimationFrame의 id
  private timerId: number = -1;

  constructor(private duration: number) {
    super();
  }

  start() {
    this.timerId = requestAnimationFrame(this.step);
    return this.timerId;
  }

  stop() {
    cancelAnimationFrame(this.timerId);
    this.timerId = -1;
  }

  private step = (timestamp: number) => {
    if (this.time === -1) {
      this.time = timestamp;
    }

    const progress = timestamp - this.time;
    if (progress < this.duration) {
      this.emit("progress", progress);
      this.timerId = requestAnimationFrame(this.step);
    } else {
      this.stop();
      this.emit("finish");
    }
  };
}
