import {
    Accordion,
    HStack,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
// import QuestionType from "../questionHomePage/QuestionType";
import ThemeColors from "../main/ThemeColors";
import ManageQuestionLevel from "./ManageQuestionLevel";
import { useState } from "react";

function DeleteUpdateQuestionPanel({
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
}) {
    const numberOfLevel = [1, 2, 3, 4, 5];
    const questionTypes = ["kanji", "vocab", "grammar"];
    const { bg, fontColor } = ThemeColors();
    const [currentlySelected, setCurrentlySelected] = useState("none");
    const [currentlySelectedQn, setCurrenlySelectedQn] = useState("none");

    return (
        <TabPanel>
            {/* ======================================================================================= */}
            <HStack mb="1em" bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                <Heading fontSize="1.25em">List of Questions</Heading>
            </HStack>
            {/* ======================================================================================= */}
            {/* {questionTypes.map((type) => (
                <Fragment key={type}>
                    <Box bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                        <QuestionType type={type} bg={bg}>
                            {numberOfLevel.map((num, index) => (
                                <ManageQuestionLevel
                                    key={`${type}-${num}`}
                                    type={type}
                                    level={num}
                                    setQnPreview={setQnPreview}
                                    setIsEditDatabase={setIsEditDatabase}
                                    setIsViewDatabase={setIsViewDatabase}
                                />
                            ))}
                        </QuestionType>
                    </Box>
                    <Divider maxW={{ base: "90vw", lg: "60vw" }} my="2.5vh" />
                </Fragment>
            ))} */}

            <Tabs isFitted variant="solid-rounded" colorScheme="whiteAlpha">
                <TabList bg={bg} borderRadius={"3xl"}>
                    {questionTypes.map((type) => (
                        <Tab
                            color={fontColor}
                            key={type}
                            onClick={() => {
                                setCurrentlySelected("none");
                                setCurrenlySelectedQn("none");
                            }}
                        >
                            {type.toUpperCase()}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels>
                    {questionTypes.map((type) => (
                        <Accordion
                            allowToggle
                            m="1.25em"
                            bg={bg}
                            key={type}
                            borderRadius="lg"
                        >
                            {numberOfLevel.map((num, index) => (
                                <ManageQuestionLevel
                                    key={`${type}-${num}`}
                                    type={type}
                                    level={num}
                                    index={index}
                                    currentlySelected={currentlySelected}
                                    setCurrentlySelected={setCurrentlySelected}
                                    currentlySelectedQn={currentlySelectedQn}
                                    setCurrenlySelectedQn={
                                        setCurrenlySelectedQn
                                    }
                                    setQnPreview={setQnPreview}
                                    setIsEditDatabase={setIsEditDatabase}
                                    setIsViewDatabase={setIsViewDatabase}
                                />
                            ))}
                        </Accordion>
                    ))}
                </TabPanels>
            </Tabs>
        </TabPanel>
    );
}
export default DeleteUpdateQuestionPanel;
