import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";

const NavButtonMobile = ({ text, onClickNav, onClose, leftIcon }) => {
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      onClick={() => {
        onClose();
        setTimeout(() => {
          onClickNav();
        }, 300);
      }}
      leftIcon={leftIcon}
    >
      <Text fontSize="xl">{text}</Text>
    </Button>
  );
};

export default NavButtonMobile;
