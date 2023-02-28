import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import { Spirograph } from "../components/spirograph";

const Hero = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "1.4em",
  paddingTop: 64,
  position: "relative",
  zIndex: 12321,
});

const HeroText = styled.div({
  width: "74%",
  maxWidth: 1000,
});

const Tagline = styled.div({
  paddingTop: 20,
  lineHeight: "1.4em",
  opacity: 0.8,

  strong: {
    // textDecoration: "underline dashed #FF87CA",
  },
});

const Background = styled.div({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
});

const Links = styled.div({
  display: "flex",
  gap: 16,
  fontSize: "120%",
});

const HeadContainer = styled.div({
  paddingTop: 40,
  fontFamily: "Yeseva One",
  "@media screen and (max-width: 600px)": {
    fontSize: 36,
  },
  "@media screen and (min-width: 600px) and (max-width: 1600px)": {
    fontSize: "6vw",
  },
  "@media screen and (min-width: 1600px)": {
    fontSize: 96,
  },
});

const Home: NextPage = () => {
  return (
    <>
      <Background>
        <Spirograph></Spirograph>
      </Background>
      <Head>
        <title>Yarden Refaeli</title>
        <meta name="description" content="Yarden Refaeli personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <HeroText>
          <HeadContainer>Yarden Refaeli</HeadContainer>
          <Tagline>
            I&apos;m eating code for breakfast ever since I was a little kid. I
            love to create stuff using <strong>React</strong>,{" "}
            <strong>Redux</strong> and <strong>Node</strong>.
            <br />
            <br />
            I&apos;m a mission-driven fullstack developer with a passion for{" "}
            <strong>pixel-perfect design</strong>, <strong>teamwork</strong>,
            and <strong>bleeding-edge technology</strong>.
            <br />
            <br />
            <Links>
              <a href="https://github.com/yard2010">
                <i className="fa-brands fa-github-alt"></i>
              </a>
              <a href="https://www.linkedin.com/in/yarden-refaeli-02016916/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </Links>
          </Tagline>
        </HeroText>
      </Hero>
    </>
  );
};

export default Home;
