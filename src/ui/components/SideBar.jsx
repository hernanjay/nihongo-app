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
import ThemeColors from "../pages/main/ThemeColors";

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
        link: "/manage-questionaire",
        icon: <FiPaperclip />,
    },
    {
        title: "Manage Users",
        link: "/users",
        icon: <FiUserCheck />,
    },
];

function SideBar({ toggle, onClick }) {
    const navigate = useNavigate();
    const { bg, fontColor, body, hover } = ThemeColors();

    return (
        <Flex
            bg={bg}
            h="100vh"
            pt="6.50rem"
            w="24.4rem"
            flexDir={["column"]}
            alignItems={"center"}
            flexWrap={"wrap"}
            left={toggle ? "0" : "-23.8rem"}
            transition="800ms"
            alignContent={"space-around"}
            position={"fixed"}
            display={{ base: "none", xl: "flex" }}
        >
            <IconButton
                aria-label="menu"
                icon={<FiMenu />}
                fontSize={"1.2rem"}
                bg={bg}
                _hover={{ bg: bg }}
                left={"23.3rem"}
                onClick={onClick}
                borderRadius={"50%"}
                position={"absolute"}
                zIndex={1}
                mt={"2.4rem"}
                color={fontColor}
                h={"5rem"}
                pl={"0.5rem"}
            ></IconButton>
            <Flex mt={"2rem"}>
                <Avatar
                    size="xl"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                />
            </Flex>
            <Flex
                pt={"1rem"}
                fontSize={"xl"}
                fontWeight={"bold"}
                color={fontColor}
            >
                @Username
            </Flex>
            <List
                mt={"1.8rem"}
                color={fontColor}
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
                            _hover={{ bg: hover }}
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
                mt={"1.5rem"}
                bg={body}
                // _hover={{ bg: "#61777F" }}
                color={fontColor}
                rightIcon={<FiLogOut />}
            >
                Logout
            </Button>
        </Flex>
    );
}

export default SideBar;
