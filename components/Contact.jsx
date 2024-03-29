import {
  Flex,
  Text,
  Heading,
  VStack,
  Box,
  IconButton,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";
// import { IoMailOutline } from "react-icons/io";

const Contact = ({ refProp }) => {
  return (
    <VStack
      padding={{ md: 10 }}
      w={"full"}
      alignItems={{ base: "center", md: "center" }}
      ref={refProp}
    >
      <Heading
        size="4xl"
        fontFamily={"heroHeading"}
        fontWeight={"bold"}
        textStyle="gradient"
      >
        Contact
      </Heading>
      <Flex>
        <Text marginTop={8} fontSize="2xl" textAlign="center">
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </Text>
      </Flex>
      <Button
        as={Link}
        size="lg"
        textDecoration="underline"
        variant="link"
        colorScheme={"black"}
        padding={4}
        href={"mailto: hi@rajatkapoor.me"}
      >
        <Text fontSize="2xl">hi@rajatkapoor.me</Text>
      </Button>
    </VStack>
  );
};

export default Contact;
