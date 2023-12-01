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
  useBoolean,
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
import MenuComponent from "../../components/MenuComponent";
import SideBar from "../../components/SideBar";
import ThemeColors from "../main/ThemeColors";
// import { color } from "framer-motion";

export default function User() {
  // const [display, changeDisplay] = useState("hide");
  const [toggle, setToggle] = useBoolean();
  const { bg, fontColor, body } = ThemeColors();
  return (
    <Box>
      <Flex flexDir={"row"} justifyContent={"center"} overflow={"auto"}>
        <SideBar toggle={toggle} onClick={setToggle.toggle} />
        <Flex
          h={"100vh"}
          w={"100%"}
          marginLeft={toggle ? { base: "0px", xl: "25rem" } : "0px"}
          transition={"800ms"}
          p="5.5rem"
          flexDir={"column"}
        >
          <MenuComponent />
          <Flex p="3%" mt={10} flexDir="column" overflow="auto">
            {" "}
            <Flex alignContent="center">
              <Heading mb={5} as="h2" size="lg" letterSpacing="tight">
                Manage Users
              </Heading>
            </Flex>
            <Flex flexDir="column">
              <Flex overflow="auto">
                <Table variant="unstyled" mt={4}>
                  <Thead>
                    <Tr color={fontColor}>
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
                          <Icon
                            as={FiTrash}
                            onClick={() => this.props.onDelete(this.props.id)}
                            fontSize="lg"
                          ></Icon>
                          &nbsp;
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
