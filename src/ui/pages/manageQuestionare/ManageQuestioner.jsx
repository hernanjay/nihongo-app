import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import {
    Flex,
    Heading,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
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
    useBoolean,
} from "@chakra-ui/react";
import {
    FiPlusCircle,
    FiPlus,
    // FiMinus,
    // FiFilePlus,
} from "react-icons/fi";
import SideBar from "../../components/SideBar";
import MenuComponent from "../../components/MenuComponent";
import ThemeColors from "../main/ThemeColors";
import AddQuestions from "./AddQuestions";
//   const [display, changeDisplay] = useState("hide");
function ManageQuestioner() {
    const [options, setOptions] = useState([]);
    const [translationFields, setTranslationFields] = useState([]);
    // const [tableData, setTableData] = useState([]);
    // const [selectTypeValue, setSelectTypeValue] = useState("");
    // const [addButtonClicked, setAddButtonClicked] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure({
        closeOnOverlayClick: false,
        closeOnEsc: false,
    });

    const addTranslationInput = () => {
        if (translationFields.length < 4) {
            setTranslationFields([...translationFields, ""]);
        }
    };

    const translationInputChange = (index, value) => {
        const updatedFields = [...translationFields];
        updatedFields[index] = value;
        setTranslationFields(updatedFields);
    };

    const resetFields = () => {
        setOptions([]);
        setTranslationFields([]);
        onClose();
    };

    const saveBtn = () => {
        // Combine input fields and translation fields into a single entry
        // const entry = {
        //   options: options,
        //   translation: translationFields,
        // };

        // Update the table data
        // setTableData((prevTableData) => [...prevTableData, entry]);

        // Reset input fields
        setOptions([]);
        setTranslationFields([]);

        // Close the modal
        onClose();
    };

    const [toggle, setToggle] = useBoolean();
    const { bg, fontColor, body } = ThemeColors();
    return (
        <Box>
            <Flex flexDir={"row"} justifyContent={"center"} overflow={"auto"}>
                <SideBar toggle={toggle} onClick={setToggle.toggle} />
                <Flex
                    h={"100vh"}
                    w={"100%"}
                    marginLeft={toggle ? { base: "0px", xl: "25rem" } : "0px"}
                    transition={"800ms"}
                    p="5.5rem"
                    flexDir={"column"}
                >
                    <MenuComponent />

                    <Flex align="flex-end">
                        <Heading mt={5} as="h2" size="lg" letterSpacing="tight">
                            Manage Questionnaires
                        </Heading>
                    </Flex>
                    <Box h="10%" alignSelf="flex-end">
                        <Button
                            leftIcon={<FiPlusCircle />}
                            onClick={onOpen}
                            bg={body}
                        >
                            Add Question
                        </Button>
                        <AddQuestions
                            isOpen={isOpen}
                            onClose={onClose}
                            options={options}
                            setOptions={setOptions}
                        />
                    </Box>
                    <Flex flexDir="column">
                        <Flex overflow="auto">
                            <Table variant="unstyled" mt={4}>
                                <Thead>
                                    <Tr color={fontColor}>
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
