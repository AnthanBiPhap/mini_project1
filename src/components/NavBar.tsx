import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-300 via-indigo-300 to-pink-300 bg-opacity-80 p-2">

      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">MOVIE<span className="text-yellow-500">VENNIE</span></span>
        </a>
        
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search movie..."
              className="w-full pl-8 pr-4 py-2 rounded-md bg-white bg-opacity-80 border border-input text-gray-900"
            />
          </div>
          <Link to="/" className="px-4 py-2 rounded-md bg-blue-300 hover:bg-green-400 transition text-white">
            Home
          </Link>
          <Link to="/popular" className="px-4 py-2 rounded-md bg-blue-300 hover:bg-green-400 transition text-white">
            Popular
          </Link>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <img 
              src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/277584332_501675071568732_8234032733292798986_n.jpg?stp=dst-jpg_p160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=0U5an1Ty_t8Q7kNvgEcqGn4&_nc_oc=Adjc_cyXbkbOwxVSiWzqvb30Bpx-KkUhicj2Rj8sRBnOxfNqBXt_zs9DLdV1wdwU27l_EUqI9wkhfZQsuu8bXxqH&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AC4_vzRAwB7A1Bn0K2HxVgQ&oh=00_AYAhVD42SfGfbJ4TOm-d6fbHn7pwZ_qrLccD0HNkHV0xkA&oe=67B8F707" 
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
