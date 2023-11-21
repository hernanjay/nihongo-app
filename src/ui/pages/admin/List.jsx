import React from 'react'
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiBook,
  FiSearch,
  FiBell,
  FiArrowDown,
  FiUser,
  FiPaperclip,
  FiUserCheck,
} from "react-icons/fi";
import { TriangleDownIcon } from '@chakra-ui/icons';
export default function List() {
    const [display, changeDisplay] = useState("hide");
  return (
    <Box>
      <Flex
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        justifyContent="center"
      >
        <Flex
          w="90%"
          p="5%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          bg="white"
          pt="6%"
          boxShadow="2xl"
        >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/list">List of Students</BreadcrumbLink>
          </BreadcrumbItem>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<TriangleDownIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as='a' icon={<FiBook />}>Grading</MenuItem>
              {/* <MenuItem as='a' href='/admin' icon={<FiUser />}>List of Students</MenuItem> */}
              <MenuItem as='a' href='/list' icon={<FiPaperclip />}>Manage Questionaire</MenuItem>
              <MenuItem as='a' href='/user' icon={<FiUserCheck />}>Manage Users</MenuItem>
            </MenuList>
          </Menu>
        </Breadcrumb>
        <Flex align="flex-end">
            <Heading mt={5} as="h2" size="lg" letterSpacing="tight">
              List of Students
            </Heading>
            {/* <Text fontSize="sm" color="gray" ml={4}>
              November 2023
            </Text> */}
          </Flex>
         <Flex alignContent="center" p={5} m={5}>
            <InputGroup
              bgColor="#fff"
              mb={4}
              border="none"
              borderColor="BlackAlpha 900"
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
              bgColor="WhiteAlpha 50"
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
    </Box>
  );
}
