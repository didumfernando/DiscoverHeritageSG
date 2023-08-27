import React, {useState} from "react";
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Bottom from './Bottom';
import '../../src/App.css';

const reviewsData = [
    {
      id: 1,
      name: 'John Doe',
      review: 'This product is amazing! I can\'t believe how well it works.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'I\'m quite satisfied with this product. It met my expectations.',
      rating: 4,
    },
    // Add more reviews here...
  ];

const Review = () => {
    const [reviews, setReviews] = useState(reviewsData);
    return(
        <div className="App">
            <h1>Customer Reviews</h1>
             <div className="reviews-list">
                {reviews.map(review => (
                    <div className="review" key={review.id}>
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                        <p>Rating: {review.rating}/5</p>
                    </div>
        ))}
            </div>
        <Bottom />
    </div>
  );
}
            
  

export default Review;