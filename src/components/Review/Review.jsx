// import PropTypes from 'prop-types';

import useMovieReview from 'hooks/useMovieReview';
import styled from 'styled-components';

const Review = props => {
  const [review] = useMovieReview([]);

  return (
    <ReviewThumb>
      {review.length > 0
        ? review.map(({ id, author, content }) => (
            <DescriptionThumb key={id}>
              <AuthorThumb>
                <Author>Author: </Author>
                {author}
              </AuthorThumb>
              <ContentThumb>
                <Content>Description: </Content>
                {content}
              </ContentThumb>
            </DescriptionThumb>
          ))
        : 'there are no reviews'}
    </ReviewThumb>
  );
};

Review.propTypes = {};

export default Review;

const ReviewThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DescriptionThumb = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px black;
`;
const AuthorThumb = styled.div``;
const ContentThumb = styled.div``;
const Author = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const Content = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
