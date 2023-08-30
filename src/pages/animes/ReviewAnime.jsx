import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import axios from 'axios';
import {useAuth} from "../../AuthContext"

const ReviewAnime = (props) => {
  const [showText, setShowText] = useState(false);
  const [comment, setComment] = useState('');
  const { profileData } = useUser();
  const [reviews, setReviews] = useState([]);
  const {isLoggedIn} = useAuth();

  const createReviewObject = () => {
    const review = {
      userID: {
        id: profileData.id,
      },
      animeID: {
        id: props.selectedAnime.id,
        title: props.selectedAnime.title,
        thumbnail: props.selectedAnime.thumbnail,
      },
      comment: comment,
      timestamp: new Date().toISOString(),
    };
    return review;
  };

  const sendReview = async () => {
    try {
      const reviewData = createReviewObject();

      const response = await axios.post('http://localhost:8080/review/save', reviewData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Anime data sent successfully:', response.data);
      // Add any navigation or success message logic here
    } catch (error) {
      console.error('Error sending anime data:', error);
      // Handle the error, e.g., display an error message
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/review?animeID=${props.selectedAnime.id}`);
      const reviews = response.data;
      setReviews(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [props.selectedAnime, sendReview]);

  return (
    
     <div className='w-full max-w-screen-md mx-auto p-4'>
      <h1 className='text-4xl w-full my-4 bg-yellow-100/20 text-center pb-2'>{isLoggedIn ? "Leave a review" : "Reviews"}</h1>
      {!showText && isLoggedIn &&(
        <button
          onClick={() => setShowText(!showText)}
          className="mt-2 ml-3 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 self-center "
        >
          Add a review
        </button>
      )}

      {showText && (
        <textarea
          className='w-full h-40 p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-4'
          placeholder="Enter your review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      )}

      {showText && (
        <div className='flex justify-between'>
          <button
            onClick={() => {
              setShowText(!showText);
              sendReview();
            }}
            className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 self-center"
          >
            Send Review
          </button>
          <button
            onClick={() => {
              setShowText(!showText);
            }}
            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 self-center"
          >
            Cancel
          </button>
        </div>
      )}

      <div>
        {reviews.map((item) => (
          <div key={item.id} className='text-lg my-6 bg-white rounded-lg p-4 shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='text-xl font-semibold text-indigo-500'>Anonymous</h2>
              <div className='flex'>
                {item.timestamp.slice(0, 3).map((innerItem, innerIndex) => (
                  <div key={innerIndex} className='flex flex-col items-center ml-2'>
                    <span className='text-gray-800 text-xs'>{innerItem}</span>
                    {/* <span className='text-xs'>|</span> */}
                  </div>
                ))}
              </div>
            </div>
            <p className='text-gray-700 mb-2'>{item.comment}</p>
            {/* Add additional styles and content as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewAnime;

