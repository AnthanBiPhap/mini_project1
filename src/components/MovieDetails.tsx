// components/MovieDetails.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface MovieDetail {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  // Add other fields as needed
}

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=3ba06e00e96ae58c0096ecfc3413ecbb`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError('An error occurred while fetching movie details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!movie) {
    return <div className="text-center">No movie found.</div>;
  }

  return (
    <div className="container py-8 mt-6">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="my-4"
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      {/* Add more movie details as needed */}
    </div>
  );
};

export default MovieDetails;