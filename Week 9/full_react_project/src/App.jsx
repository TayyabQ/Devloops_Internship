// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Last_Watched from "./pages/Last_Watched"; // Assuming these exist
import Watch_Later from "./pages/Watch_Later"; // Assuming these exist
import Liked from "./pages/Liked";           // Assuming these exist
import Reviewed from "./pages/Reviewed";       // Assuming these exist
import MoviePage from "./components/MoviePage"; // Correct path? Check if it's under components or pages
import Navbar from "./components/Navbar"; // Assuming Navbar should be on all pages
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Render Navbar outside Routes if it should appear on all pages */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/last_watched' element={<Last_Watched />} />
        <Route path='/watch_later' element={<Watch_Later />} />
        <Route path='/likes' element={<Liked />} />
        <Route path='/reviews' element={<Reviewed />} />
        {/* Add the route for MoviePage with a dynamic ID parameter */}
        <Route path='/movie_page/:movieId' element={<MoviePage />} />
         {/* Optional: Add a 404 Not Found Route */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;