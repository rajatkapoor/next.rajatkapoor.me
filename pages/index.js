import Head from "next/head";
import Image from "next/image";
import { Box, HStack, Text, Flex, Grid, Button } from "@chakra-ui/react";
import { responsive } from "./_theme";
import NavButton from "../components/NavButton";
import NavBar from "../components/NavBar";

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
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent="center"
      className="container"
    >
      <Head>
        <title>Rajat Kapoor - Full stack developer</title>
        <meta
          name="description"
          content="Rajat Kapoor is a full stack developer from India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar navItems={navItems} />
    </Flex>
  );
}
