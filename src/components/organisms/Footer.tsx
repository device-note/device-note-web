import styled from "styled-components";

import Copyright from "@components/atoms/Copyright";

function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <Copyright />
      </FooterContentContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  flex: 0 0 auto;
  width: 100%;
  margin: auto auto 0;
  background-color: ${({ theme: { colors } }) => colors.gray[100]};
`;

const FooterContentContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.breakpoint.size.xl};
  padding: 20px 32px;
  margin: 0 auto;

  ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export default Footer;
