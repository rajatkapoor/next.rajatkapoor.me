import React from "react";
import {
  Flex,
  SimpleGrid,
  Grid,
  Image,
  chakra,
  Heading,
  Text,
  Icon,
  position,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { responsive } from "../utils/styles";
import { white } from "color-name";
import { MdArrowForward } from "react-icons/md";

const ProductImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => true,
});

// const projects = [
//   {
//     name: "Timely",
//     image: "./timely.png",
//   },
// ];

const Projects = () => {
  return (
    <Flex
      maxWidth={responsive("80%", "80%", "80em")}
      flexGrow={1}
      direction={"column"}
    >
      <ProjectCard colors={1}></ProjectCard>
      <ProjectCard colors={2}></ProjectCard>
      <ProjectCard colors={3}></ProjectCard>
    </Flex>
  );
};

const ProjectCard = ({ name, image, colors }) => {
  let styles = {};
  switch (colors) {
    case 1:
      styles = {
        background: "blackAlpha.400",
        color: "white",
        textShadow: "0 0 16px rgba( 0, 0, 0, 0.5 )",
      };
      break;
    case 2:
      styles = {
        textShadow: "0 0 16px rgba( 255, 255, 255, 0.5 )",
        color: "black",
        background: "white.400",
      };
      break;
    case 3:
      styles = {
        textShadow: "0 0 16px rgba( 255, 255, 255, 0.5 )",
        color: "black",
        background: "rgba(44,96,195,0.1)",
      };
  }
  return (
    <Grid templateColumns={"6fr 2fr"} width={"full"} my={16}>
      <Flex flexBasis={3} overflow={"hidden"} flexGrow={1} rounded={"3xl"}>
        <Image
          src="https://source.unsplash.com/random/1000x800"
          //   src="/timely.png"
          alt="Timely app image"
          width={"full"}
          height={"600px"}
          objectFit={"cover"}
        />
      </Flex>
      <Flex flexGrow={0} flexBasis={1} align={"start"}>
        <Flex
          alignSelf={"center"}
          height={"90%"}
          zIndex={40}
          padding={8}
          direction={"column"}
          justify={"center"}
          ml={-32}
          {...styles}
          boxShadow={"dark-lg"}
          sx={{ backdropFilter: "blur(20px)" }}
          borderRadius={"2xl"}
          border="1px solid rgba( 255, 255, 255, 0.18 )"
        >
          <Heading
            position={"relative"}
            size={"3xl"}
            _before={{
              content: `""`,
              position: "absolute",
              background: "#1dc787",
              width: 28,
              height: 2,
              bottom: -2,
            }}
            mb={4}
          >
            Timely
          </Heading>
          <Text fontSize="xl" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            accusamus, consequatur ratione error natus atque animi obcaecati
            repellat unde velit numquam dolores enim ex. Porro nisi cum sint
            aliquam eum vero perspiciatis, culpa tenetur natus quisquam odio.
            Obcaecati, illo quo!
          </Text>
          <Text color={"#1dc787"}>
            Read more
            <Icon as={MdArrowForward}></Icon>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Projects;
