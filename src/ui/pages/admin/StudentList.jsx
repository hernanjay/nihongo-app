import { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    useBoolean,
    Input,
    InputGroup,
    InputLeftElement,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Tooltip,
    IconButton,
    TableContainer,
    useDisclosure,
} from "@chakra-ui/react";
import { FiEdit, FiEye, FiSearch } from "react-icons/fi";
import SideBar from "../../components/SideBar";
import { useFetchStudentUser } from "../../../logic/hooks/user/useFetchStudentUser";
import ThemeColors from "../main/ThemeColors";
import UserProfileModal from "./UserProfileModal";
import StudentRow from "./StudentRow";

export default function StudentList() {
    const { bg, fontColor, hover } = ThemeColors();
    const [toggle, setToggle] = useBoolean();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { studentUsers, isFetchingStudent } = useFetchStudentUser();
    const [searchTerm, setSearchTerm] = useState("");
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const filteredUser = !isFetchingStudent
        ? studentUsers.filter((user) =>
              user.username.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : null;

    return (
        <Box>
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
                        <Heading fontSize="1.75em">List of Student</Heading>
                        <InputGroup w="40%" ms="auto" alignItems="center" p="0">
                            <InputLeftElement pointerEvents="none">
                                <FiSearch />
                            </InputLeftElement>
                            <Input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
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
                                    zIndex={3}
                                    top={0}
                                    bg={hover}
                                >
                                    <Tr>
                                        <Th textAlign="center">Name</Th>
                                        <Th textAlign="center">Email</Th>
                                        {/* <Th>Nihongo Level</Th> */}
                                        <Th textAlign="center">Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {filteredUser?.map((user) => (
                                        <StudentRow user={user} key={user.id} />
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}
