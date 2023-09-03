import TimerType from "../../components/Timer/types";

export default interface TimerContextType {
  timers: TimerType[];
  onCreate: (timer: TimerType) => void;
  onUpdate: (id: number, timer: TimerType) => void;
  onDelete: (id: number) => void;
}
