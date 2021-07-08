import React from "react";
import { Button, Text } from "@chakra-ui/react";

const NavButton = ({ text }) => {
  return (
    <Button colorScheme="gray" variant="ghost">
      <Text fontSize="xl">{text}</Text>
    </Button>
  );
};

export default NavButton;
