import Header from '@components/organisms/Header';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const isLoggedIn = false;

function AppRouter(): React.ReactElement {
  return (
    <>
      <Header />
      {isLoggedIn ? <PrivateRouter /> : <PublicRouter />}
    </>
  );
}

export default AppRouter;
