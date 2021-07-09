import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage = ({ src, alt, blur, ...rest }) => {
  return (
    <Box position="relative" {...rest}>
      <Image
        placeholder={blur ? "blur" : undefined}
        objectFit="cover"
        src={src}
        alt={alt}
        layout="fill"
      />
    </Box>
  );
};

export default ChakraNextImage;
