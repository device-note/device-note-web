import styled from "styled-components";

function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <FooterContentContainer>Footer</FooterContentContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  flex: 0 0 auto;
  width: 100%;
  margin: auto auto 0;
  background-color: #f5f5f5;
`;

const FooterContentContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.breakpoint.size.xl};
  padding: 20px 32px;
  margin: 0 auto;
`;

export default Footer;
