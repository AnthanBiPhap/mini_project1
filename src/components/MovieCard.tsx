import React from 'react';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, posterPath }) => {
  return (
    <a href={`/movie/${id}`} className="block">
      <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="w-full h-auto object-cover aspect-[2/3]"
        />
      </div>
    </a>
  );
};

export default MovieCard;

