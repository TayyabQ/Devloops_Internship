// src/context/MovieContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// 1. Create the Context
export const MovieContext = createContext(null);

// 2. Create the Provider Component
export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true); // Add loading state
    const maxPages = 500; // TMDB max page limit
    const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWE1ZTFjYmJiMzU1M2E2MWQ0ZjI1MDU4ZTljNjZhNCIsIm5iZiI6MTc0Njc3Njk1Mi4xNjIsInN1YiI6IjY4MWRiMzc4MTFkYmI4NmYzZWIxY2QwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PJpBWq2gQDddYPMhJqG0VAQJhnfePDt5hZFH-pLKlMw"; // Keep your token secure in real apps

    useEffect(() => {
        const fetchPopularMovies = async () => {
            setLoading(true); // Start loading
            try {
                const res = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                    },
                    params: {
                        language: 'en-US',
                        page, // Use page state here
                    },
                });
                setMovies(res.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
                // Optionally set an error state here
                setMovies([]); // Clear movies on error
            } finally {
                setLoading(false); // Stop loading regardless of success/failure
            }
        };

        fetchPopularMovies();
    }, [page]); // Re-run effect when page changes

    // 3. Define the value provided by the context
    const value = {
        movies,
        page,
        setPage,
        loading,
        maxPages,
    };

    // 4. Return the Provider wrapping the children
    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};

// 5. Custom Hook for easy consumption
export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (context === undefined || context === null) {
        throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
};