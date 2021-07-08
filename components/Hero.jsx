import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <VStack
      padding={{ md: 16 }}
      w={"full"}
      alignItems={{ base: "center", md: "center" }}
    >
      <Heading fontFamily={"heroHeading"} textAlign={"center"}>
        Hey 👋
      </Heading>
      <Heading fontFamily={"heroHeading"} textAlign={"center"}>
        I'm Rajat Kapoor
      </Heading>
      <Text fontSize={"lg"} textAlign={"center"}>
        I create delightful products for the web
      </Text>
      <Flex px={{ md: 8 }} py={{ base: 8 }}>
        <SocialLinks my={16} />
      </Flex>
    </VStack>
  );
};

export default Hero;