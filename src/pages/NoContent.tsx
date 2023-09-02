import { FC } from "react";

const NoContent: FC = () => (
  <div className="min-h-[88vh] w-full flex flex-col justify-center items-center">
    <div className="w-3/4 flex flex-col">
      <h1 className="w-full pb-3 mb-3 text-center text-7xl border-b border-slate-200">
        404 | No Content
      </h1>
      <p className="text-2xl font-light text-center">
        This URL doesn't contain any content.
      </p>
    </div>
  </div>
);

export default NoContent;
