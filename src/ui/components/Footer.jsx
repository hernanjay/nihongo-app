import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  const bg = useColorModeValue("light.400", "dark.100");
  return (
    <>
      <Divider />
      <Box
        id="tryItOutScrollLoc"
        maxW="100vw"
        minH="5vh"
        maxH="10vh"
        bg={bg}
        boxShadow={"lg"}
      ></Box>
      <Divider />
    </>
  );
}

export default Footer;
