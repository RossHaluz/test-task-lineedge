import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { CardTitle, CardDesc } from './MovieItem.styled';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ img, title, year, id }) => {
  const location = useLocation();

  return (
    <Grid item xs={12} md={4}>
      <Link to={`movies/${id}`} state={{ from: location }}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="500" image={img} alt={title} />
            <CardContent>
              <CardTitle gutterBottom variant="h2" component="p">
                {title}
              </CardTitle>
              <CardDesc variant="h2" component="p">
                Year: {year}
              </CardDesc>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default MovieItem;
