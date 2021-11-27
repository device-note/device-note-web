import { Route, Routes } from 'react-router';

import Home from '@pages/Home';

function PrivateRouter(): React.ReactElement {
  return (
    <Routes>
      <Route index={true} element={<Home />} />
    </Routes>
  );
}

export default PrivateRouter;
