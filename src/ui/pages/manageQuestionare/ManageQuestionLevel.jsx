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
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
}) => {
    const queryClient = useQueryClient();
    const [isPreview, setIsPreview] = useState(false);
    const [currentlySelected, setCurrentlySelected] = useState("none");
    const [currentlySelectedQn, setCurrenlySelectedQn] = useState("none");
    const questionsByTypeLevelSet = queryClient.getQueryData([
        "questionsByTypeLevelSet",
    ]);

    let ctr = 0;

    const filteredQuestions = questionsByTypeLevelSet?.filter(
        (question) => question._id.type == type && question._id.level == level
    );

    questionsByTypeLevelSet.map(
        (question) =>
            question._id.type == type && question._id.level == level && ctr++
    );

    function checkIfOpen() {
        if (currentlySelected === "none") {
            return true;
        } else if (currentlySelected === `N${level}`) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Collapse animateOpacity in={checkIfOpen()}>
            <AccordionItem
                key={level}
                my="1"
                isDisabled={!ctr}
                verticalAlign="center"
            >
                <AccordionButton
                    onClick={() => {
                        if (currentlySelected === `N${level}`) {
                            setCurrentlySelected("none");
                            setIsPreview(false);
                        } else {
                            setCurrentlySelected(`N${level}`);
                            setIsPreview(true);
                        }
                        setCurrenlySelectedQn("none");
                    }}
                    variant="solid"
                >
                    <HStack as="span" flex="1" textAlign="left">
                        <ChevronRightIcon />
                        <Text fontSize="1em">{`N${level}`}</Text>
                    </HStack>
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
                        filteredQuestions.map((questions) => (
                            <ManageQuestionSets
                                currentlySelectedQn={currentlySelectedQn}
                                setCurrenlySelectedQn={setCurrenlySelectedQn}
                                setQnPreview={setQnPreview}
                                setIsEditDatabase={setIsEditDatabase}
                                setIsViewDatabase={setIsViewDatabase}
                                key={questions._id}
                                type={questions._id.type}
                                level={questions._id.level}
                                set={questions._id.set}
                            />
                        ))}
                </AccordionPanel>
            </AccordionItem>
        </Collapse>
    );
};
export default ManageQuestionLevel;
