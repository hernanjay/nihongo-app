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
} from "react-icons/fi";
import ChartComp from "../../Components/Chart";
import DoughnutChart from "../../components/Doughnut";
// import DoughnutChart from "../../components/Doughnut";
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
    m: 3,
    fontSize: "2em",
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
          boxShadow="2xl"
        >
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
          </Breadcrumb>{" "}
          <Heading
            fontWeight="normal"
            mb={4}
            letterSpacing="tight"
            fontSize="5xl"
            mt="2%"
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
