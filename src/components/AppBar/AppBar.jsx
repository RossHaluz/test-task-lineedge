import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SearchForm from 'components/SeachForm';
import { Header, Logo, LogoTitle, LogoImg } from './AppBar.styled';
import { Container } from '@mui/system';

const AppBarSearchForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Container fixed>
          <Header>
            <Logo to="/">
              <LogoImg />
              <LogoTitle>Movies</LogoTitle>
            </Logo>
            <SearchForm />
          </Header>
        </Container>
      </AppBar>
    </Box>
  );
};

export default AppBarSearchForm;
