import React from "react";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Warning:</strong>
        <span className="block sm:inline"> Cannot access this page </span>
      </div>
    </div>
  </div>
  );
};

export default Notfound;
