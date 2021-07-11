import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);
const NavButton = ({ text, onClickNav, leftIcon }) => {
  return (
    <MotionButton
      colorScheme="gray"
      variant="unstyled"
      onClick={onClickNav}
      leftIcon={leftIcon}
      display="inline-flex"
      whileHover={{
        textShadow: "0px 0px 12px rgba(175, 175, 175, 0.7)",
        transition: { duration: 0.2 },
      }}
    >
      <Text fontSize="xl">{text}</Text>
    </MotionButton>
  );
};

export default NavButton;
