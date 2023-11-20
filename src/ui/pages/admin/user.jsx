import React from "react";
import { useState } from "react";
// import { Chart } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Avatar,
  // AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  // Link,
  // Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  // FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiBook,
  FiSearch,
  FiBell,
  FiEye,
  FiDelete,
  FiTrash,
} from "react-icons/fi";
// import { color } from "framer-motion";

export default function User() {
  // const [display, changeDisplay] = useState("hide");
  return (
    <Flex
      h={[null, null, "100vh"]}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      maxW="2000px"
    >
      {" "}
      {/* Column 1 */}
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Flex flexDir="column" h="100vh" justifyContent="space-between">
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize="xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Admin Dashboard
            </Heading>
            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap="wrap"
              justifyContent="center"
            >
              <Flex className="sidebar-items">
                <Link>
                  <Icon
                    as={FiHome}
                    fontSize="md"
                    className="active-icon"
                    style={{ stroke: "#fff", strokeWidth: "3" }}
                  />
                </Link>
                <Link to="/admin" _hover={{ textDecor: "none" }}>
                  <Text fontSize="sm">Dashboard</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link>
                  <Icon
                    as={FiBook}
                    fontSize="md"
                    style={{ stroke: "#fff", strokeWidth: "3" }}
                  />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text fontSize="sm">Grading</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link>
                  <Icon
                    as={FiPieChart}
                    fontSize="md"
                    style={{ stroke: "#fff", strokeWidth: "3" }}
                  />
                </Link>
                <Link to="/chart" _hover={{ textDecor: "none" }}>
                  <Text fontSize="sm">Charts</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link>
                  <Icon
                    as={FiEdit}
                    fontSize="md"
                    style={{ stroke: "#fff", strokeWidth: "3" }}
                  />
                </Link>
                <Link to="/user" _hover={{ textDecor: "none" }}>
                  <Text fontSize="sm">User Management</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="" />
            <Text textAlign="center">Admin Name</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Column 2 */}
      <Flex w="85%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        {" "}
        <Flex alignContent="center">
          <Heading textColor="blackAlpha.900" size="md" letterSpacing="tight">
            Manage Users
          </Heading>
        </Flex>
        <Flex flexDir="column">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Name of Student</Th>
                  <Th>Email</Th>
                  <Th>Nihongo Level</Th>
                  <Th isNumeric>Grade</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          adadasd adsadad
                        </Heading>
                        {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>ddadasddas@gmail.com</Td>
                  <Td>N1</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      99%
                    </Text>
                  </Td>
                  <Td>
                    <Link>
                      <Icon as={FiEye} fontSize="lg"></Icon>&nbsp;&nbsp;
                    </Link>
                    <Link>
                      <Icon as={FiEdit} fontSize="lg"></Icon>&nbsp;&nbsp;
                    </Link>
                    <Link>
                      <Icon as={FiTrash} fontSize="lg"></Icon>&nbsp;
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
