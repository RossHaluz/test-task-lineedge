import styled from '@emotion/styled';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export const Header = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const LogoImg = styled(LocalMoviesIcon)`
  fill: white;
  font-size: 26px;
  margin-right: 8px;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.h2`
  color: white;
  font-size: 16px;
`;
