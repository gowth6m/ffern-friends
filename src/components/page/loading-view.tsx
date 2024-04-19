import React from "react";

const LoadingView = () => {
  return (
    <>
      <style>
        {`
        @keyframes loadingAnimation {
          from { width: 0%; }
          to { width: 90%; }
        }
      `}
      </style>
      <div className="container relative z-10 mx-auto mt-32 pb-16 pt-8">
        <div className="mb-2 flex justify-center">
          <span className="text-base font-medium text-foreground">
            Loading...
          </span>
        </div>
        <div className="bg-disabled mx-auto h-2 w-3/6 rounded-full">
          <div
            className="h-2 rounded-full bg-foreground"
            style={{
              width: "0%",
              animation: "loadingAnimation 2s ease-out forwards",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LoadingView;
