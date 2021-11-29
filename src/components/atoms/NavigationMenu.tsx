import { PropsWithChildren } from 'react';
import type { To } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface NavigationMenuProps {
  to: To;
}

function NavigationMenu({
  to,
  children,
}: PropsWithChildren<NavigationMenuProps>): React.ReactElement {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
}

const StyledNavLink = styled(NavLink)`
  ${({ theme: { font } }) => `
      ${font.size.base}
      ${font.weight.bold}
    `}
`;

export default NavigationMenu;
