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
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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

const MotionFlex = motion(Flex);
const variants = {
  open: {
    height: "100vh",
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.2,
      opacity: { delay: 0.1, duration: 0.5 },
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionFlex
      w="full"
      px={{ base: 2, md: 8, lg: 32 }}
      backgroundColor="rgba(255,255,255,0.1)"
      backdropFilter={
        isOpen ? "blur(16px) saturate(110%)" : "blur(8px) saturate(120%)"
      }
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
          </HStack>
          <Box display={{ base: "block", md: "none" }}>
            <NavbarToggle toggle={isOpen ? onClose : onOpen} />
          </Box>
        </Flex>
        <MotionFlex
          display={{ base: "none" }}
          variants={variants}
          height={0}
          flexGrow={1}
          marginTop={"12px"}
          width={"full"}
          left={0}
          alignItems="center"
          flexDirection="column"
          // py={16}
        >
          {navItems.map((navItem, i) => (
            <NavButtonMobile {...navItem} key={i} />
          ))}
        </MotionFlex>
      </Container>
    </MotionFlex>
  );
};

export default NavBar;
