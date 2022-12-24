import { Route, Routes } from 'react-router-dom';

import GlobalStyles from 'components/GlobalStyle';
import Intro from 'pages/Intro/Intro';
import Login from 'pages/Login/Login';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
