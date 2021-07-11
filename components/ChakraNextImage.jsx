import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage = ({ src, alt, blur, objectFit = "cover", ...rest }) => {
  return (
    <Box position="relative" {...rest}>
      <Image
        placeholder={blur ? "blur" : undefined}
        objectFit={objectFit}
        src={src}
        alt={alt}
        layout="fill"
      />
    </Box>
  );
};

export default ChakraNextImage;
