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
  // Button,
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
} from "react-icons/fi";
import Chart from "../../Components/chartComponent/Chart.jsx";
// import { color } from "framer-motion";

export default function Admindashboard() {
  const [display, changeDisplay] = useState("hide");
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
        w={["100%", "100%", "10%", "15%", "15%"]}
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
              flexDir={["row", "row", "row", "column", "column"]}
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
      <Flex w="40%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        {" "}
        <Heading
          fontWeight="normal"
          mb={4}
          letterSpacing="tight"
          fontSize="2xl"
        >
          Welcome,{" "}
          <Flex fontWeight="bold" display="inline-flex">
            Admin Name
          </Flex>
          !
        </Heading>{" "}
        <Text fontWeight="bold" fontSize="1xl">
          List of Students
        </Text>
        <Text color="gray" fontSize="xs">
          November 2023
        </Text>{" "}
        <Chart />
        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            {/* <Heading as="h2" size="lg" letterSpacing="tight">
              Lists
            </Heading>
            <Text fontSize="sm" color="gray" ml={4}>
              November 2023
            </Text> */}
          </Flex>
          <IconButton icon={<FiCalendar />} />
          {/* CONTENT HERE */}
        </Flex>
      </Flex>
      {/* Column 3 */}
      <Flex w="45%" bgColor="#f5f5f5" p="3%" flexDir="column" overflow="auto">
        <Flex alignContent="center">
          <InputGroup
            bgColor="#fff"
            mb={4}
            border="none"
            borderColor="#fff"
            borderRadius="10px"
            mr={2}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray" />}
            />
            <Input type="text" placeholder="Search" borderRadius="10px" />
          </InputGroup>
          <IconButton
            icon={<FiBell />}
            fontSize="md"
            bgColor="#fff"
            borderRadius="50%"
            p="10px"
          />
          <Flex
            w={30}
            h={25}
            bgColor="#C53030"
            borderRadius="50%"
            color="#fff"
            align="center"
            justify="center"
            ml="-3"
            mt="-1"
            zIndex="100"
            fontSize="xs"
          >
            5
          </Flex>
        </Flex>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
            List of Students
          </Heading>
          {/* <Text fontSize="sm" color="gray" ml={4}>
              November 2023
            </Text> */}
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
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Name of Student
                        </Heading>
                        {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Email</Td>
                  <Td>Nihongo Level</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      Grade
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Name of Student
                        </Heading>
                        {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Email</Td>
                  <Td>Nihongo Level</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      Grade
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Name of Student
                        </Heading>
                        {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Email</Td>
                  <Td>Nihongo Level</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      Grade
                    </Text>
                  </Td>
                </Tr>
                {display == "show" && (
                  <>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} src="" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Name of Student
                            </Heading>
                            {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Email</Td>
                      <Td>Nihongo Level</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          Grade
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} src="" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Name of Student
                            </Heading>
                            {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Email</Td>
                      <Td>Nihongo Level</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          Grade
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} src="" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Name of Student
                            </Heading>
                            {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Email</Td>
                      <Td>Nihongo Level</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          Grade
                        </Text>
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>
          <Flex align="center">
            <Divider />
            <IconButton
              icon={display == "show" ? <FiChevronUp /> : <FiChevronDown />}
              onClick={() => {
                if (display == "show") {
                  changeDisplay("none");
                } else {
                  changeDisplay("show");
                }
              }}
            />
            <Divider />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
