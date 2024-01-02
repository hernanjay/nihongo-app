import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from "@chakra-ui/accordion";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import {
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    Text,
    HStack,
    useBoolean,
} from "@chakra-ui/react";
import QuestionSets from "./QuestionSets";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";
import { useQueryClient } from "@tanstack/react-query";
import { useGrades } from "../../../logic/hooks/grade/useGrades";

const QuestionLevel = ({ level, type, bg }) => {
    const queryClient = useQueryClient();

    const user = queryClient.getQueryData(["user"]);

    const { grades, isLoading } = useGrades(user._id);

    const questionsByTypeLevelSet = queryClient.getQueryData([
        "questionsByTypeLevelSet",
    ]);

    let kanjiGradedCtr = 0;
    let vocabGradedCtr = 0;
    let grammarGradedCtr = 0;

    let ctr = 0;
    let gradedCtr = 0;

    const isKanji = type === "kanji";
    const isVocab = type === "vocab";
    const isGrammar = type === "grammar";

    questionsByTypeLevelSet?.map(
        (question) =>
            question._id.type == type && question._id.level == level && ctr++
    );

    const filteredQuestions = questionsByTypeLevelSet.filter(
        (question) =>
            question._id.type == type && question._id.level == level && question
    );
    !isLoading &&
        grades.grades.map((grade) => {
            // Using regular expression to extract the type
            const match = grade.questionSetId.match(/\d*([a-zA-Z]+)\d*/);

            // Check if a match is found and get the type
            const gradeType = match && match[1];

            return (
                gradeType == type &&
                grade.questionSetId.slice(0, 1) == level &&
                gradedCtr++
            );
        });

    isKanji
        ? grades?.kanjiGrades?.map(
              (kg) => kg.questionSetId?.slice(0, 1) == level && kanjiGradedCtr++
          )
        : null;

    isVocab
        ? grades?.vocabGrades?.map(
              (vg) => vg.questionSetId?.slice(0, 1) == level && vocabGradedCtr++
          )
        : null;

    isGrammar
        ? grades?.grammarGrades?.map(
              (gg) =>
                  gg.questionSetId?.slice(0, 1) == level && grammarGradedCtr++
          )
        : null;

    return (
        <AccordionItem
            key={level}
            my="1"
            isDisabled={!ctr}
            verticalAlign="center"
        >
            <AccordionButton variant="solid">
                <HStack as="span" flex="1" textAlign="left">
                    <ChevronRightIcon />
                    <Text fontSize="1em">{`N${level}`}</Text>
                </HStack>
                <Box as="span" flex="1" textAlign="right" mx="5">
                    <Text fontSize="1em">
                        {gradedCtr}
                        {/* {(isKanji && (kanjiGradedCtr || "0")) ||
                            (isVocab && (vocabGradedCtr || "0")) ||
                            (isGrammar && (grammarGradedCtr || "0"))} */}
                        /{ctr}
                        {/* {(isKanji && (kanjiCtr || "0")) ||
                            (isVocab && (vocabCtr || "0")) ||
                            (isGrammar && (grammarCtr || "0"))} */}
                    </Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
                maxH="40vh"
                pb={4}
                overflow="auto"
                overscrollBehavior="auto"
                sx={{
                    "&::-webkit-scrollbar": {
                        width: "8px",
                        backgroundColor: `rgba(0, 0, 0, 0.15)`,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: `rgba(0, 0, 0, 0.15)`,
                    },
                }}
            >
                <TableContainer>
                    <Table variant="simple" colorScheme={bg}>
                        <Thead>
                            <Tr>
                                <Th>Question #</Th>
                                <Th>Number of Items</Th>
                                <Th isNumeric>Score</Th>
                                <Th isNumeric>Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredQuestions.map((question) => (
                                <QuestionSets
                                    key={question._id}
                                    type={question._id.type}
                                    level={question._id.level}
                                    set={question._id.set}
                                    grades={grades}
                                    isLoading={isLoading}
                                    numOfItems={question.count}
                                />
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </AccordionPanel>
        </AccordionItem>
    );
};
export default QuestionLevel;
