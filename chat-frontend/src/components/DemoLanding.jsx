import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";

const DemoLanding = () => {
  const { guestLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    guestLogin();
    navigate("/chat");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to EchoChat</h1>
        <p className="text-xl mb-8">A real-time chat application for seamless communication</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button 
            onClick={handleGuestLogin}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-medium transition duration-300"
          >
            Try Demo Now
          </button>
          
          <Link 
            to="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-medium transition duration-300"
          >
            Login
          </Link>
          
          <Link 
            to="/register" 
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md text-lg font-medium transition duration-300"
          >
            Register
          </Link>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Portfolio Viewer?</h2>
          <p className="mb-4">
            Click the "Try Demo Now" button to instantly access the application without creating an account.
            You'll be able to experience all the features without any registration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoLanding; 