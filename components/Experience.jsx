import {
  Flex,
  Text,
  Heading,
  VStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "./ChakraNextImage";
import JobCard from "./JobCard";
import WorkCard from "./WorkCard";
import sabreImage from "../assets/sabre.svg";
import eltropyImage from "../assets/eltropy.svg";
import typesetImage from "../assets/typeset.svg";
import qwilrImage from "../assets/qwilr.svg";

const JOBS = [
  {
    companyName: "Qwilr",
    position: "Software Engineer",
    imgSrc: qwilrImage,
    imgAlt: "Qwilr Logo",
    period: "2018 - present",
  },
  {
    companyName: "Typeset",
    position: "Software Engineer",
    imgSrc: typesetImage,
    imgAlt: "Typset Logo",
    period: "2017 - 2018",
  },
  {
    companyName: "Eltropy",
    position: "Software Engineer",
    imgSrc: eltropyImage,
    imgAlt: "Eltropy Logo",
    period: "2016 - 2017",
  },
  {
    companyName: "Sabre",
    position: "Software Engineering Intern",
    imgSrc: sabreImage,
    imgAlt: "Sabre Logo",
    period: "2015 - 2016",
  },
];

const Experience = ({ refProp }) => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis quae neque optio repellendus. Quidem alias voluptatum quibusdam delectus ducimus recusandae sapiente. Veritatis aliquid autem quis illo, nam doloribus? Maxime.";
  return (
    <Flex w={"full"} direction="column" align="center" ref={refProp}>
      <Heading
        size="4xl"
        fontFamily={"heroHeading"}
        fontWeight={"bold"}
        textStyle="gradient"
      >
        Experience
      </Heading>
      <Text marginTop={8} fontSize="2xl" textAlign="center">
        {/* <Text fontSize={"xl"} fontWeight="light" marginTop={{ base: 4, md: 4 }}> */}
        The places that I have been working on the coolest of technologies
      </Text>
      <Stack
        margin={{ base: 12, md: 16 }}
        spacing={{ base: 12, md: 8, lg: 8 }}
        ref={refProp}
        divider={<StackDivider borderColor="graey.200" />}
      >
        {JOBS.map((job, i) => (
          <JobCard {...job} key={i} />
        ))}
      </Stack>
    </Flex>
  );
};

export default Experience;
