import { HStack, Icon, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import React from "react";

const LINKS = {
  twitter: "https://twitter.com/therajatkapoor",
  linkedin: "https://linkedin.com/in/rajat100493",
  github: "https://github.com/rajatkapoor",
  instagram: "https://www.instagram.com/rajat100493/?hl=en",
};

const SocialLink = ({ url, icon }) => (
  <Link href={url}>
    <Icon as={icon} w={8} h={8} />
  </Link>
);

const SocialLinks = () => {
  return (
    <HStack spacing={4} padding={4}>
      <SocialLink url={LINKS.twitter} icon={FaTwitter} />
      <SocialLink url={LINKS.linkedin} icon={FaLinkedin} />
      <SocialLink url={LINKS.github} icon={FaGithub} />
      <SocialLink url={LINKS.instagram} icon={FaInstagram} />
    </HStack>
  );
};

export default SocialLinks;
