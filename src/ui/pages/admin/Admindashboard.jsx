import React from "react";
import { useState } from "react";
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
  Button,
  MenuList,
  MenuItem,
  GridItem,
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
  FiUser,
  FiUserCheck,
  FiPaperclip,
  FiMenu,
  FiArrowDown,
} from "react-icons/fi";
import ChartComp from "../../Components/Chart";
import DoughnutChart from "../../components/Doughnut";
// import DoughnutChart from "../../components/Doughnut";
import { TriangleDownIcon } from "@chakra-ui/icons";
// import Chart from "../../Components/chartComponent/Chart.jsx";
// import { color } from "framer-motion";

export default function Admindashboard() {
  const boxStyle = {
    w: "100%",
    h: "150",
    shadow: "lg",
    bgColor: "RGBA(0, 0, 0, 0.06)",
  };
  const headStyle = {
    color: "blackAlpha.900",
    textAlign: "left",
    p: 3,
    m: 2,
    fontSize: "1.5em",
  };
  return (
    <Box>
      <Flex
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        justifyContent="center"
        
      >
        {/* Column 1 */}
        {/* Column 2 */}
        <Flex
          w="90%"
          p="5%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          bg="white"
          pt="6%"
        
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            {/* <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem> */}

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<TriangleDownIcon />}
                variant="outline"
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
                <MenuItem as="a" href="/user" icon={<FiUserCheck />}>
                  Manage Users
                </MenuItem>
              </MenuList>
            </Menu>
          </Breadcrumb>
          {/* Column 2 */}{" "}
          <Heading
            fontWeight="normal"
            mb={4}
            letterSpacing="tight"
            fontSize="2xl"
            mt="2%"
          >
            Welcome,{" "}
            <Flex fontWeight="bold" display="inline-flex">
              Admin Name
            </Flex>
            !
          </Heading>{" "}
          {/* fetch the id of student percentage per nihongo level */}
          <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5%">
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N1
              </Heading>
              {/* <Text>Percentage Context</Text> */}
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N2
              </Heading>
              {/* <Text>Percentage Context</Text> */}
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N3
              </Heading>
              {/* <Text>Percentage Context</Text> */}
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N4
              </Heading>
              {/* <Text>Percentage Context</Text> */}
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N5
              </Heading>
              {/* <Text>Percentage Context</Text> */}
            </Box>
          </Grid>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={10}
            pt="5%"
            h="60vh"
            mb={10}
          >
            <GridItem colSpan={2} border="2px groove">
              <ChartComp />
            </GridItem>
            <GridItem colSpan={1} border="2px groove">
              <DoughnutChart></DoughnutChart>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
}
