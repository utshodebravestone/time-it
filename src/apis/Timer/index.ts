import TimerType, {
  TimerTypeSerialized,
  createTimerFromSerialized,
} from "../../components/Timer/types";

const key = "timers";

export class LocalStorageAPI {
  static set(timers: TimerType[]): void {
    return localStorage.setItem(key, JSON.stringify(timers));
  }

  static get(): TimerType[] {
    const timers: TimerTypeSerialized[] = JSON.parse(
      localStorage.getItem(key) || "[]"
    );
    return timers.map((timer: TimerTypeSerialized) =>
      createTimerFromSerialized(timer)
    );
  }
}
