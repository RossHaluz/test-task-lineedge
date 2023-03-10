import AppBarSearchForm from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBarSearchForm />
      <Suspense fallback={'Loading...'}>
        <MainContainer fixed>
          <Outlet />
        </MainContainer>
      </Suspense>
    </>
  );
};

export default Layout;
