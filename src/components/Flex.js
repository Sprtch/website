import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

export const Header = styled.header``;

export const Page = styled.div`
  flex: 1 1 auto;
`;

export const Footer = styled.footer`
  flex: 0 1 40px;
`;

export const PageHeightCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    height: 20vh;
  }
  @media (min-width: 992px) {
    height: 80vh;
  }
`;
