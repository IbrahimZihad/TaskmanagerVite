import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function PrivateNavbar() {
  const { logout, user } = useContext(AuthContext); // assume user object is available

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-2xl font-bold text-blue-600">
        TaskManager
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="hover:text-blue-600">Scrum</Link>
        <Link to="/backlog" className="hover:text-blue-600">Backlog</Link>
        <Link to="/summary" className="hover:text-blue-600">Summary</Link>
        <Link to="/team" className="hover:text-blue-600">Team</Link>

        <Link to="/profile" className="text-sm text-blue-600 underline">
          {user?.name || "Profile"}
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
