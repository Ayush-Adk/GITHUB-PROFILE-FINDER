import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex justify-center items-center z-50">
      <div className="flex items-center justify-center gap-4">
        <div className="border-8 border-t-8 border-blue-500 rounded-full w-20 h-20 animate-spin"></div>
        <div className="mt-4 text-lg font-semibold text-white">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;

