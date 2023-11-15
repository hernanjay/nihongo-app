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
      <Box id="tryItOutScrollLoc" maxW="100vw" bg={bg} boxShadow={"lg"}>
        <Container maxW="80vw" py="10">
          <SimpleGrid columns={3} gap={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
            </List>
          </SimpleGrid>
        </Container>
      </Box>
      <Divider />
    </>
  );
}

export default Footer;
