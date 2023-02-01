import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import styled from 'styled-components';

import Header from './Header';

const MainLayout = styled.div`
  background-color: rgb(20, 20, 20);
  color: white;

  padding-top: 70px;

  @media screen and (max-width: 550px) {
    padding-top: 60px;
  }
`;

function Main() {
  return (
    <MainLayout>
      <Header />
      <Outlet />
      <Footer background='black' />
    </MainLayout>
  );
}

export default Main;
