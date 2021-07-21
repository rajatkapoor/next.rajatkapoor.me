import {
  Button,
  Flex,
  Heading,
  Icon,
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
import { MotionStack, MotionHeading, MotionText, MotionFlex } from "./motion";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const WorkCard = ({ title, text, date, imgSrc, imgAlt, tags, link, slug }) => {
  return (
    <Link href={`/project/${slug}`}>
      <MotionFlex
        maxW={{ base: "450px" }}
        w={{ base: "90%" }}
        h="100%"
        boxShadow={"2xl"}
        rounded="2xl"
        overflow="hidden"
        marginTop={16}
        cursor="pointer"
        position="relative"
        direction="column"
      >
        <ChakraNextImage
          src={imgSrc}
          alt={imgAlt}
          minWidth="300px"
          w={{ base: "100%", md: "100%" }}
          height={"300px"}
          blur
          objectFit="cover"
          // layoutId={`${title}-image`}
        />
        <Flex
          backgroundColor="rgba(255,255,255,0.2)"
          backdropFilter={"blur(16px) saturate(180%)"}
          paddingX={{ base: 4, md: 8 }}
          height="48px"
          marginTop={"-48px"}
          width="full"
          alignItems="center"
        >
          <MotionHeading size={"md"} verticalAlign="middle">
            {title}
          </MotionHeading>
        </Flex>
        <Stack paddingX={{ base: 4, md: 8 }} paddingBottom={[8]} marginTop={2}>
          <Flex wrap="wrap">
            {tags.map((tag) => (
              <Tag mr={2} my={1} key={tag}>
                {tag}
              </Tag>
            ))}
          </Flex>
          <Stack paddingTop={2} flexBasis={1}>
            <Text noOfLines={3}>{text}</Text>
          </Stack>
          {/* <Button
            variant="unstyled"
            w={"fit-content"}
            flexGrow={0}
            rightIcon={<IoArrowForwardCircleOutline />}
            textTransform="uppercase"
          >
            Read more
          </Button> */}
          <MotionStack
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            paddingTop={2}
          >
            <MotionText fontSize="sm" textTransform="uppercase">
              read more
            </MotionText>
            <Icon
              as={IoArrowForwardCircleOutline}
              width={6}
              height={6}
              color="gray.700"
            ></Icon>
          </MotionStack>
        </Stack>
      </MotionFlex>
    </Link>
  );
};

export default WorkCard;
