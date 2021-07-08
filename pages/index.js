import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import SectionWrapper from "../components/SectionWrapper";

const navItems = [
  {
    text: "About",
  },
  {
    text: "Projects",
  },
  {
    text: "Blog",
  },
  {
    text: "Contact",
  },
];

export default function Home() {
  return (
    <Container maxW={"8xl"}>
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
        <Work />
      </SectionWrapper>
    </Container>
  );
}
