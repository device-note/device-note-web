import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/GlobalStyle';
import { defaultTheme } from '@styles/theme';
import AppRouter from './routers';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
