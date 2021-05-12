import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/react";
import NavButton from "./NavButton";
import { responsive } from "../utils/styles";

const NavBar = ({ navItems }) => {
  return (
    <Flex
      maxWidth={responsive("80%", "80%", "80em")}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexGrow={1}
      height={"120px"}
    >
      <Text fontSize="xl">Rajat Kapoor</Text>
      <HStack spacing={8}>
        {navItems.map((navItem) => {
          return <NavButton text={navItem.text} />;
        })}
      </HStack>
    </Flex>
  );
};

export default NavBar;
