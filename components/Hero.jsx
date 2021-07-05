import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <VStack>
      <Heading fontFamily={"heroHeading"}>Hey 👋</Heading>
      <Heading fontFamily={"heroHeading"}>I'm Rajat Kapoor</Heading>
      <Text fontSize={"lg"}>I create delightful products for the web</Text>
      <SocialLinks />
    </VStack>
  );
};

export default Hero;
