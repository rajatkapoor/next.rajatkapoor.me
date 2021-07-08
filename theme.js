// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import raleway from "@fontsource/raleway";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  accent: "rebeccapurple",
};
const fonts = {
  heroHeading: "Raleway",
};
const layerStyles = {};
const textStyles = {
  gradient: {
    bgGradient: "linear(to-l, #7928CA,#FF0080)",
    bgClip: "text",
  },
};

const theme = extendTheme({ colors, fonts, layerStyles, textStyles });

export default theme;
