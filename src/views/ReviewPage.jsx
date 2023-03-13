import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as cinemaApi from '../services/cinema-api';

const ReviewPage = () => {
  const [reviews, setReviews] = useState();
  const { filmId } = useParams();

  console.log(reviews);

  useEffect(() => {
    cinemaApi.fetchOnFilmReview(filmId).then(setReviews);
  }, []);

  return (
    <ul>
      {reviews?.map(review => (
        <li key={review.id}>
          <span>{review.author}</span>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewPage;
