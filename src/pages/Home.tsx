import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => (
  <div className="min-h-[88vh] w-full flex flex-col justify-center items-center">
    <div className="w-3/4 flex flex-col items-center">
      <h1 className="w-full pb-3 mb-3 text-center text-6xl border-b border-slate-200">
        Welcome to Timers
      </h1>
      <p className="text-xl font-light text-center">
        Time is one of the most valuable thing that you have.
        <br />
        Use it properly with our app which helps you to time your every task.
      </p>
      <Link
        to="/timers"
        className="mt-4 py-4 px-8 bg-blue-500 text-white font-extrabold rounded hover:bg-opacity-80 transition-color duration-500"
      >
        Start Timing Your Tasks
      </Link>
    </div>
  </div>
);

export default Home;
