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
import { Fragment, useEffect, useState } from "react";
import QuestionType from "../questionHomePage/QuestionType";

function DeleteUpdateQuestionPanel({
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
}) {
    const numberOfLevel = [1, 2, 3, 4, 5];
    const questionTypes = ["kanji", "vocab", "grammar"];
    const { bg, fontColor } = ThemeColors();
    const [selectedType, setSelectedType] = useState("kanji");
    const [selectedLevel, setSelectedLevel] = useState(null);
    const isHidden =
        selectedLevel &&
        selectedLevel[selectedType].some((level) => !level.isShow);

    useEffect(() => {
        const initialLevels = {};
        questionTypes.forEach((type) => {
            initialLevels[type] = numberOfLevel.map((level) => ({
                level,
                isShow: true,
            }));
        });
        setSelectedLevel(initialLevels);
    }, []);

    return (
        <TabPanel>
            {/* ======================================================================================= */}
            <HStack mb="1em" bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                <Heading fontSize="1.25em">List of Questions</Heading>
            </HStack>
            {/* ======================================================================================= */}

            <Tabs isFitted variant="solid-rounded">
                <TabList bg={bg} borderRadius={"3xl"}>
                    {questionTypes.map((type) => (
                        <Tab
                            color={fontColor}
                            key={type}
                            isDisabled={selectedType === type}
                            _disabled={{
                                bg: "blue.500",
                                cursor: "not-allowed",
                            }}
                            onClick={() => {
                                setSelectedType(type);
                            }}
                        >
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
                                        selectedType={selectedType}
                                        selectedLevel={selectedLevel}
                                        setSelectedLevel={setSelectedLevel}
                                        isHidden={isHidden}
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
