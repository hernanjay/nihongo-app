import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Collapse,
    Divider,
    HStack,
    IconButton,
    Spacer,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import {
    ChevronRightIcon,
    DeleteIcon,
    EditIcon,
    ViewIcon,
} from "@chakra-ui/icons";
import ThemeColors from "../main/ThemeColors";
import { useState } from "react";

const ManageQuestionSets = ({
    type,
    level,
    set,
    currentlySelectedQn,
    setCurrenlySelectedQn,
}) => {
    const { hover } = ThemeColors();
    const [isPreview, setIsPreview] = useState(false);
    const questions = [
        "Q1",
        "Q2",
        "Q3",
        "Q4",
        "Q5",
        "Q6",
        "Q7",
        "Q8",
        "Q9",
        "Q10",
    ];

    return (
        <Collapse
            style={{ overflow: "visible" }}
            animateOpacity
            in={
                currentlySelectedQn === "none"
                    ? true
                    : currentlySelectedQn === `Q${set}`
            }
        >
            <Box key={`questions/n${level}/${type}/${set}`} mx="-1em">
                <Accordion allowToggle>
                    <AccordionItem my="1">
                        <AccordionButton
                            pr="2em"
                            onClick={() => {
                                if (currentlySelectedQn === `Q${set}`) {
                                    setCurrenlySelectedQn("none");
                                    setIsPreview(false);
                                } else {
                                    setCurrenlySelectedQn(`Q${set}`);
                                    setIsPreview(true);
                                }
                            }}
                        >
                            <Box ml="1em" as="span" flex="1" textAlign="left">
                                <ChevronRightIcon /> {`Question Set : ${set}`}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                            maxH="40vh"
                            overflowY="scroll"
                            borderRadius="lg"
                            sx={{
                                "&::-webkit-scrollbar": {
                                    width: "8px",
                                    backgroundColor: `rgba(0, 0, 0, 0.15)`,
                                    borderRightRadius: "lg",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: `rgba(0, 0, 0, 0.15)`,
                                    borderRightRadius: "lg",
                                },
                            }}
                        >
                            {questions.map((qn, index) => {
                                return (
                                    <Box _hover={{ bg: hover }}>
                                        <HStack py="0.5em" ml="2em">
                                            <Text>{qn}</Text>
                                            <Spacer />
                                            <Tooltip
                                                label="View"
                                                fontSize="md"
                                                offset={[0, -70]}
                                                closeOnClick
                                            >
                                                <IconButton
                                                    size="sm"
                                                    bg="green.400"
                                                    colorScheme="green"
                                                    icon={<ViewIcon />}
                                                    mr="1rem"
                                                />
                                            </Tooltip>
                                            <Tooltip
                                                label="Edit"
                                                fontSize="md"
                                                offset={[0, -70]}
                                                closeOnClick
                                            >
                                                <IconButton
                                                    size="sm"
                                                    bg="blue.400"
                                                    colorScheme="blue"
                                                    icon={<EditIcon />}
                                                    mr="1rem"
                                                />
                                            </Tooltip>
                                            <Tooltip
                                                label="Delete"
                                                fontSize="md"
                                                offset={[0, -70]}
                                                closeOnClick
                                            >
                                                <IconButton
                                                    size="sm"
                                                    bg="red.400"
                                                    colorScheme="red"
                                                    icon={<DeleteIcon />}
                                                    mr="1rem"
                                                />
                                            </Tooltip>
                                        </HStack>
                                        <Divider />
                                    </Box>
                                );
                            })}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Collapse>
    );
};
export default ManageQuestionSets;
