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
  // ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  Textarea,
} from "@chakra-ui/react";
import {
  FiUser,
  FiPaperclip,
  FiUserCheck,
  FiPlusCircle,
  FiPlus,
  // FiMinus,
  // FiFilePlus,
} from "react-icons/fi";
import { TriangleDownIcon } from "@chakra-ui/icons";
//   const [display, changeDisplay] = useState("hide");
function ManageQuestioner() {
  const [inputFields, setInputFields] = useState([]);
  const [translationFields, setTranslationFields] = useState([]);
  // const [tableData, setTableData] = useState([]);
  // const [selectTypeValue, setSelectTypeValue] = useState("");
  // const [addButtonClicked, setAddButtonClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure({
    closeOnOverlayClick: false,
    closeOnEsc: false,
  });

  const addInput = () => {
    if (inputFields.length < 4) {
      setInputFields([...inputFields, ""]);
    }
  };
  
  const addTranslationInput = () => {
    if (translationFields.length < 4) {
      setTranslationFields([...translationFields, ""]);
    }
  };

  const inputChange = (index, value) => {
    const updatedFields = [...inputFields];
    updatedFields[index] = value;
    setInputFields(updatedFields);
  };

  const translationInputChange = (index, value) => {
    const updatedFields = [...translationFields];
    updatedFields[index] = value;
    setTranslationFields(updatedFields);
  };

  const resetFields = () => {
    setInputFields([]);
    setTranslationFields([]);
    onClose();
  };

  const saveBtn = () => {
    // Combine input fields and translation fields into a single entry
    // const entry = {
    //   options: inputFields,
    //   translation: translationFields,
    // };

    // Update the table data
    // setTableData((prevTableData) => [...prevTableData, entry]);

    // Reset input fields
    setInputFields([]);
    setTranslationFields([]);

    // Close the modal
    onClose();
  };

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
          </Flex>
          <Box h="10%" alignSelf="flex-end">
            <Button leftIcon={<FiPlusCircle />} onClick={onOpen} bg="white">
              Add Question
            </Button>

            <Modal isOpen={isOpen} size={size} isCloseable={false}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Questionnaire Form</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                  <FormControl isRequired>
                    <FormLabel>Question</FormLabel>
                    <Textarea placeholder="Write Question" />
                  </FormControl>
                  <Box mt={5} mb={5}>
                    <FormControl isRequired>
                      <FormLabel>options:</FormLabel>
                      <Box>
                        <IconButton icon={<FiPlus />} onClick={addInput} />
                        {inputFields.map((value, index) => (
                          <Flex key={index} mt={5} mb={5}>
                            {index <= 3 && (
                              <>
                                <FormLabel
                                  mt={2}
                                  htmlFor={`inputField-${index + 1}`}
                                >{`${String.fromCharCode(
                                  65 + index
                                )}.`}</FormLabel>
                                <Input
                                  type="text"
                                  id={`inputField-${index + 1}`}
                                  value={value}
                                  onChange={(e) =>
                                    inputChange(index, e.target.value)
                                  }
                                />
                              </>
                            )}
                          </Flex>
                        ))}
                      </Box>
                      <Button mt={4}>Add</Button>
                    </FormControl>
                  </Box>
                  <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    <FormControl isRequired>
                      <FormLabel>Set</FormLabel>
                      <Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Select>
                    </FormControl>
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
                      <FormLabel>Select Type</FormLabel>
                      <Select>
                        <option>Vocab</option>
                        <option>Grammar</option>
                        <option>Kanji</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid mt={5}>
                    <FormControl isRequired>
                      <FormLabel>Answer</FormLabel>
                      <Input placeholder="Enter answer" />
                    </FormControl>
                  </Grid>
                  <Box mt={5} mb={5}>
                    <FormControl isRequired>
                      <FormLabel>Options Translate:</FormLabel>

                      <Box>
                        <IconButton
                          icon={<FiPlus />}
                          onClick={addTranslationInput}
                        />
                        {translationFields.map((value, index) => (
                          <Flex key={index} mt={5} mb={5}>
                            {index <= 3 && (
                              <>
                                <FormLabel
                                  mt={2}
                                  htmlFor={`translationField-${index + 1}`}
                                >{`${index + 1}.`}</FormLabel>
                                <Input
                                  type="text"
                                  id={`translationField-${index + 1}`}
                                  value={value}
                                  onChange={(e) =>
                                    translationInputChange(
                                      index,
                                      e.target.value
                                    )
                                  }
                                />
                              </>
                            )}
                          </Flex>
                        ))}
                      </Box>
                      <Button mt={4}>Add</Button>
                    </FormControl>
                  </Box>
                  <FormControl isRequired>
                    <FormLabel>Question Translate</FormLabel>
                    <Textarea placeholder="Enter Translation" />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={saveBtn}>
                    Save
                  </Button>
                  <Button colorScheme="red" onClick={resetFields}>
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
                    <Th>Type</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td></Td>
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
export default ManageQuestioner;
