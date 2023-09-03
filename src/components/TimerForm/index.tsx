import { FC, useState } from "react";
import TimerType, {
  TimerTypeSerialized,
  createTimerFromSerialized,
} from "../Timer/types";
import Input from "../Input";

const TimerForm: FC<{
  initialTimer: TimerTypeSerialized;
  onCreate: (timer: TimerType) => void;
  onCancel: () => void;
}> = ({ initialTimer, onCreate, onCancel }) => {
  const [timer, setTimer] = useState(initialTimer);

  return (
    <div className="absolute left-0 top-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center z-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCreate(createTimerFromSerialized(timer));
        }}
        className="p-10 flex flex-col items-center justify-center gap-2 bg-slate-50 rounded shadow"
      >
        <h1 className="text-4xl mb-2">Add a Timer</h1>
        <Input
          label="Title"
          type="text"
          required
          maxLength={20}
          initialValue={timer.title}
          onChange={(title) => setTimer((timer) => ({ ...timer, title }))}
        />
        <Input
          label="Tag"
          type="text"
          required
          maxLength={24}
          initialValue={timer.tag}
          onChange={(tag) => setTimer((timer) => ({ ...timer, tag }))}
        />
        <Input
          label="Hour"
          type="number"
          min={0}
          initialValue={timer.time.hour.toString()}
          onChange={(hour) =>
            setTimer((timer) => ({
              ...timer,
              time: { ...timer.time, hour: parseInt(hour == "" ? "0" : hour) },
            }))
          }
        />
        <Input
          label="Minute"
          type="number"
          min={0}
          initialValue={timer.time.minute.toString()}
          onChange={(minute) =>
            setTimer((timer) => ({
              ...timer,
              time: {
                ...timer.time,
                minute: parseInt(minute == "" ? "0" : minute),
              },
            }))
          }
        />
        <Input
          label="Second"
          type="number"
          min={0}
          initialValue={timer.time.second.toString()}
          onChange={(second) =>
            setTimer((timer) => ({
              ...timer,
              time: {
                ...timer.time,
                second: parseInt(second == "" ? "0" : second),
              },
            }))
          }
        />
        <div className="mt-4 w-full">
          <button
            type="submit"
            className="w-full py-3 text-xl font-bold border text-green-500 border-green-500 rounded-t hover:text-white hover:bg-green-500 transition-color duration-500"
          >
            Add Timer
          </button>
          <button
            onClick={() => {
              onCancel();
            }}
            className="w-full py-3 text-xl font-bold border text-red-500 border-red-500 rounded-b hover:text-white hover:bg-red-500 transition-color duration-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimerForm;
