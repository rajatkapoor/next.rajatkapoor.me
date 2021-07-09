import { Stack, Icon, Link, VisuallyHidden } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import React from "react";

const LINKS = {
  twitter: "https://twitter.com/therajatkapoor",
  linkedin: "https://linkedin.com/in/rajat100493",
  github: "https://github.com/rajatkapoor",
  instagram: "https://www.instagram.com/rajat100493/?hl=en",
};

const SocialLink = ({ url, icon, descriptionText }) => (
  <Link href={url}>
    <VisuallyHidden>{descriptionText}</VisuallyHidden>
    <Icon as={icon} w={8} h={8} />
  </Link>
);

const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={4} alignItems={{ base: "flex-start" }}>
      <SocialLink
        url={LINKS.twitter}
        icon={FaTwitter}
        descriptionText={"Link to my twitter profile"}
      />
      <SocialLink
        url={LINKS.linkedin}
        icon={FaLinkedin}
        descriptionText={"Link to my LinkedIn profile"}
      />
      <SocialLink
        url={LINKS.github}
        icon={FaGithub}
        descriptionText={"Link to Github profile "}
      />
      <SocialLink
        url={LINKS.instagram}
        icon={FaInstagram}
        descriptionText={"Link to Instagram "}
      />
    </Stack>
  );
};

export default SocialLinks;
