import {
  Box,
  Heading,
  Stack,
  Flex,
  Text,
  Tag,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

import { MotionHeading, MotionStack } from "../components/motion";
import ChakraNextImage from "../components/ChakraNextImage";
import mocklyImage from "../assets/mockly-a.png";

const mockly = () => {
  const title = "Mockly";
  const text =
    "Mockly is a easy to use ebook mockup generator. Perfect for generating simple 3d mockups for your info products and ebooks";
  const imgSrc = mocklyImage;
  const imgAlt = "Mockly image";
  const tags = ["react", "firebase", "ebooks", "product hunt #1"];
  const link = "/mockly";

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="full"
      alignSelf="center"
    >
      <MotionStack
        w={{ base: "90%" }}
        maxW={"5xl"}
        h="100%"
        boxShadow={"2xl"}
        rounded="2xl"
        overflow="hidden"
        marginTop={16}
        layoutId={`${title}-container`}
      >
        <ChakraNextImage
          src={imgSrc}
          alt={imgAlt}
          minWidth="300px"
          w={{ base: "100%", md: "100%" }}
          height={"300px"}
          blur
          objectFit="cover"
          layoutId={`${title}-image`}
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
            <MotionHeading size={"md"} layoutId={`${title}-title`}>
              {title}
            </MotionHeading>
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
      </MotionStack>
    </Flex>
  );
};

export default mockly;
