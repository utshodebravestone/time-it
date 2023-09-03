import { FC } from "react";
import TimerList from "../components/TimerList";

const Timers: FC = () => (
  <div className="mt-5 w-full flex flex-col items-center">
    <div className="w-3/4 flex flex-col">
      <h1 className="w-full pb-3 mb-3 text-center text-6xl border-b border-slate-200">
        Timers
      </h1>
      <TimerList />
    </div>
  </div>
);

export default Timers;
