import { HelmetProvider } from 'react-helmet-async';

import GlobalStyle from './GlobalStyle';
import AppRouter from './routers';

function App() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;
