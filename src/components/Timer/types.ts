import Time from "../../utils/time";

export interface TimerTypeSerialized {
  id: number;
  title: string;
  tag: string;
  time: { hour: number; minute: number; second: number };
  running: boolean;
}

export default interface TimerType {
  id: number;
  title: string;
  tag: string;
  time: Time;
  running: boolean;
}

export const createTimerFromSerialized = (
  timer: TimerTypeSerialized
): TimerType => ({
  ...timer,
  time: new Time(timer.time.hour, timer.time.minute, timer.time.second),
});

export const serializeTimer = (timer: TimerType): TimerTypeSerialized => ({
  ...timer,
  time: {
    hour: timer.time.hour,
    minute: timer.time.minute,
    second: timer.time.second,
  },
});
