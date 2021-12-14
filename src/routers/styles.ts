import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex: 1;
  max-width: ${({ theme }) => theme.breakpoint.size.xl};
  width: 100%;
  padding: 0 32px;
  margin: 32px auto auto;
`;
