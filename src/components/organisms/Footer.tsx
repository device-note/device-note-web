import styled from 'styled-components';

function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <FooterContentContainer>Footer</FooterContentContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  margin-top: auto;
  flex: 0 0 auto;
  margin: 0 auto;
`;

const FooterContentContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.size.xl};
`;

export default Footer;
