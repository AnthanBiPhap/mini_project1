import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Sidebar } from 'lucide-react';
import 'swiper/swiper-bundle.css';

import HeroSection from './components/HeroSection';
import MovieCard from './components/MovieCard';
import Navbar from './components/NavBar';
import MovieDetails from './components/MovieDetails';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const API_KEY = '3ba06e00e96ae58c0096ecfc3413ecbb';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.error('Error fetching movies:', err);
      setError('An error occurred while fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderMovieSlider = () => {
    if (isLoading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const renderMovieGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        </Link>
      ))}
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Sidebar />
        
        <main className="">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection title="The Wild Robot" releaseDate="23 July" />
                  <section className="py-8">
                    <h2 className="text-2xl font-bold mb-6">Popular Movies</h2>
                    {renderMovieSlider()}
                  </section>
                </>
              }
            />
            
            <Route
              path="/popular"
              element={
                <section className="mt-6 py-8">
                  <h2 className="text-2xl font-bold mb-6">All Movies</h2>
                  {renderMovieGrid()}
                </section>
              }
            />
            
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;