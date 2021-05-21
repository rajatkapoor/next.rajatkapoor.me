import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/react";
import NavButton from "./NavButton";
import { responsive } from "../utils/styles";

const NavBar = ({ navItems }) => {
  return (
    <Flex
      maxWidth={responsive("80%", "80%", "80em")}
      flexGrow={1}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={"120px"}
      width={"100%"}
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
