import {
  ChakraProvider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useBoolean,
  Spacer,
} from "@chakra-ui/react";

import SideBar from "../../components/SideBar";
import MenuComponent from "../../components/MenuComponent";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ThemeColors from "../main/ThemeColors";

const List = () => {
  const {  bg, fontColor, body, hover } = ThemeColors();
  const data = [
    {
      id: 1,
      name: "Rolly",
      email: "rolly@awsys-i.com",
      level: "N1",
      grade: "3",
    },
    {
      id: 2,
      name: "Valto",
      email: "valto@awsys-i.com",
      level: "N4",
      grade: "3",
    },
    {
      id: 3,
      name: "Marwan",
      email: "marwan@awsys-i.com",
      level: "N3",
      grade: "3",
    },
    {
      id: 4,
      name: "Mario",
      email: "mario@awsys-i.com",
      level: "N3",
      grade: "3",
    },
  ];

  const TableWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [toggle, setToggle] = useBoolean();

    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLevel === "" || item.level === selectedLevel)
    );

    return (
      <Box>
        <Flex flexDir={"row"} justifyContent={"center"} overflow={"auto"} bg={body}>
          <SideBar toggle={toggle} onClick={setToggle.toggle} />
          <Flex
            h={"100vh"}
            w={"100%"}
            marginLeft={toggle ? { base: "0px", xl: "25rem" } : "0px"}
            transition={"800ms"}
            p="5.5rem"
            flexDir={"column"}
          >
            <MenuComponent></MenuComponent>
            <Flex align="flex-end">
              <Heading mt={5} as="h2" size="lg" letterSpacing="tight">
                List of Students
              </Heading>
            </Flex>
            <Flex align="flex-end">
              <Heading mt={6} as="h5" size="xs" letterSpacing="tight">
                Filter By:
              </Heading>
            </Flex>
            <Flex alignContent="center" p={5}>
              <InputGroup
                bgColor="#fff"
                mb={4}
                border="none"
                borderColor="BlackAlpha 900"
                borderRadius="10px"
                mr={2}
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<FiSearch color="gray" />}
                />
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter by Name"
                  borderRadius="10px"
                />
              </InputGroup>
              <Select
                bgColor="#fff"
                mb={4}
                borderColor="BlackAlpha 900"
                borderRadius="10px"
                mr={2}
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
            </Flex>
            <Flex flexDir="column">
              <Flex overflow="auto">
                <Table id="myTable" variant="unstyled" mt={4}>
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
                      <Tr key={item.id}>
                        <Td>{item.name}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.level}</Td>
                        <Td>
                          <a href="#">view Complete Details</a>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Flex>
            </Flex>
            <Spacer minH={"5vh"}></Spacer>
          </Flex>
        </Flex>
      </Box>
    );
  };

  return (
    <ChakraProvider>
      <TableWithSearch />
    </ChakraProvider>
  );
};

export default List;
