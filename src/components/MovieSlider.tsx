// components/MovieSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieSliderProps {
  movies: Movie[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSlider;
