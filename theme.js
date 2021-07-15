// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway";
import "@fontsource/comfortaa";

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
  logo: "Comfortaa",
};
const layerStyles = {
  glass: {
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(8px) saturate(180%)",
    border: "1px solid rgba(209, 213, 219, 0.3)",
  },
};
const textStyles = {
  gradient: {
    bgGradient: "linear(to-l, #7928CA,#FF0080)",
    bgClip: "text",
  },
};

const theme = extendTheme({ colors, fonts, layerStyles, textStyles });

export default theme;
