import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import SectionWrapper from "../components/SectionWrapper";
import { useRef } from "react";
import Experience from "../components/Experience";
import { FiExternalLink } from "react-icons/fi";

const scrollToRef = (ref) => () => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  const topRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);

  const navItems = [
    {
      text: "Work",
      onClickNav: scrollToRef(workRef),
    },
    {
      text: "Experience",
      onClickNav: scrollToRef(experienceRef),
    },
    {
      text: "Blog",
      onClickNav: () => {
        window.location = "https://blog.rajatkapoor.me";
      },
      leftIcon: <FiExternalLink />,
    },
    {
      text: "Contact",
      onClickNav: () => {
        console.log("contact clicked");
      },
    },
  ];
  return (
    <>
      <NavBar navItems={navItems} onLogoClick={scrollToRef(topRef)} />
      <Container maxW={"7xl"} ref={topRef}>
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
