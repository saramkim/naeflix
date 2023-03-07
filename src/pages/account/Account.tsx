import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import styled from 'styled-components';

import Body from './Body';
import Header from './Header';

const AccountLayout = styled.div`
  background-color: ${({ theme }) => theme.color.lightGray};
  padding-top: 70px;

  @media screen and (max-width: 550px) {
    padding-top: 60px;
  }
`;

function Account() {
  return (
    <AccountLayout>
      <Header />
      <Body />
      <Footer />
      <Outlet />
    </AccountLayout>
  );
}

export default Account;
