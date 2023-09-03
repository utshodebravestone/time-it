import { FC } from "react";
import useTimerContext from "../../hooks/useTimerContext";
import Timer from "../Timer";
import AddTimer from "../AddTimer";

const TimerList: FC = () => {
  const { timers, onCreate, onUpdate, onDelete } = useTimerContext();

  return (
    <ul className="mt-2 w-full flex flex-col items-center gap-5">
      {timers.length > 0 ? (
        timers.map((timer, i) => (
          <li key={i} className="w-full flex justify-center">
            <Timer timer={timer} onUpdate={onUpdate} onDelete={onDelete} />
          </li>
        ))
      ) : (
        <li>
          <h3 className="text-center text-2xl font-light">No Timer Listed</h3>
          <p className="text-center text-normal font-light">
            Click on the plus button to add one
          </p>
        </li>
      )}
      <li>
        <AddTimer onCreate={onCreate} />
      </li>
    </ul>
  );
};

export default TimerList;
