import { FC, useState } from "react";
import TimerType from "../Timer/types";
import TimerForm from "../TimerForm";
import uid from "../../utils/uid";
import { FaPlus } from "react-icons/fa";

const AddTimer: FC<{ onCreate: (timer: TimerType) => void }> = ({
  onCreate,
}) => {
  const [showingTimerForm, setShowingTimerForm] = useState(false);

  return (
    <div className="">
      {showingTimerForm && (
        <TimerForm
          initialTimer={{
            id: uid(),
            title: "",
            tag: "",
            time: {
              hour: 0,
              minute: 0,
              second: 0,
            },
            running: false,
          }}
          onCreate={(timer) => {
            setShowingTimerForm(false);
            onCreate(timer);
          }}
          onCancel={() => setShowingTimerForm(false)}
        />
      )}
      <button
        onClick={() => setShowingTimerForm(true)}
        className="p-3 border border-slate-200 rounded hover:scale-110 transition-transform duration-300"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddTimer;
