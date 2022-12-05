// import PropTypes from 'prop-types';

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Button,
  ButtonThumb,
  Form,
  FormContainer,
  Input,
  Label,
} from './MovieSearchForm.styled';

const MovieSearchForm = ({ getQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    getQuery(searchQuery);

    setSearchQuery('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          Search a movie:
          <Input
            value={searchQuery}
            onChange={e => {
              const value = e.currentTarget.value;
              setSearchQuery(value);
              setSearchParams(value !== '' ? { q: value } : {});
            }}
            type="text"
            name="movies"
            placeholder="search query"
            autoComplete="off"
          />
        </Label>
        <ButtonThumb>
          <Button type="submit">Search</Button>
        </ButtonThumb>
      </Form>
    </FormContainer>
  );
};

MovieSearchForm.propTypes = {};

export default MovieSearchForm;
