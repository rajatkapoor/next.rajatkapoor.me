import {
  Button,
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import React from "react";
import ChakraNextImage from "./ChakraNextImage";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

const JobCard = ({ companyName, position, imgSrc, imgAlt, tags, period }) => {
  return (
    <Flex w={{ base: "100%", md: "100%" }} h="100%" rounded="2xl">
      <ChakraNextImage
        src={imgSrc}
        alt={imgAlt}
        w={{ base: "50px" }}
        h={{ base: "50px" }}
        rounded="full"
        overflow="hidden"
        d="flex"
        align={"center"}
        justify={"center"}
        alignSelf="center"
      />
      <Flex
        w="full"
        direction="column"
        pl={{ base: 4, md: 8 }}
        justifyContent="center"
      >
        <HStack>
          <Text
            fontSize={{ base: "xl", md: "3xl", lg: "3xl" }}
            fontWeight="bold"
          >
            {companyName}
          </Text>
          <Text fontSize={{ base: "sm", md: "lg" }}>{period}</Text>
        </HStack>
        <Text fontSize={{ base: "lg", md: "xl" }}>{position}</Text>
      </Flex>
      {/* <Icon as={FaChevronRight} alignSelf="center"></Icon> */}
    </Flex>
  );
};

export default JobCard;
