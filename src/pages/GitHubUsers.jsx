import { useState } from "react";
import axios from "axios";

function GitHubUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    if (!query) return;
    setError(null);

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      setUsers(response.data.items);
    } catch (setError) {
      setError("Failed to fetch users. Try again later.");
    }
  };

  return (
    <div className="p-6 md:p-10 rounded-lg shadow-xl max-w-lg mx-auto mt-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800 mb-6">
        GitHub User Search 🔍
      </h2>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="flex-1 p-3 border border-blue-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={fetchUsers}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg transition duration-300 w-full md:w-auto"
        >
          Search
        </button>
      </div>

      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      <div className="max-h-60 md:max-h-80 overflow-y-auto bg-gray-50 rounded-lg shadow-md divide-y divide-gray-200">
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 hover:bg-blue-50 transition duration-200 flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-10 h-10 rounded-full"
              />
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-medium hover:underline"
              >
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GitHubUsers;
