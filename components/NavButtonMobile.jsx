import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

const MotionButton = motion(Button);
const NavButtonMobile = ({ text, onClickNav, toggleOpen, leftIcon }) => {
  return (
    <MotionButton
      variant="ghost"
      onClick={() => {
        toggleOpen();
        setTimeout(() => {
          onClickNav();
        }, 300);
      }}
      leftIcon={leftIcon}
      size="lg"
      p={16}
    >
      <Text fontSize="2xl">{text}</Text>
    </MotionButton>
  );
};

export default NavButtonMobile;
