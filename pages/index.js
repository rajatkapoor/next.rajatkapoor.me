import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Contact from "../components/Contact";
import SocialLinks from "../components/SocialLinks";
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
  const contactRef = useRef(null);

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
      onClickNav: scrollToRef(contactRef),
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
        <SectionWrapper>
          <Contact refProp={contactRef} />
        </SectionWrapper>
        <SectionWrapper>
          <SocialLinks my={16} />
        </SectionWrapper>
      </Container>
    </>
  );
}
