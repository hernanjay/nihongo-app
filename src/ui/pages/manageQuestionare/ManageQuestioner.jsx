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
    HStack,
    Spacer,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    useColorMode,
    Input,
    FormLabel,
    Tooltip,
} from "@chakra-ui/react";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";
import SideBar from "../../components/SideBar";
import ThemeColors from "../main/ThemeColors";
import AddViewEditQuestionModal from "./AddViewEditQuestionModal";

import { addQuestionsAPI } from "../../../logic/services/apiQuestions";
import AlerPopUp from "../../components/AlerPopUp";
import QuestionType from "../questionHomePage/QuestionType";
import ManageQuestionKanji from "./ManageQuestionKanji";
import ManageQuestionVocab from "./ManageQuestionVocab";
import ManageQuestionGrammar from "./ManageQuestionGrammar";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import AddQuestionsPanel from "./AddQuestionsPanel";
//   const [display, changeDisplay] = useState("hide");
function ManageQuestioner() {
    const toast = useToast();
    const [questions, setQuestions] = useState([]);
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [qnPreview, setQnPreview] = useState(null);
    const [previewIndex, setPreviewIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentlySelectedKanji, setCurrentlySelectedKanji] =
        useState("none");
    const [currentlySelectedVocab, setCurrentlySelectedVocab] =
        useState("none");
    const [currentlySelectedGrammar, setCurrentlySelectedGrammar] =
        useState("none");
    const numberOfLevel = [1, 2, 3, 4, 5];
    // For delete all button
    const {
        isOpen: isAlertOpen,
        onOpen: onAlertOpen,
        onClose: onAlertClose,
    } = useDisclosure();

    const { dispatch: questionDispatch } = useQuestionContext();

    const { isOpen, onOpen, onClose } = useDisclosure({
        closeOnOverlayClick: false,
        closeOnEsc: false,
    });

    const [toggle, setToggle] = useBoolean();
    const { bg, fontColor, body, hover, border } = ThemeColors();
    const colorMode = useColorMode().colorMode;
    function handleClearBtn() {
        onAlertClose();
        setQuestions([]);
        localStorage.removeItem("questions");
    }

    async function handleSubmit() {
        setIsLoading(true);

        const isAdded = await addQuestionsAPI(questions);

        if (isAdded.status) {
            toast({
                title: `${isAdded.message}`,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            questionDispatch({ type: "addQuestion", payload: questions });

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
        setIsLoading(false);
    }

    useEffect(() => {
        const lsQuestions = JSON.parse(localStorage.getItem("questions"));
        lsQuestions && setQuestions(lsQuestions);
    }, []);

    return (
        <Box bg={body}>
            <SideBar toggle={toggle} onClick={setToggle.toggle} />
            {/* Just render this if it is open, viewed or edit */}
            {(isOpen || isView || isEdit) && (
                <Box h="10%" alignSelf="flex-end">
                    <AddViewEditQuestionModal
                        isAdd={isOpen}
                        onClose={onClose}
                        setQuestions={setQuestions}
                        isView={isView}
                        setIsView={setIsView}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                        qnPreview={qnPreview}
                        previewIndex={previewIndex}
                    />
                </Box>
            )}
            <Flex
                h={"100vh"}
                w={"100%"}
                //   marginLeft={toggle ? { base: "0px", xl: "25rem" } : "0px"}
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
                    <Tabs
                        variant="soft-rounded"
                        colorScheme={
                            colorMode === "light" ? "blackAlpha" : "whiteAlpha"
                        }
                    >
                        {/*Start of Headers at the very top of the page */}
                        {/* ======================================================================================= */}
                        <HStack
                            bg={bg}
                            p="1em"
                            boxShadow="lg"
                            borderRadius="lg"
                        >
                            <Heading fontSize="1.75em">
                                Manage Questionnaires
                            </Heading>
                            <Spacer />
                            <TabList>
                                <Tab border={"1px"} mx="1">
                                    <Text color={fontColor}>Add Question</Text>
                                </Tab>
                                <Tab border={"1px"} mx="1">
                                    <Text color={fontColor}>
                                        Delete/Update Question
                                    </Text>
                                </Tab>
                            </TabList>
                        </HStack>
                        {/* ======================================================================================= */}
                        <TabPanels>
                            {/*Start of add questions list panel */}
                            <AddQuestionsPanel
                                bg={bg}
                                border={border}
                                onOpen={onOpen}
                                hover={hover}
                                fontColor={fontColor}
                                onAlertOpen={onAlertOpen}
                                isAlertOpen={isAlertOpen}
                                onAlertClose={onAlertClose}
                                handleClearBtn={handleClearBtn}
                                isLoading={isLoading}
                                handleSubmit={handleSubmit}
                                questions={questions}
                                setIsView={setIsView}
                                setQnPreview={setQnPreview}
                                setIsEdit={setIsEdit}
                                setPreviewIndex={setPreviewIndex}
                            />
                            {/* ======================================================================================= */}
                            {/* For Deleting/Editing Questions */}
                            <TabPanel>
                                {/* ======================================================================================= */}
                                <HStack
                                    mb="1em"
                                    bg={bg}
                                    p="1em"
                                    boxShadow="lg"
                                    borderRadius="lg"
                                >
                                    <Heading fontSize="1.25em">
                                        List of Questions
                                    </Heading>
                                </HStack>
                                {/* ======================================================================================= */}
                                <Box
                                    bg={bg}
                                    p="1em"
                                    boxShadow="lg"
                                    borderRadius="lg"
                                >
                                    <QuestionType type="Kanji" bg={bg}>
                                        {numberOfLevel.map((num, index) => (
                                            <ManageQuestionKanji
                                                index={index + 1}
                                                key={index}
                                                type="Kanji"
                                                currentlySelected={
                                                    currentlySelectedKanji
                                                }
                                                setCurrentlySelected={
                                                    setCurrentlySelectedKanji
                                                }
                                            ></ManageQuestionKanji>
                                        ))}
                                    </QuestionType>
                                </Box>
                                {/* ======================================================================================= */}
                                <Box
                                    bg={bg}
                                    p="1em"
                                    my="1.5em"
                                    boxShadow="lg"
                                    borderRadius="lg"
                                >
                                    <QuestionType type="Vocab" bg={bg}>
                                        {numberOfLevel.map((num, index) => (
                                            <ManageQuestionVocab
                                                index={index + 1}
                                                key={index}
                                                type="Vocab"
                                                currentlySelected={
                                                    currentlySelectedVocab
                                                }
                                                setCurrentlySelected={
                                                    setCurrentlySelectedVocab
                                                }
                                            ></ManageQuestionVocab>
                                        ))}
                                    </QuestionType>
                                </Box>
                                {/* ======================================================================================= */}
                                <Box
                                    bg={bg}
                                    p="1em"
                                    boxShadow="lg"
                                    borderRadius="lg"
                                >
                                    <QuestionType type="Grammar" bg={bg}>
                                        {numberOfLevel.map((num, index) => (
                                            <ManageQuestionGrammar
                                                index={index + 1}
                                                key={index}
                                                type="Grammar"
                                                currentlySelected={
                                                    currentlySelectedGrammar
                                                }
                                                setCurrentlySelected={
                                                    setCurrentlySelectedGrammar
                                                }
                                            ></ManageQuestionGrammar>
                                        ))}
                                    </QuestionType>
                                </Box>
                                {/* ======================================================================================= */}
                            </TabPanel>
                        </TabPanels>
                        {/* ======================================================================================= */}
                    </Tabs>
                </Box>
            </Flex>
        </Box>
    );
}
export default ManageQuestioner;
