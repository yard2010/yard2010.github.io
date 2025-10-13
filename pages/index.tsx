import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { Spirograph } from "../components/spirograph";

const Hero = styled.div({
  display: "flex",
  justifyContent: "start",
  fontSize: "1.2em",
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
  lineHeight: "1.2em",
  opacity: 0.8,
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
  paddingTop: 8,
});

const ContactButton = styled.a({
  display: "inline-block",
  marginTop: 32,
  marginBottom: 24,
  padding: "16px 32px",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "rgba(100, 100, 255, 0.8)",
  border: "2px solid rgba(150, 150, 255, 0.6)",
  borderRadius: 8,
  textDecoration: "none",
  transition: "all 0.15s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(120, 120, 255, 0.9)",
    borderColor: "rgba(180, 180, 255, 0.8)",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(100, 100, 255, 0.3)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
});

const HeadContainer = styled.div({
  paddingTop: 40,
  fontFamily: "Merriweather",
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
            I&apos;ve been eating code for breakfast ever since I was a little
            kid. I love to create stuff using <strong>React</strong>,{" "}
            <strong>Redux</strong> and <strong>Node</strong>.
            <br />
            <br />
            I&apos;m a mission-driven fullstack developer with a passion for{" "}
            <strong>pixel-perfect design</strong>, <strong>teamwork</strong>,
            and <strong>bleeding-edge technology</strong>.
            <br />
            <ContactButton href="mailto:yard2010@gmail.com">
              Let&apos;s talk
            </ContactButton>
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
