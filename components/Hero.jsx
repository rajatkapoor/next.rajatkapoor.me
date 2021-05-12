import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <VStack>
      <Heading textTransform={"uppercase"}>Rajat Kapoor</Heading>
      <Text>Software developer</Text>
      <SocialLinks />
    </VStack>
  );
};

export default Hero;
