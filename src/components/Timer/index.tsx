import { FC, useEffect, useState } from "react";
import TimerType, { serializeTimer } from "./types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import TimerForm from "../TimerForm";

const Timer: FC<{
  timer: TimerType;
  onUpdate: (id: number, timer: TimerType) => void;
  onDelete: (id: number) => void;
}> = ({ timer, onUpdate, onDelete }) => {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timerIsZero, setTimerIsZero] = useState(false);
  const [editFormActive, setEditFormActive] = useState(false);

  useEffect(() => {
    if (timer.time.finished) {
      setTimerIsZero(true);
      setTimerIsRunning(false);
    } else {
      setTimerIsZero(false);
    }

    const clockInterval = setInterval(() => {
      if (timerIsRunning) {
        onUpdate(timer.id, { ...timer, time: timer.time.tick() });
      }
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, [timerIsRunning, onUpdate, timer]);

  return (
    <div className="w-2/3 max-w-[555px] flex flex-col items-center gap-2 bg-slate-50 shadow-md rounded">
      <div className="w-full p-5 flex flex-col items-center gap-2 ">
        <h1 className="text-3xl font-light">{timer.title.toLowerCase()}</h1>
        <h1 className="text-5xl font-bold">{timer.time.display()}</h1>
        <p className="font-light">at {timer.tag.toLowerCase()}</p>
        <div className="w-full flex justify-end gap-4">
          <button
            onClick={() => {
              onDelete(timer.id);
            }}
            className="text-xl hover:text-slate-500 transition-colors duration-300"
          >
            <FaTrashAlt size="26" />
          </button>
          <button
            onClick={() => setEditFormActive(true)}
            className="text-xl hover:text-slate-500 transition-colors duration-300"
          >
            <FaEdit size="30" />
          </button>
        </div>
      </div>
      <button
        onClick={() => setTimerIsRunning((isRunning) => !isRunning)}
        className={`w-full py-2.5 text-xl font-medium border ${
          timerIsZero
            ? "  bg-green-500 text-slate-50 "
            : timerIsRunning
            ? "text-red-500 border-red-500"
            : "text-green-500 border-green-500"
        } rounded-b-md transition-color duration-300`}
      >
        {timerIsZero ? "Time's Up" : timerIsRunning ? "Stop" : "Start"}
      </button>

      {editFormActive && (
        <TimerForm
          initialTimer={serializeTimer(timer)}
          onCreate={(timer) => {
            onUpdate(timer.id, timer);
            setEditFormActive(false);
          }}
          onCancel={() => setEditFormActive(false)}
        />
      )}
    </div>
  );
};

export default Timer;
