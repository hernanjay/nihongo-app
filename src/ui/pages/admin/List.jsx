import React, { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import {
  ChakraProvider,
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from '@chakra-ui/react';
import { FiBook, FiSearch, FiPaperclip, FiUserCheck } from 'react-icons/fi';
import { TriangleDownIcon } from '@chakra-ui/icons';

const List = () => {
  const data = [
    { id: 1, name: 'Rolly', email:'rolly@awsys-i.com', level: 'N1', grade: '3' },
    { id: 2, name: 'Valto', email:'valto@awsys-i.com', level: 'N4', grade: '3' },
    { id: 3, name: 'Marwan', email:'marwan@awsys-i.com', level: 'N3', grade: '3' },
    { id: 4, name: 'Mario', email:'mario@awsys-i.com', level: 'N3', grade: '3' },
  ];

  const TableWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLevel === '' || item.level === selectedLevel)
    );

    return (
      <Flex
        flexDir={['column', 'column', 'row']}
        overflow="hidden"
        justifyContent="center"
        bg = "gray.200"
        
      >
        <Flex
          w="90%"
          p="5%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          bg="white"
          pt="6%"
          boxShadow="2xl"
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/list">List of Students</BreadcrumbLink>
            </BreadcrumbItem>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<TriangleDownIcon />}
                variant="outline"
                border="none"
              />
              <MenuList>
                <MenuItem as="a" href="/grading" icon={<FiBook />}>
                  Grading
                </MenuItem>
                <MenuItem as="a" href="/managequestioner" icon={<FiPaperclip />}>
                  Manage Questionnaire
                </MenuItem>
                <MenuItem as="a" href="/user" icon={<FiUserCheck />}>
                  Manage Users
                </MenuItem>
              </MenuList>
            </Menu>
          </Breadcrumb>
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
                     <a href='#' >view Complete Details</a>
                    </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Flex>
          
          </Flex>
        </Flex>
      </Flex>
    );
  };

  return (
    <ChakraProvider>
      <TableWithSearch />
    </ChakraProvider>
  );
};

export default List;
