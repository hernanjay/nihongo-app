import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Collapse,
    IconButton,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import ManageQuestionRow from "./ManageQuestionRow";
import { FiTrash2 } from "react-icons/fi";
import { useDeleteQuestionBySet } from "./../../../logic/hooks/question/useDeleteQuestionBySet";

const ManageQuestionSets = ({
    type,
    level,
    set,
    currentlySelectedQn,
    setCurrenlySelectedQn,
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
}) => {
    const [isPreview, setIsPreview] = useState(false);
    const queryClient = useQueryClient();
    const questions = queryClient.getQueryData(["questions"]);
    const { deleteQuestionBySet, isDeletingQuestionBySet } =
        useDeleteQuestionBySet();
    const filteredQuestions = questions.filter(
        (question) =>
            question.type == type &&
            question.level == level &&
            question.set == set
    );

    return (
        <>
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
                                zIndex={0}
                            >
                                <Box
                                    ml="1em"
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                >
                                    <ChevronRightIcon />{" "}
                                    {`Question Set : ${set}`}
                                </Box>
                                <IconButton
                                    name="delete"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Stop event propagation
                                        deleteQuestionBySet({
                                            level,
                                            type,
                                            set,
                                        });
                                    }}
                                    icon={<FiTrash2 />}
                                    bg="red.500"
                                    colorScheme="red"
                                    me="1rem"
                                    zIndex={1}
                                    size={"xs"}
                                    hidden={isPreview}
                                />
                                <AccordionIcon />
                            </AccordionButton>
                            {isPreview && (
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
                                    <TableContainer>
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th w="100%">QUESTION</Th>
                                                    <Th w="30%">ACTIONS</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {filteredQuestions.map((qn) => (
                                                    <ManageQuestionRow
                                                        question={qn}
                                                        key={qn._id}
                                                        setQnPreview={
                                                            setQnPreview
                                                        }
                                                        setIsEditDatabase={
                                                            setIsEditDatabase
                                                        }
                                                        setIsViewDatabase={
                                                            setIsViewDatabase
                                                        }
                                                    />
                                                ))}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </AccordionPanel>
                            )}
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Collapse>
        </>
    );
};
export default ManageQuestionSets;
