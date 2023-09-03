import { FC, JSX, createContext, useEffect, useState } from "react";
import TimerContextType from "./types";
import TimerType from "../../components/Timer/types";
import { LocalStorageAPI } from "../../apis/Timer";

export const TimerContext = createContext<TimerContextType>({
  timers: [],
  onCreate(timer) {
    console.log(timer);
  },
  onUpdate(id, timer) {
    console.log(id, timer);
  },
  onDelete(id) {
    console.log(id);
  },
});

const TimerContextProvider: FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const [timers, setTimers] = useState<TimerType[]>(LocalStorageAPI.get());

  const onCreate = (timer: TimerType): void =>
    setTimers((timers) => [...timers, timer]);

  const onUpdate = (id: number, timer: TimerType): void =>
    setTimers((timers) =>
      timers.map((_timer) =>
        _timer.id == id ? { ..._timer, ...timer } : _timer
      )
    );

  const onDelete = (id: number): void =>
    setTimers((timers) => timers.filter((timer) => timer.id != id));

  useEffect(() => {
    LocalStorageAPI.set(timers);
  }, [timers]);

  return (
    <TimerContext.Provider
      value={{
        timers,
        onCreate,
        onUpdate,
        onDelete,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
