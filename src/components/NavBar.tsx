import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 top-5 -left-2">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">MOVIE<span className="text-yellow-500">VENNIE</span></span>
        </a>
        
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search movie..."
              className="w-full pl-8 pr-4 py-2 rounded-md bg-background border border-input"
            />
          </div>
          <Link to="/" className="px-4 py-2 rounded-md bg-blue-300 hover:bg-gray-400 transition">
            Home
          </Link>
          <Link to="/popular" className="px-4 py-2 rounded-md bg-blue-300 hover:bg-gray-400 transition">
            Popular
          </Link>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <img 
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/277584332_501675071568732_8234032733292798986_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4GhGTtjMB2YQ7kNvgFBPBke&_nc_oc=Adg9IN-7b4WuTZ8A7Ew4V2WLHK7R57Mryx5Pe5QalDJSq5cMIBEEG_EowtoEEOxKTZuC4dvwTy0G4WGkohlS87Iq&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AiDdyLnExXKjzruvgnB4ObZ&oh=00_AYDgfWjJH4nZyL-cRnJ_PuxOtED9Gdvm0ed86RIBAVPS6Q&oe=677EC981" 
              alt="Miko" 
              className="w-10 h-10 rounded-full" 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;