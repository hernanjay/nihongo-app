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
import UserProfileModal from "./UserProfileModal";

const Users = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const [users, setUsers] = useState([]);
    const [toggle, setToggle] = useBoolean();
    const { bg, fontColor, body } = ThemeColors();

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(
                `${import.meta.env.VITE_LOCALHOST_API}/api/users/all`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const json = await res.json();

            if (!res.ok) {
                console.log(json.error);
            }

            if (res.ok) {
                setUsers(json);
            }
        };
        fetchUsers();
    }, [token, users]);

    return (
        <Box bg={body}>
            <SideBar toggle={toggle} onClick={setToggle.toggle} />
            <Flex flexDir={"row"} justifyContent={"center"} overflow={"auto"}>
                <Flex
                    h={"100vh"}
                    w={"100%"}
                    marginLeft={toggle ? { base: "0px", xl: "23.8rem" } : "0px"}
                    transition={"800ms"}
                    p="5.5rem"
                    flexDir={"column"}
                >
                    <Heading mt={5}>Manage Users</Heading>
                    {/* <Box maxH="60vh"> */}
                    <TableContainer mt="2rem" overflowY="auto">
                        <Table variant="unstyled" minH="80vh">
                            <Thead position="sticky" top={0} bg={bg} zIndex={2}>
                                <Tr color={fontColor}>
                                    <Th>Name of Student</Th>
                                    <Th>Email</Th>
                                    <Th>Nihongo Level</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users.map((user) => (
                                    <UsersRow user={user} key={user._id} />
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
            </Flex>
        </Box>
    );
};
export default Users;
