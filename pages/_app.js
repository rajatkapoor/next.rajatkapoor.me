import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
