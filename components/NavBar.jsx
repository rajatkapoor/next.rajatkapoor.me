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
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavButton from "./NavButton";
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

const NavBar = ({ navItems, onLogoClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="full"
      flexGrow={1}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={"64px"}
      px={{ base: 8, md: 8, lg: 32 }}
      backgroundColor="rbga(255,255,255,0.1)"
      backdropFilter={"blur(16px) saturate(180%)"}
      border="1px solid rgba(209, 213, 219, 0.3)"
      position="fixed"
      zIndex={100}
    >
      <Logo onClick={onLogoClick} />
      <HStack>
        <HStack spacing={8} display={{ base: "none", md: "block" }}>
          {navItems.map((navItem, i) => {
            return <NavButton {...navItem} key={i} />;
          })}
        </HStack>
        <Box display={{ base: "inline-flex", md: "none" }}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color={useColorModeValue("gray.800", "inherit")}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={onOpen}
          />
          <Drawer
            onClose={onClose}
            isOpen={isOpen}
            placement="top"
            isCentered
            isFullHeight
            motionPreset="slideInBottom"
          >
            <DrawerOverlay />

            <DrawerContent px={{ base: 2, md: 8, lg: 32 }}>
              <DrawerHeader mb={10} w="full">
                {/* <VStack> */}
                <Button
                  width="full"
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  leftIcon={<AiOutlineClose />}
                  onClick={onClose}
                  marginTop={8}
                >
                  Close
                </Button>
                {/* <Logo onClick={onLogoClick} /> */}
                {/* </VStack> */}
              </DrawerHeader>
              <DrawerBody>
                <VStack flexDirection="column" spacing={6}>
                  {navItems.map((navItem, i) => {
                    return (
                      <NavButtonMobile {...navItem} key={i} onClose={onClose} />
                    );
                  })}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Flex>
  );
};

export default NavBar;
