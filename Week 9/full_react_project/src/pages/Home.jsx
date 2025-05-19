// src/pages/Home.jsx
import React from 'react'; // Removed useEffect, useState
// Removed axios import
// Removed Navbar import (moved to App.jsx)
import Movies from '../components/Movies'; // Correct path?
import { useMovieContext } from '../components/MovieContext'; // Import the hook
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from 'react-icons/fa';

const Home = () => {
  // Get state and functions from context
  const { page, setPage, maxPages, loading } = useMovieContext();

  // No more local state or useEffect for fetching

  return (
    <>
      {/* Navbar is now likely in App.jsx */}

      {/* Pass loading state to Movies component */}
      <Movies loading={loading} />
      {/* Pagination Controls using context state and functions */}
      <div className="flex justify-center items-center my-6 gap-4 text-xl"> {/* Removed text-white, color comes from icons/buttons */}
        <button
          onClick={() => setPage(1)}
          disabled={page === 1 || loading} // Disable during loading too
          className="p-2 rounded text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
        >
          <FaAngleDoubleLeft />
        </button>

        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || loading}
          className="p-2 rounded text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
        >
          <FaAngleLeft />
        </button>

        <span className="text-lg text-gray-800 dark:text-gray-800 font-semibold">{page}</span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, maxPages))}
          disabled={page === maxPages || loading}
          className="p-2 rounded text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
        >
          <FaAngleRight />
        </button>

        <button
          onClick={() => setPage(maxPages)}
          disabled={page === maxPages || loading}
          className="p-2 rounded text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </>
  );
};

export default Home;