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
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
  FiArrowDown,
  FiUser,
  FiPaperclip,
  FiUserCheck,
} from "react-icons/fi";
import { TriangleDownIcon } from "@chakra-ui/icons";
// import { color } from "framer-motion";

export default function User() {
  // const [display, changeDisplay] = useState("hide");
  return (
    <Box>
      <Flex
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        justifyContent="center"
        
      >
        {/* Column 1 */}
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
            <BreadcrumbLink href="/user">Manage Users</BreadcrumbLink>
          </BreadcrumbItem>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<TriangleDownIcon />}
              variant="outline"
              border="none"
            />
            <MenuList>
            <MenuItem as="a" href="/grading"  icon={<FiBook />}>
                  Grading
                </MenuItem>
              <MenuItem as="a" href="/list" icon={<FiUser />}>
                List of Students
              </MenuItem>
              <MenuItem as="a" href="/managequestioner" icon={<FiPaperclip />}>
                Manage Questionaire
              </MenuItem>
              {/* <MenuItem as='a' href='/user' icon={<FiUserCheck />}>Manage Users</MenuItem> */}
            </MenuList>
          </Menu>
        </Breadcrumb>
        <Flex p="3%" mt={10} flexDir="column" overflow="auto">
            {" "}
            <Flex alignContent="center">
              <Heading
                mb={5} as="h2" size="lg" letterSpacing="tight"
               
              >
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
                          <Icon as={FiEye}  fontSize="lg"></Icon>&nbsp;&nbsp;
                        </Link>
                        <Link>
                          <Icon as={FiEdit} fontSize="lg"></Icon>&nbsp;&nbsp;
                        </Link>
                        <Link>
                          <Icon as={FiTrash} onClick={() => this.props.onDelete(this.props.id)} fontSize="lg"></Icon>&nbsp;
                        </Link>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Flex>
            </Flex>
          </Flex>
      </Flex>
      </Flex>
    </Box>
  );
}
