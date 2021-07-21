import React from "react";
import { MotionIconButton } from "./motion";
import { useColorMode } from "@chakra-ui/react";

import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <MotionIconButton
      isActive={false}
      isRound
      variant="outlined"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <FaSun size={20} /> : <IoMoon size={22} />}
    />
  );
};

export default DarkModeToggle;
