import { Stack, Button, Icon } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

import {
  MotionHeading,
  MotionStack,
  MotionFlex,
  MotionTag,
  MotionText,
  MotionButton,
} from "../components/motion";
import ChakraNextImage from "../components/ChakraNextImage";
import mocklyImage from "../assets/mockly-a.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const containerVariants = {
  enter: {
    // backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 30,
      loop: Infinity,
    },
  },
  exit: {},
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.7, duration: 0.5, ease: easing },
  },
};

const backVariants = {
  exit: {
    x: 100,
    // opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    transition: {
      // delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

const tagVariants = {
  exit: {
    // x: 10,
    opacity: 0,
    scale: 0.6,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    // x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

const titleVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: easing,
    },
  },
};

const mockly = () => {
  const title = "Mockly";
  const text =
    "Mockly is a easy to use ebook mockup generator. Perfect for generating simple 3d mockups for your info products and ebooks";
  const imgSrc = mocklyImage;
  const imgAlt = "Mockly image";
  const tags = ["react", "firebase", "ebooks", "product hunt #1"];
  const link = "/mockly";

  return (
    <MotionStack
      initial="exit"
      animate="enter"
      exit="exit"
      alignItems="center"
      w="full"
      // background="linear-gradient(-45deg, #ffffff, #ffffff, rgba(255,0,0,0.3), #ffffff,#ffffff)"
      // background="linear-gradient(-45deg, #ffffff, #e73c7e, #ffffff, #23d5ab)"
      backgroundSize="400% 400%"
      variants={containerVariants}
      minH={"100vh"}
      paddingBottom={8}
    >
      <Link href="/">
        <MotionFlex
          variants={backVariants}
          alignItems="center"
          direction="column"
        >
          <Icon
            as={IoArrowBackCircleOutline}
            width={12}
            height={12}
            color="gray.700"
          ></Icon>
          <MotionText fontSize="sm">GO BACK </MotionText>
        </MotionFlex>
      </Link>
      <MotionStack
        flexGrow={1}
        maxW={"3xl"}
        w={{ base: "80%" }}
        // height="90%"
        boxShadow={"2xl"}
        rounded="2xl"
        overflow="hidden"
        // marginTop={"-80px"}
        backgroundColor="rgba(255,255,255,0.1)"
        backdropFilter={"blur(80px) saturate(110%)"}
      >
        <Stack paddingX={{ base: 4, md: 8 }} paddingY={{ base: 8 }}>
          <MotionHeading size={"2xl"} variants={titleVariants}>
            {title}
          </MotionHeading>
          <MotionFlex wrap="wrap">
            {tags.map((tag) => (
              <MotionTag
                mr={2}
                my={1}
                key={tag}
                variants={tagVariants}
                backgroundColor="transparent"
                variant="outline"
              >
                {tag}
              </MotionTag>
            ))}
          </MotionFlex>
          <Stack paddingTop={2} flexBasis={1}>
            <MotionText variants={textVariants}>{text}</MotionText>
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
    </MotionStack>
  );
};

export default mockly;
