import React from "react";

interface Props {
  message?: string;
}

const ErrorView: React.FC<Props> = ({ message = "Something went wrong!" }) => {
  return (
    <>
      <div className="container relative z-10 mx-auto mt-32 pb-8">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="
            text-center
            text-4xl
            font-bold
            text-primary
          "
          >
            Error!
          </h1>
          <h2 className="text-center text-2xl font-bold text-primary">
            {message}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ErrorView;
