import React from 'react';
import { useLikeContext } from '../components/LikeContext';

const Liked = () => {
  const { likes } = useLikeContext();
  console.log(likes)

  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Likes</h1>
      {likes.length === 0 ? (
        <p>No likes yet.</p>
      ) : (
        <ul className="space-y-4">
          {likes.map((r, index) => (
  <li key={index} className="bg-gray-500 p-4 rounded-lg">
    <p><strong>Movie ID:</strong> {r.movieId}</p>
    <p><strong>Movie:</strong> {r.title}</p>
  </li>
))}
        </ul>
      )}
    </div>
  );
};

export default Liked;
