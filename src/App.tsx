import { Route, Routes } from 'react-router-dom';

import GlobalStyles from 'components/GlobalStyle';
import Intro from 'pages/Intro/Intro';
import Login from 'pages/Login/Login';
import Completion from 'pages/SignUp/Completion';
import SignUp from 'pages/SignUp/SignUp';
import SignUpForm from 'pages/SignUp/SignUpForm';

function App() {
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
      </Routes>
    </>
  );
}

export default App;
