import { Flex, Text, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";
import WorkCard from "./WorkCard";
import mocklyImage from "../assets/mockly-a.png";
import timelyImage from "../assets/timely-b.png";
import scirubyImage from "../assets/sciruby-b.png";
import simpleCVImage from "../assets/simplecv-a.png";
import rangeitImage from "../assets/rangeit-a.png";
import ltkImage from "../assets/ltk-a.png";

const WORKS = [
  {
    title: "Mockly",
    text: "Mockly is a easy to use ebook mockup generator. Perfect for generating simple 3d mockups for your info products and ebooks",
    imgSrc: mocklyImage,
    imgAlt: "Mockly image",
    tags: ["react", "firebase", "ebooks", "product hunt #1"],
  },
  {
    title: "Timely",
    text: "Timely is a slack app that autoconverts timezones in your chat messages. Just install and forget. It converts times into timezones of all people in the conversaiton and privately notifies them of the time in their respective timezones",
    imgSrc: timelyImage,
    imgAlt: "timely image",
    tags: ["slack", "timezone", "remote life"],
  },
  {
    title: "Let them kill",
    text: "Fast-paced, endless game where you let the enemies shoot bullets and kill each other while you escape your enemies and their bullets",
    imgSrc: ltkImage,
    imgAlt: "let them kill image",
    tags: ["game dev", "unity", "android"],
  },
  {
    title: "Ruby Science Foundation",
    text: "Worked on the integration, minimizations and matrix libraries using Ruby and C++ adding more feature and support for using GNU Scientific Libraries for faster computations",
    imgSrc: scirubyImage,
    imgAlt: "simple cv image",
    tags: ["GSoC", "open source", "ruby", "c++"],
  },
  {
    title: "Range-IT",
    text: "Created the vision system of Range-IT Project to create a standalone, wearable, assistive device which processed stereo data in real time to extend the mobility of visually impaired people in an indoor environment at Human-Computer Interaction Lab, TU Dresden",
    imgSrc: rangeitImage,
    imgAlt: "range it project",
    tags: ["python", "computer vision", "pointcloud", "research"],
  },
  {
    title: "Simple CV",
    text: "Worked on creating an interactive rendering system for SimpleCV which made it independent of the obsolete PyGame library. Developed the system using PyGTK and Cairo, along with a web counterpart compatible with IPython Notebooks using JavaScript and Processing.js",
    imgSrc: simpleCVImage,
    imgAlt: "simple cv image",
    tags: ["GSoC", "open source", "python", "c++"],
  },
];

const Work = ({ refProp }) => {
  return (
    <Flex w={"full"} direction="column" align="center" ref={refProp}>
      <Heading
        size="4xl"
        fontFamily={"heroHeading"}
        fontWeight={"bold"}
        textStyle="gradient"
      >
        Work
      </Heading>
      {/* <Text fontSize={"xl"} fontWeight="light" marginTop={{ base: 4, md: 4 }}> */}
      <Text marginTop={8} fontSize="2xl" textAlign="center">
        Some of my interesting projects
      </Text>
      <SimpleGrid
        marginTop={{ base: 8, md: 16 }}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 0, md: 8, lg: 24 }}
        placeItems={"center"}
        gap={{ base: 8 }}
      >
        {WORKS.map((work, i) => {
          const { title, text, imgSrc, imgAlt, tags } = work;
          return (
            <WorkCard
              title={title}
              text={text}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              tags={tags}
              key={i}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Work;
