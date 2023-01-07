import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import Body from './Body';
import Header from './Header';

const AccountLayout = styled.div`
  background-color: ${STYLE.ACCOUNT_COLOR};
  padding-top: 70px;
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
