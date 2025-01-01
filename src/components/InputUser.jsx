import React from 'react';

function InputUser({ userDetail, onUserNameChange }) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="username" className="text-white text-xl font-semibold">GitHub Username:</label>
      <input
        type="text"
        id="username"
        className="p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-white placeholder-gray-500 w-56 transition duration-300 ease-in-out transform hover:scale-105"
        placeholder="Enter GitHub username"
        value={userDetail}
        onChange={(e) => onUserNameChange(e.target.value)}
      />
    </div>
  );
}

export default InputUser;
