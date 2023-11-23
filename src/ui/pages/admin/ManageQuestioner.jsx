import React from "react";
import { useState } from "react";
// import { Chart } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // AvatarGroup,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  // Link,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  Textarea,
  Radio,
} from "@chakra-ui/react";
import {
  FiEdit,
  FiUser,
  FiPaperclip,
  FiUserCheck,
  FiEye,
  FiTrash,
  FiPlusCircle,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import { TriangleDownIcon } from "@chakra-ui/icons";
export default function List() {
  //   const [display, changeDisplay] = useState("hide");
  const [Setvisible] = useState("true");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = ["lg"];
  return (
    <Box>
      <Flex
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        justifyContent="center"
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
              <BreadcrumbLink href="/list">Manage Questionnaire</BreadcrumbLink>
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
                <MenuItem as="a" href="/grading" icon={<FiPaperclip />}>
                  Grading
                </MenuItem>
                <MenuItem as="a" href="/list" icon={<FiUser />}>
                  List of Students
                </MenuItem>

                <MenuItem as="a" href="/user" icon={<FiUserCheck />}>
                  Manage Users
                </MenuItem>
              </MenuList>
            </Menu>
          </Breadcrumb>
          <Flex align="flex-end">
            <Heading mt={5} as="h2" size="lg" letterSpacing="tight">
              Manage Questionnaires
            </Heading>
            {/* <Text fontSize="sm" color="gray" ml={4}>
              November 2023
            </Text> */}
          </Flex>
          <Box h="10%" alignSelf="flex-end">
            <Button leftIcon={<FiPlusCircle />} onClick={onOpen} bg="white">
              Add Question
            </Button>

            <Modal isOpen={isOpen} size={size} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Questionnaire Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <FormControl isRequired>
                      <FormLabel>Select Level</FormLabel>
                      <Select>
                        <option>N1</option>
                        <option>N2</option>
                        <option>N3</option>
                        <option>N4</option>
                        <option>N5</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Select Section</FormLabel>
                      <Select>
                        <option>Vocab</option>
                        <option>Grammar</option>
                        <option>Kanji</option>
                      </Select>
                    </FormControl>
                  </Grid>

                  <FormControl isRequired>
                    <FormLabel>Question</FormLabel>
                    <Textarea placeholder="Write Question" />
                  </FormControl>
                  <IconButton
                    icon={Setvisible == "true" ? <FiPlus /> : <FiMinus />}
                    onClick={() => {
                      if (Setvisible == "true") {
                            <Box bg="blue"></Box>
                      } else {
                        <Box bg="blue"></Box>
                      }
                    }}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3}>
                    Save
                  </Button>
                  <Button colorScheme="red" onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Flex flexDir="column">
            <Flex overflow="auto">
              <Table variant="unstyled" mt={4}>
                <Thead>
                  <Tr color="gray">
                    <Th>Questions</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Grammar
                          </Heading>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>
                      <Link>
                        <Icon as={FiEye} fontSize="lg"></Icon>&nbsp;&nbsp;&nbsp;
                      </Link>
                      <Link>
                        <Icon as={FiEdit} fontSize="lg"></Icon>
                        &nbsp;&nbsp;&nbsp;
                      </Link>
                      <Link>
                        <Icon
                          as={FiTrash}
                          onClick={() => this.props.onDelete(this.props.id)}
                          fontSize="lg"
                        ></Icon>
                        &nbsp;
                      </Link>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Listening
                          </Heading>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>
                      <Link>
                        <Icon as={FiEye} fontSize="lg"></Icon>&nbsp;&nbsp;&nbsp;
                      </Link>
                      <Link>
                        <Icon as={FiEdit} fontSize="lg"></Icon>
                        &nbsp;&nbsp;&nbsp;
                      </Link>
                      <Link>
                        <Icon
                          as={FiTrash}
                          onClick={() => this.props.onDelete(this.props.id)}
                          fontSize="lg"
                        ></Icon>
                        &nbsp;
                      </Link>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Vocab
                          </Heading>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>
                      <Link>
                        <Icon as={FiEye} fontSize="lg"></Icon>&nbsp;&nbsp;&nbsp;
                      </Link>
                      <Link>
                        <Icon as={FiEdit} fontSize="lg"></Icon>
                        &nbsp;&nbsp;&nbsp;
                      </Link>
                      <Link>
                        <Icon
                          as={FiTrash}
                          onClick={() => this.props.onDelete(this.props.id)}
                          fontSize="lg"
                        ></Icon>
                        &nbsp;
                      </Link>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Flex>
          </Flex>
          {/* <Flex flexDir="column">
                        <Flex overflow="auto">

                        </Flex>
                        <Flex align="center">
                            <Divider />
                            <IconButton
                                icon={display == "show" ? <FiChevronUp /> : <FiChevronDown />}
                                onClick={() => {
                                    if (display == "show") {
                                        changeDisplay("none");
                                    } else {
                                        changeDisplay("show");
                                    }
                                }}
                            />
                            <Divider />
                        </Flex>
                    </Flex> */}
        </Flex>
      </Flex>
    </Box>
  );
}
