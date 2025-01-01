import { useEffect, useState } from "react";
import "./App.css";
import InputUser from "./components/InputUser";
import Loading from "./components/Loading";
import UserProfile from "./components/UserProfile";

function App() {
  const [userName, setUserName] = useState("Ayush-Adk");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [userName]);

  const searchButton = () => {
    fetchUserData();
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center py-10 px-5">
      {/* Search bar and button */}
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-5 rounded-3xl shadow-xl w-full sm:w-2/3 lg:w-1/2 flex justify-between items-center transform transition-all hover:scale-105">
        <InputUser
          userDetail={userName}
          onUserNameChange={(userName) => setUserName(userName)}
        />
        <button
          className="p-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all duration-300 ease-out shadow-lg"
          onClick={searchButton}
        >
          Search
        </button>
      </div>

      {/* Display Loading */}
      {loading && <Loading />}

      {/* Display Profile */}
      {userData && !loading && <UserProfile users={userData} />}
    </div>
  );
}

export default App;
