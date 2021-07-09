import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const NavButton = ({ text, refProp, externalLink }) => {
  console.log(
    "🚀 ~ file: NavButton.jsx ~ line 6 ~ NavButton ~ externalLink",
    externalLink
  );
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      onClick={() => {
        if (refProp) {
          refProp.current.scrollIntoView({ behavior: "smooth" });
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

export default NavButton;
