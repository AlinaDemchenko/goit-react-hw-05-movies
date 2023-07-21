import { StyledReviews, StyledReview } from './Reviews.styled';
import { requestReview } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const data = await requestReview(movieId);
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <StyledReviews>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <StyledReview className='review' key={review.id}>
              <h3>{review.author}</h3>
              <span>{review.created_at}</span>
              <p>{review.content}</p>
            </StyledReview>
          ))}
        </ul>
      )}
      {loading && <Loader />}
    </StyledReviews>
  );
};

export default Reviews;

// "We don't have any reviews for this movie"
