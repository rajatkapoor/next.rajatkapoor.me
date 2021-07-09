import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const NavButtonMobile = ({ text, refProp, externalLink, onClose }) => {
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      onClick={() => {
        if (refProp) {
          onClose();
          setTimeout(() => {
            refProp.current.scrollIntoView({ behavior: "smooth" });
          }, 10);
        } else if (externalLink) {
          window.location = "https://blog.rajatkapoor.me";
        }
      }}
      leftIcon={externalLink ? <FiExternalLink /> : undefined}
    >
      <Text fontSize="xl">{text}</Text>
    </Button>
  );
};

export default NavButtonMobile;
