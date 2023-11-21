import React from "react";
import { useState } from "react";
// import { Chart } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
  Box,
  Grid,
  // Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  // FiBox,
  // FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiBook,
  FiSearch,
  FiBell,
} from "react-icons/fi";
// import Chart from "../../Components/chartComponent/Chart.jsx";
// import { color } from "framer-motion";

export default function Admindashboard() {
  const [display, changeDisplay] = useState("hide");
  const boxStyle = {
    w: "100%",
    h: "100",
    bgColor: "gray.400",
  };
  const headStyle = {
    color: "blackAlpha.900",
    textAlign: "center",
    pt: 3,
  };
  const textStyle = {
    pt: 3,
    textAlign: "center",
  };
  return (
    <Box pt="12vh">
      <Flex
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        maxW="2000px"
      >
        {/* Column 1 */}
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        {/* Column 2 */}
        <Flex w="100%" p="3%" flexDir="column" overflow="auto" minH="100vh">
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
          {/* upper context will be fetch the id of admin */}
          {/* <Text fontWeight="bold" fontSize="1xl">
          List of Students
        </Text>
        <Text color="gray" fontSize="xs">
          November 2023
        </Text>{" "} */}
          {/* <Chart /> */}
          {/* fetch the id of student percentage per nihongo level */}
          <Grid templateColumns="repeat(5, 1fr)" gap={6} pt="2%" wrap="wrap">
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N1
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N2
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N3
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N4
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N5
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
          </Grid>
          <Flex justifyContent="space-between" mt={8}>
            <Flex align="flex-end">
              {/* <Heading as="h2" size="lg" letterSpacing="tight">
              Lists
            </Heading>
            <Text fontSize="sm" color="gray" ml={4}>
              November 2023
            </Text> */}
            </Flex>
            {/* <IconButton icon={<FiCalendar />} /> */}
            {/* CONTENT HERE */}
          </Flex>
          <Flex alignContent="center" p={5} m={10}>
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
              6
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
        {/* Column 3 */}
        {/* <Flex w="45%" bgColor="#f5f5f5" p="3%" flexDir="column" overflow="auto">
        
      </Flex> */}
      </Flex>
    </Box>
  );
}
