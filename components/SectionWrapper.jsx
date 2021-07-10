import { Flex } from "@chakra-ui/react";
import React from "react";

const SectionWrapper = (props) => {
  return (
    <Flex py={{ base: 8, md: 8 }} alignItems="center" justifyContent="center">
      {props.children}
    </Flex>
  );
};

export default SectionWrapper;
