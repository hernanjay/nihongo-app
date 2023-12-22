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

const QuestionLevel = ({ level, type, bg }) => {
    const { countBySetVocab, countBySetGrammar, countBySetKanji } =
        useQuestionContext();
    const { grades } = useGradeContext();

    let kanjiCtr = 0;
    let kanjiGradedCtr = 0;
    let vocabCtr = 0;
    let vocabGradedCtr = 0;
    let grammarCtr = 0;
    let grammarGradedCtr = 0;

    const isKanji = type === "kanji";
    const isVocab = type === "vocab";
    const isGrammar = type === "grammar";

    isKanji
        ? countBySetKanji?.map(
              (kanji) => kanji._id.level == level && kanjiCtr++
          ) &&
          grades?.kanjiGrades?.map(
              (kg) => kg.questionSetId?.slice(0, 1) == level && kanjiGradedCtr++
          )
        : null;

    isVocab
        ? countBySetVocab?.map(
              (vocab) => vocab._id.level == level && vocabCtr++
          ) &&
          grades?.vocabGrades?.map(
              (vg) => vg.questionSetId?.slice(0, 1) == level && vocabGradedCtr++
          )
        : null;

    isGrammar
        ? countBySetGrammar?.map(
              (grammar) => grammar._id.level == level && grammarCtr++
          ) &&
          grades?.grammarGrades?.map(
              (gg) =>
                  gg.questionSetId?.slice(0, 1) == level && grammarGradedCtr++
          )
        : null;

    return (
        <AccordionItem
            key={level}
            my="1"
            isDisabled={
                (isKanji && !kanjiCtr) ||
                (isVocab && !vocabCtr) ||
                (isGrammar && !grammarCtr)
            }
            verticalAlign="center"
        >
            <AccordionButton variant="solid">
                <HStack as="span" flex="1" textAlign="left">
                    <ChevronRightIcon />
                    <Text fontSize="1em">{`N${level}`}</Text>
                </HStack>
                <Box as="span" flex="1" textAlign="right" mx="5">
                    <Text fontSize="1em">
                        {(isKanji && (kanjiGradedCtr || "0")) ||
                            (isVocab && (vocabGradedCtr || "0")) ||
                            (isGrammar && (grammarGradedCtr || "0"))}
                        /
                        {(isKanji && (kanjiCtr || "0")) ||
                            (isVocab && (vocabCtr || "0")) ||
                            (isGrammar && (grammarCtr || "0"))}
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
                            {isKanji &&
                                countBySetKanji?.map((kanji) =>
                                    kanji._id.level == level ? (
                                        <QuestionSets
                                            key={
                                                kanji._id.level +
                                                kanji._id.type +
                                                kanji._id.set
                                            }
                                            type={kanji._id.type}
                                            level={kanji._id.level}
                                            set={kanji._id.set}
                                        />
                                    ) : null
                                )}
                            {isVocab &&
                                countBySetVocab?.map((vocab) =>
                                    vocab._id.level == level ? (
                                        <QuestionSets
                                            key={
                                                vocab._id.level +
                                                vocab._id.type +
                                                vocab._id.set
                                            }
                                            type={vocab._id.type}
                                            level={vocab._id.level}
                                            set={vocab._id.set}
                                        />
                                    ) : null
                                )}
                            {isGrammar &&
                                countBySetGrammar?.map((grammar) =>
                                    grammar._id.level == level ? (
                                        <QuestionSets
                                            key={
                                                grammar._id.level +
                                                grammar._id.type +
                                                grammar._id.set
                                            }
                                            type={grammar._id.type}
                                            level={grammar._id.level}
                                            set={grammar._id.set}
                                        />
                                    ) : null
                                )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </AccordionPanel>
        </AccordionItem>
    );
};
export default QuestionLevel;
