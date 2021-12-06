import "../styles/reset.css";
import "../styles/global.css";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";

const Wrapper = styled.div({
  margin: "0 auto",
  padding: "0 16px",
});

const HeaderWrapper = styled.div({
  height: 44,
  backgroundColor: "#212121",
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
});

const Header = styled.div({
  padding: "0 16px",
  fontSize: "20px",
  color: "#F6F6F6",
  flex: 1,
});

const Footer = styled.div({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderWrapper>
        <Header>Yarden Refaeli</Header>
      </HeaderWrapper>
      <Wrapper>
        <Component {...pageProps} />
        <Footer></Footer>
      </Wrapper>
    </>
  );
}

export default MyApp;
