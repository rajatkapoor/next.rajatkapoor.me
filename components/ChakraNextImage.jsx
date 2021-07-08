import { Box } from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage = ({ src, alt, ...rest }) => {
  return (
    <Box position="relative" {...rest}>
      <Image objectFit="cover" src={src} alt={alt} layout="fill" />
    </Box>
  );
};

export default ChakraNextImage;
