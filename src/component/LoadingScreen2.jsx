import React from "react";

const LoadingScreen2 = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
      <h1 className="text-white text-2xl font-semibold">Redirecting you to certificate</h1>
      {/* You can add more text or other elements here */}
    </div>
  );
};

export default LoadingScreen2;
