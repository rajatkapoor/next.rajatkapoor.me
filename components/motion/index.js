import { motion } from "framer-motion";
import { Stack, Heading } from "@chakra-ui/react";

import ChakraNextImage from "../ChakraNextImage";

const MotionStack = motion(Stack);
const MotionHeading = motion(Heading);
const MotionChakraNextImage = motion(ChakraNextImage);

export { MotionStack, MotionHeading, MotionChakraNextImage };
