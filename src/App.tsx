import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

import HeroSection from './components/HeroSection';
import MovieCard from './components/MovieCard';
import Navbar from './components/NavBar';
import { Sidebar } from 'lucide-react';
import MovieDetails from './components/MovieDetails';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=3ba06e00e96ae58c0096ecfc3413ecbb'
        );
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

    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Sidebar />
        <main className="pl-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection title="The Wild Robot" releaseDate="23 July" />
                  <section className="container py-8">
                    <h2 className="text-2xl font-bold mb-6">Popular Movies</h2>
                    {isLoading ? (
                      <div className="text-center">Loading...</div>
                    ) : error ? (
                      <div className="text-center text-red-500">{error}</div>
                    ) : (
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                          640: { slidesPerView: 1 },
                          768: { slidesPerView: 2 },
                          1024: { slidesPerView: 3 },
                          1280: { slidesPerView: 4 },
                        }}
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
                    )}
                  </section>
                </>
              }
            />
            <Route
              path="/popular"
              element={
                <section className="container mt-6 py-8">
                  <h2 className="text-2xl font-bold mb-6">All Movies</h2>
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
