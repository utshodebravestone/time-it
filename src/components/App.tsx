import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Timers from "../pages/Timers";
import NoContent from "../pages/NoContent";
import Navbar from "./Navbar";
import TimerContextProvider from "../contexts/Timer";

const App: FC = () => (
  <div style={{ fontFamily: "Lato'', sans-serif" }}>
    <Navbar />
    <TimerContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timers" element={<Timers />} />
        <Route path="*" element={<NoContent />} />
      </Routes>
    </TimerContextProvider>
  </div>
);

export default App;
