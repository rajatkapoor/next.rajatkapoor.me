import React from "react";

import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { FiExternalLink } from "react-icons/fi";

const scrollToRef = (ref) => () => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

const Layout = ({ children }) => {
  const navItems = [
    {
      text: "Work",
      // onClickNav: scrollToRef(workRef),
    },
    {
      text: "Experience",
      // onClickNav: scrollToRef(experienceRef),
    },
    {
      text: "Blog",
      // onClickNav: () => {
      //   window.location = "https://blog.rajatkapoor.me";
      // },
      // leftIcon: <FiExternalLink />,
    },
    {
      text: "Contact",
      // onClickNav: scrollToRef(contactRef),
    },
  ];
  return (
    <Box w="100%" className="layoutbox">
      {/* <Head>
        <title>Rajat Kapoor - Full stack developer</title>
        <meta
          name="description"
          content="Rajat Kapoor is a full stack developer from India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <NavBar navItems={navItems} className="layoutnav" /> */}
      {children}
    </Box>
  );
};

export default Layout;
