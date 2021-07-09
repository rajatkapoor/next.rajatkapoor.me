import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";

const NavButton = ({ text, onClickNav, leftIcon }) => {
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      onClick={onClickNav}
      leftIcon={leftIcon}
    >
      <Text fontSize="xl">{text}</Text>
    </Button>
  );
};

export default NavButton;
