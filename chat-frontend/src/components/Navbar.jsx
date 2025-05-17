import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  
  return (
    <nav className="w-full bg-gray-800 p-4 flex justify-between items-center shadow-lg border-b border-gray-700">
      {/* Website Name */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white">EchoChat</h1>
        {user?.isGuest && (
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            Demo Mode
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-gray-300 hidden sm:inline">
          Logged in as: {user?.username}
        </span>
        
        {/* Logout Button */}
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;