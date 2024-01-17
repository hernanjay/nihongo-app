import { useEffect, useState } from "react";

import {
    Flex,
    Heading,
    Box,
    useDisclosure,
    useBoolean,
    Spacer,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    useColorMode,
} from "@chakra-ui/react";

import SideBar from "../../components/SideBar";
import ThemeColors from "../main/ThemeColors";
import AddViewEditQuestionModal from "./AddViewEditQuestionModal";
import AddQuestionsPanel from "./AddQuestionsPanel";
import Loader from "../../components/Loader";
import DeleteUpdateQuestionPanel from "./DeleteUpdateQuestionPanel";

import { useAddQuestions } from "../../../logic/hooks/question/useAddQuestions";
import { useQuestionsTypeLevelSet } from "../../../logic/hooks/question/useQuestionsTypeLevelSet";
import { useQuestions } from "../../../logic/hooks/question/useQuestions";

function ManageQuestioner() {
    const [questions, setQuestions] = useState([]);
    const [isViewLocal, setIsViewLocal] = useState(false);
    const [isEditLocal, setIsEditLocal] = useState(false);
    const [isViewDatabase, setIsViewDatabase] = useState(false);
    const [isEditDatabase, setIsEditDatabase] = useState(false);
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

    function deleteQuestion(i) {
        const updatedQuestions = questions.filter((qn, index) => index !== i);
        localStorage.setItem("questions", JSON.stringify(updatedQuestions));
        setQuestions(updatedQuestions);
    }

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
            {(isOpen ||
                isViewLocal ||
                isEditLocal ||
                isViewDatabase ||
                isEditDatabase) && (
                <Box h="10%" alignSelf="flex-end">
                    <AddViewEditQuestionModal
                        isAdd={isOpen}
                        onClose={onClose}
                        setQuestions={setQuestions}
                        isViewLocal={isViewLocal}
                        setIsViewLocal={setIsViewLocal}
                        isEditLocal={isEditLocal}
                        setIsEditLocal={setIsEditLocal}
                        isViewDatabase={isViewDatabase}
                        setIsViewDatabase={setIsViewDatabase}
                        isEditDatabase={isEditDatabase}
                        setIsEditDatabase={setIsEditDatabase}
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
                    <Tabs variant="soft-rounded">
                        {/*Start of Headers at the very top of the page */}
                        {/* ======================================================================================= */}
                        <Flex bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                            <Heading fontSize="1.75em">
                                Manage Questionaires
                            </Heading>
                            <Spacer />
                            <TabList>
                                <Tab border={"1px"} mx="1" color={fontColor}>
                                    Add Question
                                </Tab>
                                <Tab border={"1px"} mx="1" color={fontColor}>
                                    Delete/Update Question
                                </Tab>
                            </TabList>
                        </Flex>
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
                                setIsViewLocal={setIsViewLocal}
                                setQnPreview={setQnPreview}
                                setIsEditLocal={setIsEditLocal}
                                setPreviewIndex={setPreviewIndex}
                                deleteQuestion={deleteQuestion}
                            />
                            {/* ======================================================================================= */}
                            {/*DELETING/UPDATING QUESTION PANEL */}
                            <DeleteUpdateQuestionPanel
                                setQnPreview={setQnPreview}
                                setIsEditDatabase={setIsEditDatabase}
                                setIsViewDatabase={setIsViewDatabase}
                            />
                        </TabPanels>
                        {/* ======================================================================================= */}
                    </Tabs>
                </Box>
            </Flex>
        </Box>
    );
}
export default ManageQuestioner;
