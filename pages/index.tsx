import styled from "@emotion/styled";
import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

const Hero = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "1.4em",
  paddingTop: 64,
});

const HeroText = styled.div({
  width: "74%",
});

const Hey = styled.div({
  fontFamily: "monospace",
  fontSize: "2.4em",
});

const Tagline = styled.div({
  paddingTop: 20,
  lineHeight: "1.4em",

  strong: {
    textDecoration: "underline dashed #FF87CA",
  },
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yarden Refaeli</title>
        <meta name="description" content="Yarden Refaeli personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <HeroText>
          <Hey>Hey,</Hey>
          <Tagline>
            I&apos;m Yarden, a mission-driven full stack developer with a
            passion for <strong>pixel-perfect design</strong>,{" "}
            <strong>teamwork</strong>, and{" "}
            <strong>bleeding-edge technology</strong>.
            <br />
            <br />
            I&apos;m eating code for breakfast ever since I was a little kid. I
            love to create stuff using <strong>React</strong>,{" "}
            <strong>Redux</strong> and <strong>Node</strong>.
          </Tagline>
        </HeroText>
      </Hero>
    </>
  );
};

export default Home;
