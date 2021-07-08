import { Flex, Text, Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";

const Hero = ({ refProp }) => {
  return (
    <VStack
      padding={{ md: 16 }}
      w={"full"}
      alignItems={{ base: "center", md: "center" }}
      ref={refProp}
    >
      <Heading fontFamily={"heroHeading"} textAlign={"center"}>
        Hey 👋
      </Heading>
      <Heading fontFamily={"heroHeading"} textAlign={"center"}>
        I'm{" "}
        <Text d={"inline"} textStyle="gradient">
          Rajat Kapoor
        </Text>
      </Heading>
      <Text fontSize={"lg"} textAlign={"center"}>
        I create delightful products for the web
      </Text>
      <Text fontSize={"lg"} textAlign={"center"}>
        I occasionaly write a blog
      </Text>
      <Flex px={{ md: 8 }} py={{ base: 8 }}>
        <SocialLinks my={16} />
      </Flex>
    </VStack>
  );
};

export default Hero;
