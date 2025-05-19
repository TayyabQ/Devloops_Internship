import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../components/MovieContext'; 

const Movies = ({ loading }) => {
  const navigate = useNavigate();
  const { movies } = useMovieContext();

  const [search, setSearch] = useState('');
const [matchedMovie, setMatchedMovie] = useState(''); // holds matched movie

  if (loading) {
     return <div className="text-center text-white py-10 text-xl">Loading movies...</div>;
  }
   if (!movies || movies.length === 0) {
        return <div className="text-center text-white py-10 text-xl">No movies found.</div>;
    }

const handleSearch = () => {
  const match = movies.find(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  setMatchedMovie(match || null);
};

  return (
    <div>
      <div className='p-6 flex flex-col justify-center items-center gap-2'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <input
            className='w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl bg-gray-300 text-black p-2 rounded-sm text-center'
            placeholder='Enter the name of the movie you want to watch'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={handleSearch} className='bg-blue-600 text-white p-2 rounded-sm'>Submit</button>
          </div>
          {matchedMovie && (
  <div className="mt-6 bg-gray-800 text-white rounded-lg shadow-md flex items-center gap-4 p-4 w-2/3 mx-auto">
    <img
      src={matchedMovie.poster_path ? `https://image.tmdb.org/t/p/w92${matchedMovie.poster_path}` : '/path/to/fallback.jpg'}
      alt={matchedMovie.title}
      className="w-16 h-24 object-cover rounded"
    />
    <div>
      <h2 className="text-xl font-semibold">{matchedMovie.title}</h2>
      <p className="text-gray-300">Rating: {matchedMovie.vote_average}</p>
    </div>
  </div>
)}

      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
            onClick={() => navigate(`/movie_page/${movie.id}`)}
          >
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/path/to/default-poster.jpg'} // Add a fallback image path
              alt={movie.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
                 <h3 className="text-lg font-semibold truncate" title={movie.title}>{movie.title}</h3>
                 <p className="text-sm text-gray-400">Rating: {movie.vote_average.toFixed(1)}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;