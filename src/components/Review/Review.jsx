import { getMovieReview } from 'API/moviesdbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Review = props => {
  const [review, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReview(movieId).then(({ results }) => setReview(results));
  }, [movieId]);

  console.log(review);

  return (
    <div>
      {review.length > 0
        ? review.map(({ id, author, content }) => (
            <div key={id}>
              <div>
                <p>{author}</p>
              </div>
              <div>
                <p>{content}</p>
              </div>
            </div>
          ))
        : 'does not have any review'}
    </div>
  );
};

Review.propTypes = {};

export default Review;
