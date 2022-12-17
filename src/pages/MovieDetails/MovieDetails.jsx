import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Genres from 'components/Genres/Genres';
import LinkGoBack from 'components/LinkGoBack/LinkGoBack';
import Overview from 'components/Overview/Overview';
import Popularity from 'components/Popularity/Popularity';
import PosterImage from 'components/PosterImage/PosterImage';
import Status from 'components/Status/Status';
import Title from 'components/Title/Title';
import useMovieDetails from 'hooks/useMovieDetails';
import { useLocation } from 'react-router-dom';
import {
  DescriptionThumb,
  DetailContainer,
  InfoThumb,
  MovieDetailsThumb,
} from './MovieDetails.styled.js';

const MovieDetails = () => {
  const [
    { title, status, overview, poster_path, genres, release_date, popularity },
  ] = useMovieDetails([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <DetailContainer>
      <LinkGoBack backLinkHref={backLinkHref} />
      <MovieDetailsThumb>
        {poster_path && <PosterImage poster_path={poster_path} />}

        <DescriptionThumb>
          {title && release_date && (
            <Title title={title} release_date={release_date} />
          )}
          {status && <Status status={status} />}
          {popularity && <Popularity popularity={popularity} />}
          {overview && <Overview overview={overview} />}
          {genres && genres.length > 0 && <Genres genres={genres} />}
        </DescriptionThumb>
      </MovieDetailsThumb>
      <InfoThumb>
        <AdditionalInfo backLinkHref={backLinkHref} />
      </InfoThumb>
    </DetailContainer>
  );
};

export default MovieDetails;
