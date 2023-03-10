import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from 'redux/selectors';
import Grid from '@mui/material/Grid';
import MovieItem from 'components/MovieItem';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovieBySearch } from 'redux/operation';
import { Button } from '@mui/material';

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
      <Button variant="contained">Load more</Button>
    </>
  );
};

export default MoviesList;
