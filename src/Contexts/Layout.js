import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  width: 360px;
  flex-flow: column;
  border: 1px solid;
`;

const Header = styled.div`
  height: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Logo = styled.span`
  padding-right: 8px;

  > span {
    width: 18px;
    height: 18px;
  }
`;
const Title = styled.h1`
  letter-spacing: -0.5px;
  font-size: 18px;
  margin-bottom: 0;
`;

const Body = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
  height: 495px;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    padding: 24px;
    /* overflow-y: scroll; */
    height: 95%;
  }
`;

const Footer = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px;

  > a {
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
      text-decoration: none;
    }

    > span {
      color: #a09ea2;
    }
    > b {
      color: #6c757da6;
    }
  }
`;

const Layout = ({ children, setPage, page }) => {
  return (
    <Wrapper>
      <Header>
        <TitleContainer>
          <Logo>
            <img src="icon16.png" alt="logo" />
          </Logo>
          <Title>XT [ Name ]</Title>
        </TitleContainer>
      </Header>

      <Body>
        <div>{children}</div>
      </Body>

      <Footer>
        <a
          href="https://chromext.app?utm_source=extension&utm_medium=popup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by </span>
          <b>chromeXT</b>
        </a>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
