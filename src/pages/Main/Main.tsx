import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import styled from 'styled-components';

import Header from './Header';
import Movie from './Movie';

const MainLayout = styled.div`
  background-color: black;
  color: white;
  padding-top: 70px;
`;

function Main() {
  return (
    <MainLayout>
      <Header />
      <Outlet />
      <Footer />
    </MainLayout>
  );
}

export default Main;
