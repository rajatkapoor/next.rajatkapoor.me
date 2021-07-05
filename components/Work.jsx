import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <VStack>
      <Heading fontFamily={"heroHeading"}>Work</Heading>
      <Text fontSize={"lg"}>Some of my projects</Text>
    </VStack>
  );
};

export default Hero;
