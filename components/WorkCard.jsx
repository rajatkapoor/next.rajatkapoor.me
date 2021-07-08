import { Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "./ChakraNextImage";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

const WorkCard = ({ title, text, date, imgSrc, imgAlt, tags }) => {
  return (
    <Stack
      maxW={{ lg: "500px" }}
      w={{ base: "90%" }}
      h="100%"
      boxShadow={"2xl"}
      rounded="2xl"
      overflow="hidden"
    >
      <ChakraNextImage
        src={imgSrc}
        alt={imgAlt}
        minWidth="300px"
        w={{ base: "100%", md: "100%" }}
        height={"300px"}
      />
      <Stack paddingX={{ base: 4, md: 8 }} paddingBottom={[8]}>
        <Flex wrap="wrap">
          {tags.map((tag) => (
            <Tag mr={2} my={1} key={tag}>
              {tag}
            </Tag>
          ))}
        </Flex>
        <Stack paddingTop={2} flexBasis={1}>
          <Heading size={"md"}>{title}</Heading>
          <Text>{text}</Text>
        </Stack>
        {/* <Button
          variant="unstyled"
          w={"fit-content"}
          flexGrow={0}
          color={"accent"}
        >
          Read more
        </Button> */}
      </Stack>
    </Stack>
  );
};

export default WorkCard;
