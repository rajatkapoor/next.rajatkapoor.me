import {
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "./ChakraNextImage";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

import Link from "next/link";
import { motion } from "framer-motion";
import { MotionStack, MotionHeading } from "./motion";

const WorkCard = ({ title, text, date, imgSrc, imgAlt, tags, link }) => {
  return (
    <Link href={link}>
      <MotionStack
        maxW={{ base: "450px" }}
        w={{ base: "90%" }}
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
            <Text noOfLines={3}>{text}</Text>
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
    </Link>
  );
};

export default WorkCard;
