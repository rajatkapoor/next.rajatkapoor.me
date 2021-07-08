import { Flex, Text, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "./SocialLinks";
import WorkCard from "./WorkCard";
import mocklyImage from "../assets/mockly-a.png";
import timelyImage from "../assets/timely-b.png";

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
    imgAlt: "mockly image",
    tags: ["slack", "timezone", "remote life"],
  },
  // {
  //   title: "Mockly",
  //   text: "",
  //   imgSrc: "https://source.unsplash.com/random",
  //   imgAlt: "mockly image",
  //   tags: ["react", "firebase", "3d css", "product hunt #1"],
  // },
  // {
  //   title: "Mockly",
  //   text: "",
  //   imgSrc: "https://source.unsplash.com/random",
  //   imgAlt: "mockly image",
  //   tags: ["react", "firebase"],
  // },
];

const Hero = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis quae neque optio repellendus. Quidem alias voluptatum quibusdam delectus ducimus recusandae sapiente. Veritatis aliquid autem quis illo, nam doloribus? Maxime.";
  return (
    <Flex w={"full"} direction="column" align="center">
      <Heading fontFamily={"heroHeading"}>Work</Heading>
      <Text fontSize={"lg"}>Some of my projects</Text>
      <SimpleGrid
        marginTop={{ base: 8 }}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 0, md: 8, lg: 24 }}
        className="yolo"
        placeItems={"center"}
        gap={{ base: 8 }}
      >
        {WORKS.map((work) => {
          const { title, text, imgSrc, imgAlt, tags } = work;
          return (
            <WorkCard
              title={title}
              text={text}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              tags={tags}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Hero;
