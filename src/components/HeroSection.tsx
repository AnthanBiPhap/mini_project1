import React from 'react';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  releaseDate: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, releaseDate }) => {
  return (
    <div className="relative h-[700px] w-[1560px] mt-20" >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://image.tmdb.org/t/p/original/9w0Vh9eizfBXrcomiaFWTIPdboo.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl ml-4">
            {title}
          </h1>
          <p className="mt-4 text-gray-200 ml-4">
            Releasing {releaseDate}
          </p>
          <button className="mt-8 bg-yellow-500 text-black font-bold py-2 px-4 rounded-md flex items-center ml-4">
            <Play className="mr-2 h-4 w-4" /> Watch the trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

