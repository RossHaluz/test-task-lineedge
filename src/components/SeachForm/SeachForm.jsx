import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'redux/operation';
import { Button, SearchInput, Form } from './SeachForm.styled';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [film, setFilm] = useSearchParams();
  const filmName = film.get('name') || '';

  const handleSubmit = e => {
    e.preventDefault();
    setFilm({ name: e.currentTarget.searchValue.value });
  };

  useEffect(() => {
    dispatch(getMovieBySearch(filmName));
  }, [dispatch, filmName]);

  return (
    <Form onSubmit={handleSubmit}>
      <SearchInput type="text" name="searchValue" placeholder="Search film" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
