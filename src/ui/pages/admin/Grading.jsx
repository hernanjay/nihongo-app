import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import ThemeColors from "../main/ThemeColors";
import ViewDetailsModal from './ViewDetailsModal';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  Thead,
  Tbody,
  Grid,
  Tr,
  Th,
  Td,
  Link,

} from "@chakra-ui/react";
import HomeUserProfileCard from "../../components/HomeUserProfileCard";
import {
  Heading,
  useBoolean,
} from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';
import { useState } from "react";
import { useEffect } from "react";
import SideBar from "../../components/SideBar";

const Grading = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onOpen = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const onClose = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };
  const token = JSON.parse(localStorage.getItem("token"));
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useBoolean();
  const { bg, fontColor, body } = ThemeColors();
  const data = [
    { id: 1, name: 'Rolly', email: 'rolly@awsys-i.com', level: 'N1', grade: '3' },
    { id: 2, name: 'Valto', email: 'valto@awsys-i.com', level: 'N4', grade: '3' },
    { id: 3, name: 'Marwan', email: 'marwan@awsys-i.com', level: 'N3', grade: '3' },
    { id: 4, name: 'Mario', email: 'mario@awsys-i.com', level: 'N3', grade: '3' },
    { id: 5, name: 'Auxman', email: 'Auxman@awsys-i.com', level: 'N3', grade: '3' },
    { id: 6, name: 'Daboy', email: 'Daboy@awsys-i.com', level: 'N3', grade: '3' },
    { id: 7, name: 'Hayahay', email: 'Hayahay@awsys-i.com', level: 'N3', grade: '3' },


  ];

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
  }, [token]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === '' || item.level === selectedLevel)
  );

  return (
    <>
      <Box data-testid="home-container" pb={"5vw"}>
        <SideBar toggle={toggle} onClick={setToggle.toggle} />
        <Flex
          minH={"100vh"}
          marginLeft={toggle ? "20rem" : "20px"}
          transition={"800ms"}

          flexDir={"column"}
        >
          <Divider minH="10vh" />

          <Box
            pt={{ base: "2.5vh", lg: "5vh" }}
            h="90vh"
            overflow="auto"
            overscrollBehavior="auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "0px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.25)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `rgba(0, 0, 0, 0.25)`,
              },
            }}
          >
           
            <HomeUserProfileCard />

           
            <Box
              ml={{ base: "2.5vw", lg: "35vw" }}
              maxW={{ base: "90vw", lg: "60vw" }}
            >


              <Flex
                variant="line"
                colorScheme="white"
                h="80vh"
                flex="Auto"
                minW={{ base: "92vw", lg: "60vw" }}
                bg={bg}
                borderRadius="10"
                boxShadow="lg"
                pb="2.25vh"


              >


                <Grid templateColumns="repeat(1, 2fr)" m="1%" w="100%">
                  <Heading
                    p="2%"
                  >List of Students
                  </Heading>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6} >
                    <InputGroup
                      borderRadius="10px"
                      mr={2}
                    >
                      <InputLeftElement
                        pointerEvents="none"
                        children={<FiSearch color="gray" />}
                      />
                      <Input
                        mb={4}
                        letterSpacing="tight"

                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Filter by Name"
                        borderRadius="10px"
                      />
                    </InputGroup>
                    <Select
                      mb={4}
                      letterSpacing="tight"

                      placeholder="Filter by Nihongo Level"
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                    >
                      <option value="N1">N1</option>
                      <option value="N2">N2</option>
                      <option value="N3">N3</option>
                      <option value="N4">N4</option>
                      <option value="N5">N5</option>
                    </Select>

                  </Grid>
                  <Grid
                    templateColumns="repeat(1, 1fr)"
                    gap={10}
                    pt="5%"
                    h="60vh"
                    mb={10}
                  >
                    <Flex flexDir="column" overflow="auto" >
                      <Flex overflow="auto">
                        <Table id="myTable"
                          variant="unstyled"
                          mt={1}
                          mb={1}
                          letterSpacing="tight"
                        >
                          <Thead>
                            <Tr color="gray">
                              <Th>Name of Student</Th>
                              <Th>Email</Th>
                              <Th>Nihongo Level</Th>
                              <Th>Action</Th>
                            </Tr>
                          </Thead>

                          <Tbody>

                            {filteredData.map((item) => (
                              <Tr key={item.id}
                                _even={{ bg: 'gray.100' }}
                                _odd={{ bg: 'white' }}>
                                <Td>{item.name}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.level}</Td>
                                <Td>
                                  <Link color="blue.500" onClick={() => onOpen(item)}>
                                    View Complete Details
                                  </Link>

                                </Td>
                              </Tr>

                            ))}
                          </Tbody>
                        </Table>
                        <ViewDetailsModal isOpen={isOpen} onClose={onClose} selectedItem={selectedItem} />
                      </Flex>
                    </Flex>


                  </Grid>
                </Grid>
              </Flex>







            </Box>

            {/* Home Page End */}
            <Divider minH="5vh" />

          </Box>
        </Flex >
      </Box >
    </>
  );
};
export default Grading;