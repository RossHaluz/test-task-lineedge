import { useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'redux/operation';
import { useDispatch, useSelector } from 'react-redux';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const movie = useSelector(state => state.movies.itemDetails);
  const location = useLocation();
  const locRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      <Link to={locRef.current}>Go bach</Link>
      {movie && (
        <>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </>
      )}
    </>
  );
};

export default MovieDetails;
