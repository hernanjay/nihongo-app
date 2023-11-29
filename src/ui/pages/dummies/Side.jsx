import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  useBoolean,
  // IconButton,
  // Link,
  // List,
  // ListItem,
} from "@chakra-ui/react";
// import { useState } from "react";
// import React from "react";
// import {
//   FiHome,
//   FiBook,
//   FiUser,
//   FiUserCheck,
//   FiPaperclip,
//   // FiMenu,
// } from "react-icons/fi";
import ChartComp from "../../Components/Chart";
import DoughnutChart from "../../components/Doughnut";
import SideBar from "../../components/SideBar";

// const menus = [
//   {
//     title: "Dashboard",
//     link: "/admin",
//     icon: <FiHome></FiHome>,
//   },
//   {
//     title: "Grading",
//     link: "/grading",
//     icon: <FiBook />,
//   },
//   {
//     title: "List of Students",
//     link: "/list",
//     icon: <FiUser />,
//   },
//   {
//     title: "Manage Questionnaire",
//     link: "/managequestioner",
//     icon: <FiPaperclip />,
//   },
//   {
//     title: "Manage Users",
//     link: "/user",
//     icon: <FiUserCheck />,
//   },
// ];

function Side() {
  const [toggle, setToggle] = useBoolean();

  // const buttonClick = () => {
  //   return setToggle(!toggle);
  // };
  console.log(toggle);
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
      <Flex flexDir={"row"} justifyContent={"center"}>
        {/* <Flex
          bg="#2C3639"
          h="100vh"
          pt="6.50rem"
          w="24.4rem"
          flexDir={["column"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          left={toggle ? "0" : "-23rem"}
          transition="800ms"
          alignContent={"space-around"}
          position={"fixed"}
        >
          <IconButton
            aria-label="menu"
            icon={<FiMenu />}
            bg="#2C3639"
            _hover={"none"}
            _active={"none"}
            left={"23.4rem"}
            onClick={buttonClick}
            borderRadius={"40%"}
            position={"absolute"}
            zIndex={1}
            mt={"2.4rem"}
            color={"white"}
          ></IconButton>
          <Flex
            borderRadius={50}
            bg={"black"}
            fontSize={60}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            h={90}
            w={90}
            mt={"3rem"}
          >
            <FiUser />
          </Flex>
          <Flex pt={"2rem"} fontSize={"xl"} fontWeight={"bold"} color={"white"}>
            @Username
          </Flex>
          <List mt={"3rem"} color={"white"}>
            {menus.map((value, key) => {
              return (
                <ListItem
                  key={key}
                  display={"flex"}
                  alignItems={"center"}
                  pt={10}
                  fontSize={13}
                  // _hover={{pointer: "none"}}
                >
                  <Box pt={3} pb={3} pr={8}>
                    <Link href={value.link}>{value.icon}</Link>
                  </Box>
                  <Box pt={1}>
                    <Link href={value.link} _hover={{ textDecor: "none" }}>
                      {value.title}{" "}
                    </Link>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Flex> */}
        <SideBar toggle={toggle} onClick={setToggle.toggle} />
        <Flex
          minH={"100vh"}
          marginLeft={toggle ? "20rem" : "0px"}
          transition={"800ms"}
          p="100px"
          flexDir={"column"}
        >
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
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5%">
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N1
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N2
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N3
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N4
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N5
              </Heading>
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

export default Side;
