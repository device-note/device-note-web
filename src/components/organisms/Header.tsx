import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import NavigationMenu from '@components/atoms/NavigationMenu';

function Header(): React.ReactElement {
  return (
    <Container>
      <StickyContainer>
        <NavigationContainer>
          <NavigationLogo to={'/'}>
            <h1>DeviceNote</h1>
          </NavigationLogo>
          <NavigationBar>
            <NavigationMenu to={'/login'}>로그인</NavigationMenu>
            <NavigationMenu to={'/signup'}>회원가입</NavigationMenu>
          </NavigationBar>
        </NavigationContainer>
      </StickyContainer>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  width: 100%;
`;

const StickyContainer = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
`;

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoint.size.xl};
`;

const NavigationLogo = styled(NavLink)`
  ${({ theme: { font } }) => `
    ${font.size.base}
    ${font.weight.bold}
  `}
`;

const NavigationBar = styled.div``;

export default Header;
