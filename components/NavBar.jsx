import React from "react";
import {
  Flex,
  HStack,
  Box,
  IconButton,
  VStack,
  useColorModeValue,
  useDisclosure,
  Button,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import NavButton from "./NavButton";
import NavbarToggle from "./NavbarToggle";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NavButtonMobile from "./NavButtonMobile";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { MotionIconButton } from "./motion";
import DarkModeToggle from "./DarkModeToggle";

const MotionFlex = motion(Flex);
const variants = {
  open: {
    height: "100vh",
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.3,
      opacity: { delay: 0.2, duration: 0.3 },
      display: { delay: 0.2 },
    },
  },
  closed: {
    height: "0px",
    opacity: 0,
    display: "none",
    transition: { duration: 0.2, display: { delay: 0.2 } },
  },
};

const NavBar = ({ navItems, onLogoClick }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionFlex
      w="full"
      px={{ base: 2, md: 8, lg: 32 }}
      backgroundColor="rgba(255,255,255,0.1)"
      backdropFilter={"blur(16px) saturate(110%)"}
      outline="1px solid rgba(209, 213, 219, 0.3)"
      position="fixed"
      animate={isOpen ? "open" : "closed"}
      zIndex={100}
    >
      <Container
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={"7xl"}
        flexDirection="column"
      >
        <Flex w="full" height="64px" direction="row" alignItems="center">
          <Box flexGrow={1}>
            <Logo onClick={onLogoClick} />
          </Box>
          <HStack spacing={8} display={{ base: "none", md: "block" }}>
            {navItems.map((navItem, i) => {
              return <NavButton {...navItem} key={i} />;
            })}
            {/* <DarkModeToggle /> */}
          </HStack>
          <Box display={{ base: "flex", md: "none" }}>
            {/* <DarkModeToggle /> */}
            <NavbarToggle toggle={isOpen ? onClose : onOpen} />
          </Box>
        </Flex>
        <MotionFlex
          variants={variants}
          height={0}
          flexGrow={1}
          marginTop={"12px"}
          width={"full"}
          left={0}
          alignItems="center"
          flexDirection="column"
        >
          {navItems.map((navItem, i) => (
            <NavButtonMobile {...navItem} key={i} onClose={onClose} />
          ))}
        </MotionFlex>
      </Container>
    </MotionFlex>
  );
};

export default NavBar;
