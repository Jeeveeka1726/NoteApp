import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <header className="mb-8">
        <h1 className="text-5xl font-bold">Welcome to My Notes App</h1>
        <p className="text-xl mt-4">Capture your thoughts, ideas, and tasks in one place.</p>
      </header>

      <div className="flex space-x-4">
        <Link to='/signup'><button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </button></Link>
        <Link to='/login'><button className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition">
          Login
        </button></Link>
      </div>

      <footer className="absolute bottom-4">
        <p className="text-sm">&copy; 2024 My Notes App. All rights reserved.</p>
      </footer>
    </div>
  );
}
