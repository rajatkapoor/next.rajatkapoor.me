import React from "react";
import { Flex, Text, HStack, Heading, Container } from "@chakra-ui/react";
import NavButton from "./NavButton";

const NavBar = ({ navItems }) => {
  return (
    <Flex
      w="full"
      flexGrow={1}
      alignItems={"center"}
      justifyContent={"space-around"}
      height={"120px"}
      width={"100%"}
    >
      <Heading size={"md"} fontFamily={"heroHeading"}>
        Rajat Kapoor
      </Heading>
      <HStack spacing={8} display={{ base: "none", md: "block" }}>
        {navItems.map((navItem, i) => {
          return <NavButton {...navItem} key={i} />;
        })}
      </HStack>
    </Flex>
  );
};

export default NavBar;
