import Head from "next/head";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w={"100%"}>
      <Head>
        <title>Rajat Kapoor - Full stack developer</title>
        <meta
          name="description"
          content="Rajat Kapoor is a full stack developer from India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>hi</Box>
    </Box>
  );
}
