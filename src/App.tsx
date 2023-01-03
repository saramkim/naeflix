import { Route, Routes } from 'react-router-dom';

import GlobalStyles from 'components/GlobalStyle';
import Account from 'pages/account/Account';
import EmailPopup from 'pages/account/popup/EmailPopup';
import PasswordPopup from 'pages/account/popup/PasswordPopup';
import Reauthentication from 'pages/account/popup/Reauthentication';
import UnregisterPopup from 'pages/account/popup/UnregisterPopup';
import Intro from 'pages/Intro/Intro';
import Login from 'pages/Login/Login';
import Completion from 'pages/SignUp/Completion';
import SignUp from 'pages/SignUp/SignUp';
import SignUpForm from 'pages/SignUp/SignUpForm';
import Loading from 'utils/Loading';

function App() {
  if (Loading()) return null;
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />}>
          <Route path='' element={<SignUpForm />} />
          <Route path='completion' element={<Completion />} />
        </Route>
        <Route path='account' element={<Account />}>
          <Route path='reauthentication' element={<Reauthentication />} />
          <Route path='email' element={<EmailPopup />} />
          <Route path='password' element={<PasswordPopup />} />
          <Route path='unregister' element={<UnregisterPopup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
