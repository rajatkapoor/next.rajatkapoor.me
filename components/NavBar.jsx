import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/react";
import NavButton from "./NavButton";

const NavBar = ({ navItems }) => {
  return (
    <Flex
      flexGrow={1}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={"120px"}
      width={"100%"}
    >
      <Text fontSize="xl">Rajat Kapoor</Text>
      <HStack spacing={8} display={{ base: "none", md: "block" }}>
        {navItems.map((navItem, i) => {
          return (
            <NavButton text={navItem.text} refProp={navItem.refProp} key={i} />
          );
        })}
      </HStack>
    </Flex>
  );
};

export default NavBar;
