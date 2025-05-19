import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useReviewContext } from '../components/ReviewContext'; 
import { useLikeContext } from '../components/LikeContext'; 
import { useWatchLaterContext } from '../components/WatchLaterContext';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [review, setReview] = useState('');
  const { addReview } = useReviewContext(); 

  const { addLike } = useLikeContext(); 
  const { addWatchLater } = useWatchLaterContext();

  const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWE1ZTFjYmJiMzU1M2E2MWQ0ZjI1MDU4ZTljNjZhNCIsIm5iZiI6MTc0Njc3Njk1Mi4xNjIsInN1YiI6IjY4MWRiMzc4MTFkYmI4NmYzZWIxY2QwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PJpBWq2gQDddYPMhJqG0VAQJhnfePDt5hZFH-pLKlMw"; // Your token

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) return;

      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
          params: {
            language: 'en-US',
          },
        });
        setMovieDetails(res.data);
      } catch (err) {
        setError('Failed to load movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleReviewSubmit = () => {
    if (review.trim()) {
      addReview(movieId, review, movieDetails?.title);
      setReview('');
    }
  };

  const handleLikeSubmit = () => {
  addLike(movieId, movieDetails?.title);
  console.log("Liked movie:", movieId);
};

const handleWatchLaterSubmit = () => {
  addWatchLater(movieId, movieDetails?.title);
  console.log("Added movie:", movieId);
};

console.log(movieDetails?.title);


  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="text-white p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
             <div className="md:w-1/3 flex-shrink-0 flex flex-col">
                <img
                    src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : '/path/to/default-poster.jpg'} // Add fallback
                    alt={movieDetails.title}
                    className="rounded-lg shadow-lg w-full"
                />
                <div className='flex flex-row justify-between mt-2'>
                  <button onClick={handleLikeSubmit} className='bg-blue-600 text-white px-4 py-1 rounded-sm'>Like</button>
                    <button onClick={handleWatchLaterSubmit} className='bg-black text-white px-4 py-1 rounded-sm'>Watch Later</button>
                    
                </div>
             </div>
             <div className="md:w-2/3">
                <div className='flex flex-row justify-between'>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{movieDetails.title}</h1>
                    {/* <button onClick={handleLikeSubmit} className='bg-blue-600 text-white px-4 rounded-sm'>Like</button>
                    <button onClick={handleWatchLaterSubmit} className='bg-black text-white px-4 rounded-sm'>Watch Later</button> */}
                    {movieDetails.tagline && <p className="text-lg text-gray-700 italic mb-4">"{movieDetails.tagline}"</p>}
                </div>
                <div className="mb-4 space-y-1">
                    <p className="text-gray-600">
                        <strong>Rating:</strong> {movieDetails.vote_average ? movieDetails.vote_average.toFixed(1) : 'N/A'} / 10
                        <span className="text-gray-500 text-sm"> ({movieDetails.vote_count} votes)</span>
                    </p>
                    <p className="text-gray-600"><strong>Release Date:</strong> {movieDetails.release_date || 'N/A'}</p>
                    <p className="text-gray-600"><strong>Runtime:</strong> {movieDetails.runtime ? `${movieDetails.runtime} mins` : 'N/A'}</p>
                    <p className="text-gray-600"><strong>Genres:</strong> {movieDetails.genres?.length > 0 ? movieDetails.genres.map(g => g.name).join(', ') : 'N/A'}</p>
                </div>
                <h2 className="text-2xl font-semibold text-gray-600 mb-2">Overview</h2>
                <p className="text-gray-500 leading-relaxed">{movieDetails.overview || 'No overview available.'}</p>
                <div className='flex flex-row justify-between mt-4'>
          <input
            className='w-2/3 bg-gray-300 text-black p-2 rounded-sm'
            placeholder='Write a review...'
            value={review}
            onChange={e => setReview(e.target.value)}
          />
          <button onClick={handleReviewSubmit} className='bg-blue-600 text-white p-2 rounded-sm'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
