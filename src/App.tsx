import { Route, Routes } from 'react-router-dom';

import Loading from 'components/Loading';
import PrivateRoutes from 'components/PrivateRoutes';
import { useLoading } from 'hooks/useLoading';
import Account from 'pages/account/Account';
import EmailPopup from 'pages/account/popup/EmailPopup';
import NicknamePopup from 'pages/account/popup/NicknamePopup';
import PasswordPopup from 'pages/account/popup/PasswordPopup';
import PhoneNumberPopup from 'pages/account/popup/PhoneNumberPopup';
import ProfilePopup from 'pages/account/popup/ProfilePopup';
import Reauthentication from 'pages/account/popup/Reauthentication';
import RegisterPasswordPopup from 'pages/account/popup/RegisterPasswordPopup';
import UnregisterPopup from 'pages/account/popup/UnregisterPopup';
import Intro from 'pages/intro/Intro';
import HelpPopup from 'pages/login/HelpPopup';
import Login from 'pages/login/Login';
import PhoneNumberLoginPopup from 'pages/login/PhoneNumberLoginPopup';
import Category from 'pages/Main/category/Category';
import Genre from 'pages/Main/genre/Genre';
import Home from 'pages/Main/home/Home';
import Main from 'pages/Main/Main';
import MovieDetail from 'pages/Main/movie/MovieDetail';
import PersonDetail from 'pages/Main/person/PersonDetail';
import Search from 'pages/Main/search/Search';
import NotFound from 'pages/NotFound';
import Completion from 'pages/signup/Completion';
import SignUp from 'pages/signup/SignUp';
import SignUpForm from 'pages/signup/SignUpForm';

function App() {
  const loading = useLoading();

  if (loading) return <Loading />;

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<Login />}>
          <Route path='phone-number' element={<PhoneNumberLoginPopup />} />
          <Route path='help' element={<HelpPopup />} />
        </Route>
        <Route path='/signup' element={<SignUp />}>
          <Route path='' element={<SignUpForm />} />
          <Route path='completion' element={<Completion />} />
        </Route>
      </Route>
      <Route element={<PrivateRoutes authentication />}>
        <Route path='/account' element={<Account />}>
          <Route path='reauthentication' element={<Reauthentication />} />
          <Route path='email' element={<EmailPopup />} />
          <Route path='password' element={<PasswordPopup />} />
          <Route path='phone-number' element={<PhoneNumberPopup />} />
          <Route path='nickname' element={<NicknamePopup />} />
          <Route path='profile' element={<ProfilePopup />} />
          <Route path='unregister' element={<UnregisterPopup />} />
          <Route path='register-password' element={<RegisterPasswordPopup />} />
        </Route>
        <Route path='/main' element={<Main />}>
          <Route path='' element={<Home />} />
          <Route path=':category' element={<Category />} />
          <Route path='search' element={<Search />} />
          <Route path='movie/:id' element={<MovieDetail />} />
          <Route path='movie/:id/:category' element={<Category />} />
          <Route path='person/:id' element={<PersonDetail />} />
          <Route path='person/:id/:category' element={<Category />} />
          <Route path='genre' element={<Genre />} />
          <Route path='genre/:genre' element={<Genre />} />
        </Route>
      </Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
