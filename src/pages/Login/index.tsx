import { Helmet } from 'react-helmet-async';

function Login(): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>로그인 - Device Note</title>
      </Helmet>
      <h1>로그인</h1>
    </div>
  );
}

export default Login;
