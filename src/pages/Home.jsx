import MoviesList from 'components/MoviesList';
import { useSelector } from 'react-redux';

const Home = () => {
  const movies = useSelector(state => state.movies.items);
  console.log(movies);

  return <>{movies ? <MoviesList /> : <p>Нічого не знайдено...</p>}</>;
};

export default Home;
