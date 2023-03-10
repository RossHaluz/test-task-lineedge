import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from 'redux/selectors';
import Grid from '@mui/material/Grid';
import MovieItem from 'components/MovieItem';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovieBySearch } from 'redux/operation';
import { ButtonList } from './MoviesList.styled';
import InfiniteScroll from 'react-infinite-scroll-component';

const MoviesList = () => {
  const movies = useSelector(getMovies);
  const dispatch = useDispatch();
  const [film] = useSearchParams();
  const filmName = film.get('name') || '';

  useEffect(() => {
    if (!filmName) {
      return;
    }
    dispatch(getMovieBySearch(filmName));
  }, [dispatch, filmName]);

  return (
    <>
      {movies && (
        <Grid container spacing={2}>
          {movies.map(({ imdbID, Title, Poster, Year }) => {
            return (
              <MovieItem
                key={imdbID}
                title={Title}
                img={Poster}
                year={Year}
                id={imdbID}
              />
            );
          })}
        </Grid>
      )}
      {movies && <ButtonList variant="contained">Load more</ButtonList>}
    </>
  );
};

export default MoviesList;
