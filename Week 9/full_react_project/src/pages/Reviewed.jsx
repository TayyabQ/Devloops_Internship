import React from 'react';
import { useReviewContext } from '../components/ReviewContext';

const Reviewed = () => {
  const { reviews } = useReviewContext();

  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Reviews</h1>
      {reviews.length === 0 ? (
        <p>No reviews submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((r, index) => (
            <li key={index} className="bg-gray-500 p-4 rounded-lg">
              <p><strong>Movie ID:</strong> {r.movieId}</p>
              <p><strong>Movie:</strong> {r.title}</p>
              <p><strong>Review:</strong> {r.reviewText}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviewed;
