import { Flex, Text, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";
import WorkCard from "./WorkCard";
import mocklyImage from "../assets/mockly-a.png";
import timelyImage from "../assets/timely-b.png";
import scirubyImage from "../assets/sciruby-b.png";
import simpleCVImage from "../assets/simplecv-a.png";
import rangeitImage from "../assets/rangeit-a.png";
import ltkImage from "../assets/ltk-a.png";
import { WORKS } from "../data/work";
const Work = ({ refProp }) => {
  return (
    <Flex
      w={"full"}
      maxWidth="5xl"
      direction="column"
      align="center"
      ref={refProp}
    >
      <Heading
        size="4xl"
        fontFamily={"heroHeading"}
        fontWeight={"bold"}
        textStyle="gradient"
      >
        Work
      </Heading>
      <Text marginTop={8} fontSize="2xl" textAlign="center">
        Some of my interesting projects
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        marginTop={{ base: 8, md: 16 }}
        placeItems={"center"}
        flexWrap={"wrap"}
        justifyContent="space-evenly"
      >
        {WORKS.map((work, i) => {
          const { slug } = work;
          return <WorkCard {...work} key={slug} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Work;
