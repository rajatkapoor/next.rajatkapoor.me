import { Flex } from "@chakra-ui/react";
import React from "react";

const SectionWrapper = (props) => {
  return <Flex py={[8]}>{props.children}</Flex>;
};

export default SectionWrapper;
