import { Route, Routes } from 'react-router';

import Home from '@pages/Home';

function AppRouter(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
