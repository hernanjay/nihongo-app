import { Box, Divider, HStack, Heading, TabPanel } from "@chakra-ui/react";
import QuestionType from "../questionHomePage/QuestionType";
import ThemeColors from "../main/ThemeColors";
import ManageQuestionLevel from "./ManageQuestionLevel";
import { Fragment } from "react";

function DeleteUpdateQuestionPanel() {
    const numberOfLevel = [1, 2, 3, 4, 5];
    const questionTypes = ["kanji", "vocab", "grammar"];
    const { bg } = ThemeColors();

    return (
        <TabPanel>
            {/* ======================================================================================= */}
            <HStack mb="1em" bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                <Heading fontSize="1.25em">List of Questions</Heading>
            </HStack>
            {/* ======================================================================================= */}
            {questionTypes.map((type) => (
                <Fragment key={type}>
                    <Box bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                        <QuestionType type={type} bg={bg}>
                            {numberOfLevel.map((num, index) => (
                                <ManageQuestionLevel
                                    key={`${type}-${num}`}
                                    type={type}
                                    level={num}
                                />
                            ))}
                        </QuestionType>
                    </Box>
                    <Divider maxW={{ base: "90vw", lg: "60vw" }} my="2.5vh" />
                </Fragment>
            ))}
        </TabPanel>
    );
}
export default DeleteUpdateQuestionPanel;
