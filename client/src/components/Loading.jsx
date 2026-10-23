import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        {/* Outer Glow */}
        <div className="absolute w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

        {/* Rotating Ring */}
        <div className="w-24 h-24 border-4 border-transparent border-t-cyan-400 border-r-blue-500 rounded-full animate-spin"></div>

        {/* Inner Ring */}
        <div className="absolute w-16 h-16 border-4 border-transparent border-b-purple-500 border-l-pink-500 rounded-full animate-spin [animation-direction:reverse]"></div>

        {/* Center Dot */}
        <div className="absolute w-5 h-5 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute w-3 h-3 bg-white rounded-full"></div>

        {/* Loading Text */}
        <p className="mt-32 text-cyan-300 text-lg font-semibold tracking-[0.3em] animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default Loading;