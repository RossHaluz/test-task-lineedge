import MoviesList from 'components/MoviesList';
import { useSelector } from 'react-redux';

const Home = () => {
  const movies = useSelector(state => state.movies.items);

  return <>{movies.length !== 0 && <MoviesList />}</>;
};

export default Home;
