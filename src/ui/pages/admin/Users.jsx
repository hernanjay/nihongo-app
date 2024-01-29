import {
    Box,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    useBoolean,
} from "@chakra-ui/react";
import ThemeColors from "../main/ThemeColors";
import SideBar from "../../components/SideBar";
import UsersRow from "./UsersRow";
import Loader from "../../components/Loader";
import { useUsers } from "../../../logic/hooks/user/useUsers";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Users = () => {
    const { users, isGettingUsers } = useUsers();
    const [toggle, setToggle] = useBoolean();
    const { bg, fontColor, body } = ThemeColors();
    const [searchTerm, setSearchTerm] = useState("");

    isGettingUsers && <Loader isLoading={isGettingUsers} />;

    const filteredData = !isGettingUsers
        ? users.filter((item) =>
              item.username.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : null;

    return (
        users && (
            <Box bg={body}>
                <SideBar toggle={toggle} onClick={setToggle.toggle} />
                <Flex
                    h={"100vh"}
                    w={"100%"}
                    transition={"800ms"}
                    pl={toggle ? "25vw" : "8vw"}
                    pr={"5vw"}
                    pt="10vh"
                    flexDir={"column"}
                    overflow="auto"
                    overscrollBehavior="auto"
                    sx={{
                        "&::-webkit-scrollbar": {
                            width: "12px",
                            borderRadius: "8px",
                            backgroundColor: `rgba(0, 0, 0, 0.25)`,
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: `rgba(0, 0, 0, 0.25)`,
                        },
                    }}
                >
                    <Box mt="3vh" minH="80vh" pb={{ base: "10vh", lg: "2em" }}>
                        <Flex
                            bg={bg}
                            p="1rem"
                            boxShadow="lg"
                            borderRadius="lg"
                            alignItems="center"
                        >
                            <Heading fontSize="1.75em">Manage Users</Heading>
                            <InputGroup
                                w="40%"
                                ms="auto"
                                alignItems="center"
                                p="0"
                            >
                                <InputLeftElement pointerEvents="none">
                                    <FiSearch />
                                </InputLeftElement>
                                <Input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="search name"
                                    colorScheme={fontColor}
                                    borderColor={fontColor}
                                    borderRadius="lg"
                                />
                            </InputGroup>
                        </Flex>

                        <Box
                            mt="3vh"
                            bg={bg}
                            p="1em"
                            boxShadow="lg"
                            borderRadius="lg"
                        >
                            <TableContainer
                                maxH="65vh"
                                overflowY="visible"
                                borderRadius="lg"
                                sx={{
                                    "&::-webkit-scrollbar": {
                                        width: "10px",
                                        backgroundColor: `rgba(0, 0, 0, 0.15)`,
                                        borderRightRadius: "lg",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        backgroundColor: `rgba(0, 0, 0, 0.15)`,
                                        borderRightRadius: "lg",
                                    },
                                }}
                                bg={bg}
                            >
                                <Table colorScheme={fontColor}>
                                    <Thead
                                        position="sticky"
                                        top={0}
                                        bg={bg}
                                        zIndex={2}
                                    >
                                        <Tr color={fontColor}>
                                            <Th>Username</Th>
                                            <Th textAlign="center">Email</Th>
                                            <Th textAlign="center">Role</Th>
                                            <Th textAlign="center">Actions</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {filteredData.map((user) => (
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
            </Box>
        )
    );
};
export default Users;
