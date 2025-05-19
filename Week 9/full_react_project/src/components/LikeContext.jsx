import { createContext, useContext, useState } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  const addLike = (movieId, title) => {
  setLikes(prev => [...prev, { movieId, title }]);
  console.log(likes)
};

  return (
    <LikeContext.Provider value={{ likes, addLike }}>
      {children}
    </LikeContext.Provider>
  );
};


export const useLikeContext = () => useContext(LikeContext);
