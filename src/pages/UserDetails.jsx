import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUser(res.data);
      } catch {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [username]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!user) return null;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-28 h-28 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{user.name || user.login}</h2>
        <p className="text-gray-700 mb-2">{user.bio || "No bio available."}</p>
        <div className="flex space-x-4 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            Repos: {user.public_repos}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            Followers: {user.followers}
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            Following: {user.following}
          </span>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold mb-4"
        >
          View GitHub Profile
        </a>
        <Link
          to="/github-users"
          className="text-gray-600 hover:text-blue-700 underline"
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
}
