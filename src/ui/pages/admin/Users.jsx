import {
    Box,
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    useBoolean,
} from "@chakra-ui/react";
import { useState } from "react";
import ThemeColors from "../main/ThemeColors";
import { useEffect } from "react";
import SideBar from "../../components/SideBar";
import UsersRow from "./UsersRow";
import Loader from "../../components/Loader";
import { useUsers } from "../../../logic/hooks/user/useUsers";

const Users = () => {
    const { users, isGettingUsers } = useUsers();
    const [toggle, setToggle] = useBoolean();
    const { bg, fontColor, body } = ThemeColors();

    isGettingUsers && <Loader isLoading={isGettingUsers} />;

    return (
        users && (
            <Box bg={body}>
                <SideBar toggle={toggle} onClick={setToggle.toggle} />
                <Flex
                    flexDir={"row"}
                    justifyContent={"center"}
                    overflow={"auto"}
                >
                    <Flex
                        h={"100vh"}
                        w={"90vw"}
                        marginLeft={
                            toggle ? { base: "0px", xl: "23.8rem" } : "0px"
                        }
                        transition={"800ms"}
                        ml="2.5vw"
                        pt="10vh"
                        flexDir={"column"}
                    >
                        <Box p="2.5em">
                            <Box
                                bg={bg}
                                p="1em"
                                mb="1em"
                                borderRadius="lg"
                                boxShadow="lg"
                            >
                                <Heading fontSize="1.75em">
                                    Manage Users
                                </Heading>
                            </Box>
                            <Box
                                bg={bg}
                                py="2em"
                                px="1em"
                                borderRadius="lg"
                                boxShadow="lg"
                            >
                                <TableContainer overflowY="auto" maxH="60vh">
                                    <Table variant="unstyled" minH="6vh">
                                        <Thead
                                            position="sticky"
                                            top={0}
                                            bg={bg}
                                            zIndex={2}
                                        >
                                            <Tr color={fontColor}>
                                                <Th>Name of Student</Th>
                                                <Th>Email</Th>
                                                <Th>Actions</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {users.map((user) => (
                                                <UsersRow
                                                    user={user}
                                                    key={user._id}
                                                />
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        )
    );
};
export default Users;
