import { Link } from 'react-router-dom';

import * as S from './styles';

function Header(): React.ReactElement {
  return (
    <S.Container>
      <Link to={'/'}>
        <h1>DeviceNote</h1>
      </Link>
      <nav>
        <Link to={'/login'}>로그인</Link>
        <Link to={'/signup'}>회원가입</Link>
      </nav>
    </S.Container>
  );
}

export default Header;
