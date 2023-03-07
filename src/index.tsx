import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from 'components/ScrollToTop';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyle';
import theme from 'styles/theme';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
