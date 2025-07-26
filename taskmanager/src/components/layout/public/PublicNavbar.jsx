import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">TaskManager</Link>
      <div className="space-x-4">
        <Link to="/help" className="text-gray-700 hover:text-blue-600">Help</Link>
        <Link to="/privacy-policy" className="text-gray-700 hover:text-blue-600">Privacy</Link>
        <Link to="/login" className="text-blue-600 font-semibold border px-3 py-1 rounded hover:bg-blue-100">Login</Link>
        <Link to="/signup" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Sign Up</Link>
      </div>
    </nav>
  );
}
