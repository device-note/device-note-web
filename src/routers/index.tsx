import Footer from '@components/organisms/Footer';
import Header from '@components/organisms/Header';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { Main } from './styles';

const isLoggedIn = false;

function AppRouter(): React.ReactElement {
  return (
    <>
      <Header />
      <Main>{isLoggedIn ? <PrivateRouter /> : <PublicRouter />}</Main>
      <Footer />
    </>
  );
}

export default AppRouter;
