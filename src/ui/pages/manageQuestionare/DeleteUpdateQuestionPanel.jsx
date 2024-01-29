import {
    Accordion,
    Box,
    Divider,
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
import { useEffect, useState } from "react";

function DeleteUpdateQuestionPanel({
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
}) {
    const numberOfLevel = [1, 2, 3, 4, 5];
    const questionTypes = ["kanji", "vocab", "grammar"];
    const { bg, fontColor } = ThemeColors();
    const [selectedLevel, setSelectedLevel] = useState(null);

    useEffect(() => {
        const initialLevels = {};
        questionTypes.forEach((type) => {
            initialLevels[type] = numberOfLevel.map((level) => ({
                level,
                isShow: true,
            }));
        });
        setSelectedLevel(initialLevels);
    }, []); // Empty array in object means it will run only at first render

    return (
        <TabPanel>
            {/* ======================================================================================= */}
            <HStack mb="1em" bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                <Heading fontSize="1.25em">List of Questions</Heading>
            </HStack>
            {/* ======================================================================================= */}

            <Tabs isFitted variant="solid-rounded" colorScheme="linkedin">
                <TabList bg={bg} borderRadius={"3xl"}>
                    {questionTypes.map((type) => (
                        <Tab color={fontColor} key={type}>
                            {type.toUpperCase()}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels>
                    {questionTypes.map((type) => (
                        <TabPanel key={type}>
                            <Accordion
                                allowToggle
                                bg={bg}
                                key={type}
                                borderRadius="lg"
                            >
                                {numberOfLevel.map((level, index) => (
                                    <ManageQuestionLevel
                                        key={`${type}-${level}`}
                                        type={type}
                                        level={level}
                                        index={index}
                                        setQnPreview={setQnPreview}
                                        setIsEditDatabase={setIsEditDatabase}
                                        setIsViewDatabase={setIsViewDatabase}
                                        selectedLevel={selectedLevel}
                                        setSelectedLevel={setSelectedLevel}
                                    />
                                ))}
                            </Accordion>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </TabPanel>
    );
}
export default DeleteUpdateQuestionPanel;
