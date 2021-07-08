import React from "react";
import { Button, Text } from "@chakra-ui/react";

const NavButton = ({ text, refProp }) => {
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      onClick={() => {
        console.log(refProp);
        refProp.current.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <Text fontSize="xl">{text}</Text>
    </Button>
  );
};

export default NavButton;
