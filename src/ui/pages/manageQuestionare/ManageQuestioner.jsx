import React, { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import {
    Flex,
    Heading,
    Box,
    useDisclosure,
    useBoolean,
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
    Divider,
} from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import ThemeColors from "../main/ThemeColors";
import AddViewEditQuestionModal from "./AddViewEditQuestionModal";
import QuestionType from "../questionHomePage/QuestionType";
import ManageQuestionLevel from "./ManageQuestionLevel";
import AddQuestionsPanel from "./AddQuestionsPanel";
import { useAddQuestions } from "../../../logic/hooks/question/useAddQuestions";
import { useQuestions } from "../../../logic/hooks/question/useQuestions";
import Loader from "../../components/Loader";
import { useQuestionsTypeLevelSet } from "../../../logic/hooks/question/useQuestionsTypeLevelSet";
import DeleteUpdateQuestionPanel from "./DeleteUpdateQuestionPanel";
//   const [display, changeDisplay] = useState("hide");
function ManageQuestioner() {
    const [questions, setQuestions] = useState([]);
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [qnPreview, setQnPreview] = useState(null);
    const [previewIndex, setPreviewIndex] = useState(null);

    const {
        isOpen: isAlertOpen,
        onOpen: onAlertOpen,
        onClose: onAlertClose,
    } = useDisclosure();

    const { addQuestions, isAddingQuestions } = useAddQuestions();
    const { isGettingQuestions } = useQuestions();
    const { isGettingQuestionsByTypeLevelSet } = useQuestionsTypeLevelSet();

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
        addQuestions(
            { questions },
            {
                onSuccess: () => {
                    handleClearBtn();
                },
            }
        );
    }

    useEffect(() => {
        const lsQuestions = JSON.parse(localStorage.getItem("questions"));
        lsQuestions && setQuestions(lsQuestions);
    }, []);

    // Return loading screen if it still getting questions
    if (isGettingQuestions && isGettingQuestionsByTypeLevelSet)
        return <Loader isLoading={isGettingQuestions} />;

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
                            {/*QUESTION ADD PANEL */}
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
                                isLoading={isAddingQuestions}
                                handleSubmit={handleSubmit}
                                questions={questions}
                                setIsView={setIsView}
                                setQnPreview={setQnPreview}
                                setIsEdit={setIsEdit}
                                setPreviewIndex={setPreviewIndex}
                            />
                            {/* ======================================================================================= */}
                            {/*DELETING/UPDATING QUESTION PANEL */}
                            <DeleteUpdateQuestionPanel />
                        </TabPanels>
                        {/* ======================================================================================= */}
                    </Tabs>
                </Box>
            </Flex>
        </Box>
    );
}
export default ManageQuestioner;
