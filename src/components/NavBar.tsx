import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">
            MOVIE<span className="text-yellow-300">VENNIE</span>
          </span>
        </a>

        {/* Search and Navigation */}
        <div className="flex items-center space-x-6 flex-1 justify-end">
          {/* Search Input */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search movie..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          {/* Navigation Links */}
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-yellow-300 text-gray-800 font-medium hover:bg-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            to="/popular"
            className="px-4 py-2 rounded-lg bg-yellow-300 text-gray-800 font-medium hover:bg-yellow-400 transition"
          >
            Popular
          </Link>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/277584332_501675071568732_8234032733292798986_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4GhGTtjMB2YQ7kNvgFBPBke&_nc_oc=Adg9IN-7b4WuTZ8A7Ew4V2WLHK7R57Mryx5Pe5QalDJSq5cMIBEEG_EowtoEEOxKTZuC4dvwTy0G4WGkohlS87Iq&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AiDdyLnExXKjzruvgnB4ObZ&oh=00_AYDgfWjJH4nZyL-cRnJ_PuxOtED9Gdvm0ed86RIBAVPS6Q&oe=677EC981"
              alt="Miko"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
