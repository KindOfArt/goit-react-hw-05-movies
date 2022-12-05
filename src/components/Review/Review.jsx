// import PropTypes from 'prop-types';

import useMovieReview from 'hooks/useMovieReview';

const Review = props => {
  const [review] = useMovieReview([]);

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
        : 'there are no reviews'}
    </div>
  );
};

Review.propTypes = {};

export default Review;
