import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import SectionWrapper from "../components/SectionWrapper";
import { useRef } from "react";

export default function Home() {
  const meRef = useRef(null);
  const workRef = useRef(null);

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
    },
    {
      text: "Blog",
    },
    {
      text: "Contact",
    },
  ];
  return (
    <Container maxW={"8xl"} ref={meRef}>
      <Head>
        <title>Rajat Kapoor - Full stack developer</title>
        <meta
          name="description"
          content="Rajat Kapoor is a full stack developer from India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar navItems={navItems} />
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <Work refProp={workRef} />
      </SectionWrapper>
    </Container>
  );
}
