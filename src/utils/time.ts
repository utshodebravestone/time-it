export default class Time {
  hour: number;
  minute: number;
  second: number;
  finished: boolean;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour + (minute - (minute % 60)) / 60;
    this.minute = (minute % 60) + (second - (second % 60)) / 60;
    this.second = second % 60;
    this.finished = false;
  }

  tick(): Time {
    if (this.hour == 0 && this.minute == 0 && this.second == 0) {
      this.finished = true;
      return this;
    }

    if (this.minute == 0 && this.hour != 0) {
      this.hour -= 1;
      this.minute = 60;
    }

    if (this.second == 0 && this.minute != 0) {
      this.minute -= 1;
      this.second = 60;
    }

    this.second -= 1;

    return this;
  }

  display(): string {
    return `${this.hour < 10 ? "0" + this.hour : this.hour}:${
      this.minute < 10 ? "0" + this.minute : this.minute
    }:${this.second < 10 ? "0" + this.second : this.second}`;
  }
}
