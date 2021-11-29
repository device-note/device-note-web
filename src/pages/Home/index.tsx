import { Helmet } from 'react-helmet-async';

function Home(): JSX.Element {
  return (
    <div style={{ height: 20000 }}>
      <Helmet>
        <title>Device Note</title>
      </Helmet>
      <h1>홈</h1>
    </div>
  );
}

export default Home;
