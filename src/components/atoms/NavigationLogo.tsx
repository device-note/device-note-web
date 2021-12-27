import { PropsWithChildren } from "react";
import type { To } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface NavigationLogoProps {
  to: To;
}

function NavigationLogo({
  to,
  children,
}: PropsWithChildren<NavigationLogoProps>): React.ReactElement {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
}

const StyledNavLink = styled(NavLink)`
  ${({ theme: { font } }) => `
      ${font.size.lg}
      ${font.weight.bold}
    `}
  margin: 0 8px;
  color: ${({ theme: { colors } }) => colors.gray[800]};
`;

export default NavigationLogo;
