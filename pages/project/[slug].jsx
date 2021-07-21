import {
  Stack,
  Button,
  Icon,
  Text,
  Flex,
  Heading,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

import {
  MotionHeading,
  MotionStack,
  MotionFlex,
  MotionTag,
  MotionText,
  MotionButton,
} from "../../components/motion";
import ChakraNextImage from "../../components/ChakraNextImage";
import mocklyImage from "../../assets/mockly-a.png";
import { IoArrowBack } from "react-icons/io5";
import { WORKS } from "../../data/work";
let easing = [0.175, 0.85, 0.42, 0.96];

// const imageVariants = {
//   exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
//   enter: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: easing,
//     },
//   },
// };

// const containerVariants = {
//   enter: {
//     // backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//     transition: {
//       duration: 30,
//       loop: Infinity,
//     },
//   },
//   exit: {},
// };

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, ease: easing },
  },
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: easing,
    },
  },
};

const tagVariants = {
  exit: {
    opacity: 0,
    scale: 0.6,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
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
      delay: 0.1,
      duration: 0.5,
      ease: easing,
    },
  },
};

const Project = ({ title, text, imgSrc, imgAlt, tags }) => {
  return (
    <Stack
      initial="exit"
      animate="enter"
      exit="exit"
      alignItems="center"
      w="full"
      minH={"100vh"}
    >
      <Stack maxW={"4xl"} w={{ base: "80%" }}>
        <Flex variants={backVariants} marginY={{ base: 4, md: 8 }}>
          <Link href="/">
            <Icon as={IoArrowBack} width={8} height={8} />
          </Link>
        </Flex>
        <Stack>
          <Heading size={"2xl"} variants={titleVariants}>
            {title}
          </Heading>
          <Flex wrap="wrap">
            {tags.map((tag) => (
              <Tag
                mr={2}
                my={1}
                key={tag}
                variants={tagVariants}
                backgroundColor="transparent"
                variant="outline"
              >
                {tag}
              </Tag>
            ))}
          </Flex>
          <Stack paddingTop={2} flexBasis={1}>
            <Text variants={textVariants}>{text}</Text>
            <Text fontSize="xs" variants={textVariants}>
              (more details coming soon)
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export async function getStaticProps(context) {
  const work = WORKS.find((work) => work.slug === context.params.slug);
  return {
    props: work, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: WORKS.map((work) => `/project/${work.slug}`),
    fallback: false,
  };
}

export default Project;
