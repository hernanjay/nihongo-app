import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Text,
    HStack,
    Collapse,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from "@chakra-ui/react";
import ManageQuestionSets from "./ManageQuestionSets";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
const ManageQuestionLevel = ({
    level,
    type,
    index,
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
    selectedLevel,
    setSelectedLevel,
}) => {
    const queryClient = useQueryClient();
    const [isPreview, setIsPreview] = useState(false);
    const [currentlySelectedQn, setCurrenlySelectedQn] = useState("none");
    const questionsByTypeLevelSet = queryClient.getQueryData([
        "questionsByTypeLevelSet",
    ]);

    let ctr = 0;

    const filteredQuestions = questionsByTypeLevelSet?.filter(
        (question) => question._id.type == type && question._id.level == level
    );

    questionsByTypeLevelSet?.map(
        (question) =>
            question._id.type == type && question._id.level == level && ctr++
    );

    if (selectedLevel) {
        return (
            <Collapse animateOpacity in={selectedLevel[type][index].isShow}>
                <AccordionItem
                    key={level}
                    my="1"
                    isDisabled={!ctr}
                    verticalAlign="center"
                    borderTop="none"
                    borderBottom={index !== 4 ? "solid" : "none"}
                >
                    <AccordionButton
                        onClick={() => {
                            // If others is hidden we need to toggle back to true
                            if (
                                selectedLevel[type].some(
                                    (level) => !level.isShow
                                )
                            ) {
                                setSelectedLevel((prevData) => ({
                                    ...prevData,
                                    [type]: prevData[type].map((data) => ({
                                        ...data,
                                        isShow: true,
                                    })),
                                }));
                            } else {
                                setSelectedLevel((prevData) => ({
                                    ...prevData,
                                    [type]: prevData[type].map((data) =>
                                        data.level !== level
                                            ? { ...data, isShow: false }
                                            : data
                                    ),
                                }));
                                setIsPreview(true);
                            }
                        }}
                        variant="solid"
                    >
                        <HStack as="span" flex="1" textAlign="left">
                            <ChevronRightIcon />
                            <Text fontSize="1em">{`N${level}`}</Text>
                        </HStack>
                        {ctr != 0 && (
                            <Text me="2">
                                Total Sets: {""}
                                {String(ctr).length === 1 ? "0" + ctr : ctr}
                            </Text>
                        )}
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        maxH={currentlySelectedQn === "none" ? "50vh" : "auto"}
                        overflowY={
                            currentlySelectedQn === "none" ? "auto" : "hidden"
                        }
                        borderRadius="lg"
                        sx={{
                            "&::-webkit-scrollbar": {
                                width: "10px",
                                backgroundColor: `rgba(0, 0, 0, 0.15)`,
                                borderRightRadius: "lg",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: `rgba(0, 0, 0, 0.15)`,
                                borderRightRadius: "lg",
                            },
                        }}
                    >
                        {isPreview &&
                            filteredQuestions.map((questions, index) => (
                                <ManageQuestionSets
                                    currentlySelectedQn={currentlySelectedQn}
                                    setCurrenlySelectedQn={
                                        setCurrenlySelectedQn
                                    }
                                    setQnPreview={setQnPreview}
                                    setIsEditDatabase={setIsEditDatabase}
                                    setIsViewDatabase={setIsViewDatabase}
                                    key={
                                        questions._id.type +
                                        questions._id.level +
                                        index
                                    }
                                    type={questions._id.type}
                                    level={questions._id.level}
                                    set={questions._id.set}
                                />
                            ))}
                    </AccordionPanel>
                </AccordionItem>
            </Collapse>
        );
    } else return null;
};
export default ManageQuestionLevel;
