import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SearchForm from 'components/SeachForm';
import { Header } from './AppBar.styled';

const AppBarSearchForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Header>
          <SearchForm />
        </Header>
      </AppBar>
    </Box>
  );
};

export default AppBarSearchForm;
