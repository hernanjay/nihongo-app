import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useUserContext } from "../../logic/hooks/user/useUserContext";
import ThemeColors from "../pages/main/ThemeColors";
import { ChevronDownIcon } from "@chakra-ui/icons";

function HomeUserProfileCard() {
  const { bg, border } = ThemeColors();
  const { user } = useUserContext();
  return (
    <Box
      position={{ base: "relative", lg: "fixed" }}
      minW={{ base: "90vw", lg: "30vw" }}
      ml={{ base: "2.5vw", lg: "2vw" }}
      mr={{ base: "2.5vw", lg: "0vw" }}
      mb="2.25vh"
    >
      <Card variant="outlined" bg="transparent" boxShadow="lg" minH="80vh">
        {/* Cover Photo */}
        <CardHeader
          roundedTop="xl"
          maxH="15vh"
          backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Center position="relative" top={{ base: "2.5vh", lg: "5vh" }}>
            <Image
              borderRadius="full"
              boxSize={{ base: "25vw", lg: "10vw" }}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Center>
        </CardHeader>

        {/* Body */}
        <CardBody bg={bg}>
          <Box minH={{ base: "5vh", lg: "12.5vh" }}></Box>

          {/* Name and email */}
          <Box>
            <Heading fontWeight="normal" textAlign="center">
              @{user.username}
            </Heading>
            <Divider my="0.5em" />
            <Text fontWeight="normal" textAlign="center">
              {user.email}
            </Text>
          </Box>

          {/* Scoreboard */}
          <TableContainer mt="5vh" mx="1.5vw">
            <Table fontSize="0.75em" variant="simple">
              <Thead>
                <Tr>
                  <Th>Category</Th>
                  <Th>
                    <Menu>
                      <MenuButton
                        variant="unstyled"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        Level
                      </MenuButton>
                      <MenuList>
                        <MenuItem>N1</MenuItem>
                        <MenuItem>N2</MenuItem>
                        <MenuItem>N3</MenuItem>
                        <MenuItem>N4</MenuItem>
                        <MenuItem>N5</MenuItem>
                        <MenuItem>Over All</MenuItem>
                      </MenuList>
                    </Menu>
                  </Th>
                  <Th isNumeric>Score</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Kanji</Td>
                  <Td>N5</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>Vocab</Td>
                  <Td>N5</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>Grammar</Td>
                  <Td>N5</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>

        <CardFooter bg={bg} roundedBottom="xl"></CardFooter>
      </Card>
    </Box>
  );
}

export default HomeUserProfileCard;
