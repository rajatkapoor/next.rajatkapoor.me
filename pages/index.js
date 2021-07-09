import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import SectionWrapper from "../components/SectionWrapper";
import { useRef } from "react";
import Experience from "../components/Experience";

export default function Home() {
  const meRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);

  const navItems = [
    {
      text: "Me",
      refProp: meRef,
    },
    {
      text: "Work",
      refProp: workRef,
    },
    {
      text: "Experience",
      refProp: experienceRef,
    },
    {
      text: "Blog",
      externalLink: "https://blog.rajatkapoor.me",
    },
    {
      text: "Contact",
    },
  ];
  return (
    <>
      <Head>
        <title>Rajat Kapoor - Full stack developer</title>
        <meta
          name="description"
          content="Rajat Kapoor is a full stack developer from India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar navItems={navItems} />
      <Container maxW={"7xl"} ref={meRef}>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <SectionWrapper>
          <Work refProp={workRef} />
        </SectionWrapper>
        <SectionWrapper>
          <Experience refProp={experienceRef} />
        </SectionWrapper>
      </Container>
    </>
  );
}
