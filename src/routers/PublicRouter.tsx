import { Route, Routes } from 'react-router';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Signup from '@pages/Signup';

function PublicRouter(): React.ReactElement {
  return (
    <Routes>
      <Route index={true} element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default PublicRouter;
