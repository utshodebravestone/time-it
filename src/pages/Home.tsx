import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => (
  <div className="min-h-[88vh] w-full flex flex-col justify-center items-center">
    <div className="w-3/4 flex flex-col items-center">
      <h1 className="w-full pb-3 mb-3 text-center text-7xl border-b border-slate-200">
        Welcome to Timers
      </h1>
      <p className="text-2xl font-light text-center">
        Time is one of the most valuable thing that you have.
        <br />
        Use it properly with our app which helps you to time your every action.
      </p>
      <Link
        to="/timers"
        className="mt-4 py-4 px-8 bg-blue-500 text-white font-bold rounded hover:bg-opacity-80 transition-color duration-500"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Home;
