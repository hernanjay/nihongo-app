import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { useState } from "react";
// import React from "react";
import {
  FiHome,
  FiBook,
  FiUser,
  FiUserCheck,
  FiPaperclip,
  FiMenu,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: <FiHome></FiHome>,
  },
  {
    title: "Grading",
    link: "/grading",
    icon: <FiBook />,
  },
  {
    title: "List of Students",
    link: "/list",
    icon: <FiUser />,
  },
  {
    title: "Manage Questionnaire",
    link: "/managequestioner",
    icon: <FiPaperclip />,
  },
  {
    title: "Manage Users",
    link: "/user",
    icon: <FiUserCheck />,
  },
];

function SideBar({ toggle, onClick }) {
  // const [toggle, setToggle] = useState(true);
  // const buttonClick = () => {
  //   return setToggle(!toggle);
  // };

  const navigate = useNavigate();

  return (
    <Flex
      bg="dark.200"
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
        fontSize={"1.2rem"}
        bg="dark.200"
        _hover={{ bg: "dark.200" }}
        left={"22.8rem"}
        onClick={onClick}
        borderRadius={"40%"}
        position={"absolute"}
        zIndex={1}
        mt={"2.4rem"}
        color={"white"}
        h={"4.5rem"}
      ></IconButton>
      <Flex
        borderRadius={"3rem"}
        bg={"#2C3639"}
        fontSize={"4rem"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"white"}
        h={"6rem"}
        w={"6rem"}
        mt={"3rem"}
      >
         <Avatar size="xl" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      </Flex>
      <Flex pt={"1rem"} fontSize={"xl"} fontWeight={"bold"} color={"white"}>
        @Username
      </Flex>
      <List
        mt={"3rem"}
        color={"white"}
        width={"100%"}
        alignItems={"center"}
        p={2}
      >
        {menus.map((value, key) => {
          return (
            <ListItem
              key={key}
              display={"flex"}
              pt={"1.3rem"}
              pb={"1.3rem"}
              pl={"4.5rem"}
              alignItems={"center"}
              fontSize={"md"}
              onClick={() => navigate(`${value.link}`)}
              cursor={"pointer"}
              _hover={{ bg: "#2C3639" }}
              width={"100%"}
              borderRadius={"00.75rem"}
            >
              <Box pt={"0.188rem"} pb={"0.188rem"} pr={"1.8rem"}>
                {value.icon}
              </Box>
              <Box pt={"0.1rem"}>{value.title}</Box>
            </ListItem>
          );
        })}
      </List>
      <Button
        mt={"3.5rem"}
        bg="#2C3639"
        _hover={{ bg: "#61777F" }}
        color={"white"}
        rightIcon={<FiLogOut />}
      >
        Logout
      </Button>
    </Flex>
  );
}

export default SideBar;
