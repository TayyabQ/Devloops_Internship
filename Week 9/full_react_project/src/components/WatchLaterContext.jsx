import { createContext, useContext, useState } from 'react';

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchlater, setWatchLater] = useState([]);

  const addWatchLater = (movieId, title) => {
  setWatchLater(prev => [...prev, { movieId, title }]);
  console.log(watchlater)
};

  return (
    <WatchLaterContext.Provider value={{ watchlater, addWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};


export const useWatchLaterContext = () => useContext(WatchLaterContext);
