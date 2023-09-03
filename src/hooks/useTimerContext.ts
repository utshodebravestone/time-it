import { useContext } from "react";
import { TimerContext } from "../contexts/Timer";

const useTimerContext = () => useContext(TimerContext);

export default useTimerContext;
