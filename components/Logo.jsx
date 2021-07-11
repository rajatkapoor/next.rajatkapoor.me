import { useEffect, useState } from "react";
import { HStack } from "@chakra-ui/react";

import logoText from "../assets/logo-text.svg";
import logoOpen from "../assets/logo-open.svg";
import logoClose from "../assets/logo-close.svg";
import ChakraNextImage from "../components/ChakraNextImage";

const Logo = () => {
  const [logoState, setLogoState] = useState("text");
  const [forced, setForced] = useState(false);

  useEffect(() => {
    if (logoState === "text") {
      setTimeout(() => {
        setLogoState("open");
      }, 2000);
    }
    if (logoState === "open") {
      setTimeout(() => {
        setLogoState("close");
      }, (0.5 + Math.random()) * 900);
    }
    if (logoState === "close") {
      setTimeout(() => {
        setLogoState("open");
      }, 200);
    }
  }, [logoState, forced]);
  let imgSrc = logoText;
  if (logoState === "text") {
    imgSrc = logoText;
  } else if (logoState === "open") {
    imgSrc = logoOpen;
  } else if (logoState === "close") {
    imgSrc = logoClose;
  }

  return (
    <HStack position="relative" width="93px" height="40px">
      <ChakraNextImage
        src={imgSrc}
        objectFit="stretch"
        alt={"Logo of Rajat's portfolio"}
        w={{ base: "93px" }}
        h={{ base: "40px" }}
      />
    </HStack>
  );
};

export default Logo;
