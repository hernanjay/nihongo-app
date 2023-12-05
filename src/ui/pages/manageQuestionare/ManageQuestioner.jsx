import React, { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import {
    Flex,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Box,
    Button,
    useDisclosure,
    useBoolean,
    TableContainer,
    useToast,
} from "@chakra-ui/react";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";
import SideBar from "../../components/SideBar";
import ThemeColors from "../main/ThemeColors";
import AddQuestions from "./AddQuestions";
import QuestionRow from "./QuestionRow";
import { addQuestions } from "../../../logic/services/apiQuestions";
import ViewEditQuestion from "./ViewEditQuestion";
//   const [display, changeDisplay] = useState("hide");
function ManageQuestioner() {
    const toast = useToast();
    const [questions, setQuestions] = useState([]);
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [qnPreview, setQnPreview] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure({
        closeOnOverlayClick: false,
        closeOnEsc: false,
    });

    const [toggle, setToggle] = useBoolean();
    const { bg, fontColor, body } = ThemeColors();

    function handleClearBtn() {
        setQuestions([]);
        localStorage.removeItem("questions");
    }

    async function handleSubmit() {
        const isAdded = await addQuestions(questions);

        if (isAdded.status) {
            toast({
                title: "Questions Added Successfully!",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            handleClearBtn();
        } else {
            toast({
                title: "Questions Not Added!",
                position: "top",
                status: "error",
                description: `${isAdded.json.error}`,
                duration: 3000,
                isClosable: true,
            });
        }
    }

    function deleteQuestion(i) {
        const updatedQuestions = questions.filter((qn, index) => index !== i);
        localStorage.setItem("questions", JSON.stringify(updatedQuestions));
        setQuestions(updatedQuestions);
    }

    useEffect(() => {
        const lsQuestions = JSON.parse(localStorage.getItem("questions"));

        if (lsQuestions) setQuestions(lsQuestions);
    }, []);
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
                    <Heading mt={5}>Manage Questionnaires</Heading>
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
                            setQuestions={setQuestions}
                        />
                        {(isView || isEdit) && (
                            <ViewEditQuestion
                                isView={isView}
                                setIsView={setIsView}
                                isEdit={isEdit}
                                setIsEdit={setIsEdit}
                                qn={qnPreview}
                            />
                        )}
                    </Box>
                    <TableContainer mt="2rem" overflowY="auto" maxH="60vh">
                        <Table variant="unstyled">
                            <Thead position="sticky" top={0} bg={bg} zIndex={2}>
                                <Tr color={fontColor}>
                                    <Th>ID</Th>
                                    <Th>Level</Th>
                                    <Th>Type</Th>
                                    <Th>Set</Th>
                                    <Th>Question</Th>
                                    <Th>Options</Th>
                                    <Th>Answer</Th>
                                    <Th>Option Translate</Th>
                                    <Th>Question Translate</Th>
                                    <Th position="sticky" right="0" bg={bg}>
                                        Action
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {questions.map((question, index) => (
                                    <QuestionRow
                                        question={question}
                                        key={index}
                                        index={index}
                                        setIsView={setIsView}
                                        setQnPreview={setQnPreview}
                                        deleteQuestion={deleteQuestion}
                                        setIsEdit={setIsEdit}
                                    />
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Flex mt={5}>
                        <Button
                            ms="auto"
                            bg="red.500"
                            colorScheme="red"
                            hidden={questions.length < 1}
                            me={4}
                            onClick={handleClearBtn}
                        >
                            Delete All
                        </Button>
                        <Button
                            hidden={questions.length < 1}
                            bg="green.500"
                            colorScheme="green"
                            leftIcon={<FiCheckCircle />}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}
export default ManageQuestioner;
