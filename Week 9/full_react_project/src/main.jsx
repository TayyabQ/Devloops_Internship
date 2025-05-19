import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import { MovieProvider } from './components/MovieContext.jsx';
import { ReviewProvider } from './components/ReviewContext';
import { LikeProvider } from './components/LikeContext.jsx';
import { WatchLaterProvider } from './components/WatchLaterContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <ReviewProvider>
          <LikeProvider>
            <WatchLaterProvider>
              <App />
            </WatchLaterProvider>
          </LikeProvider>
        </ReviewProvider>
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>
);