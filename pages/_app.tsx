import "../styles/reset.css";
import "../styles/global.css";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import Head from "next/head";

const Wrapper = styled.div({
  margin: "0 auto",
  paddingLeft: 88,
});

const Footer = styled.div({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/e03c220e39.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
        <Footer></Footer>
      </Wrapper>
    </>
  );
}

export default MyApp;
