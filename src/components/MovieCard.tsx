import React from 'react';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, posterPath }) => {
  return (
    <a href={`/movie/${id}`} className="block">
      <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="w-full h-auto object-cover aspect-[2/3]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-3xl font-bold text-center">{title}</h3>
          <button className="absolute top-4 right-4 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-600 transition">
          </button>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
