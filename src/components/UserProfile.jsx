import React from 'react';

function UserProfile({ users }) {
  const { avatar_url, login, followers, public_repos, following, created_at } = users;
  const date = new Date(created_at);
  return (
    <div className="flex justify-center items-center mt-10 w-full sm:w-2/3 md:w-1/2">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-full p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105">
        <div className="bg-white p-6 rounded-full shadow-md mb-6 relative overflow-hidden">
          <img
            src={avatar_url}
            alt="User Avatar"
            className="rounded-full w-40 h-40 border-4 border-yellow-500 transform transition-all hover:scale-110 shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
        </div>
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-white font-extrabold hover:underline transition-all duration-300 ease-in-out"
        >
          {login}
        </a>
        <div className="mt-4 text-lg text-gray-200">
          <p className="mt-2 text-lg">Followers: <span className="font-semibold">{followers}</span></p>
          <p className="mt-2 text-lg">Public Repositories: <span className="font-semibold">{public_repos}</span></p>
          <p className="mt-2 text-lg">Following: <span className="font-semibold">{following}</span></p>
          <p className="mt-4 text-lg">
            Account Created:{" "}
            <span className="font-semibold">
              {`${date.getDate()} ${date.toLocaleString('en-us', { month: 'short' })} ${date.getFullYear()}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
