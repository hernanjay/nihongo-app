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
// import Chart from "../../Components/Chart";
// import Chart from "../../Components/chartComponent/Chart.jsx";
// import { color } from "framer-motion";

export default function Admindashboard() {
  const [display, changeDisplay] = useState("hide");
  const boxStyle = {
    w: "100%",
    h: "150",
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
    <Box>
      <Flex
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        justifyContent="center"
        boxShadow="outline"
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
          <Grid templateColumns="repeat(3, 1fr)" gap={10} pt="5%" h="60vh">
            <GridItem bg={"blue"} colSpan={2}>
              <Grid templateRows="repeat(3, 1fr)" h="52vh">
                <GridItem rowSpan={1} w="100%" bg="blue"></GridItem>
                <GridItem rowSpan={2} w="100%" bg="gray">
                  {/* <Chart></Chart> */}
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem bg={"green"}></GridItem>
          </Grid>
        </Flex>
        {/* Column 3 */}
        {/* <Flex w="45%" bgColor="#f5f5f5" p="3%" flexDir="column" overflow="auto">
        
      </Flex> */}
      </Flex>
    </Box>
  );
}
