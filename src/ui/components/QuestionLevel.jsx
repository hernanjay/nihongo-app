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
} from "@chakra-ui/react";
import QuestionSets from "./QuestionSets";
import { useQuestionContext } from "../../logic/hooks/question/useQuestionContext";

const QuestionLevel = ({ index, type }) => {
  const { countBySetVocab, countBySetGrammar, countBySetKanji } =
    useQuestionContext();

  let ctr = 0;
  let kanjiCtr = 0;
  let vocabCtr = 0;
  let grammarCtr = 0;

  type === "Kanji"
    ? countBySetKanji?.map((kanji) => kanji._id.level == index && kanjiCtr++)
    : null;

  type === "Vocab"
    ? countBySetVocab?.map((vocab) => vocab._id.level == index && vocabCtr++)
    : null;

  type === "Grammar"
    ? countBySetGrammar?.map(
        (grammar) => grammar._id.level == index && grammarCtr++
      )
    : null;
  return (
    <AccordionItem
      key={index}
      my="1"
      isDisabled={index < 4}
      verticalAlign="center"
    >
      <AccordionButton variant="solid">
        <HStack as="span" flex="1" textAlign="left">
          <ChevronRightIcon />
          <Text fontSize="2vh">{`N${index}`}</Text>
        </HStack>
        <Box as="span" flex="1" textAlign="right" mx="5">
          <Text fontSize="2vh">
            0/
            {(type === "Kanji" && kanjiCtr) ||
              (type === "Vocab" && vocabCtr) ||
              (type === "Grammar" && grammarCtr)}
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Question #</Th>
                <Th>Number of Items</Th>
                <Th isNumeric>Score</Th>
                <Th isNumeric>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {type === "Kanji" &&
                countBySetKanji?.map((kanji) =>
                  kanji._id.level == index ? (
                    <QuestionSets
                      key={kanji._id.level + kanji._id.type + kanji._id.set}
                      index={ctr++}
                      type={kanji._id.type}
                      level={kanji._id.level}
                      set={kanji._id.set}
                    />
                  ) : null
                )}
              {type === "Vocab" &&
                countBySetVocab?.map((vocab) =>
                  vocab._id.level == index ? (
                    <QuestionSets
                      key={vocab._id.level + vocab._id.type + vocab._id.set}
                      index={ctr++}
                      type={vocab._id.type}
                      level={vocab._id.level}
                      set={vocab._id.set}
                    />
                  ) : null
                )}
              {type === "Grammar" &&
                countBySetGrammar?.map((grammar) =>
                  grammar._id.level == index ? (
                    <QuestionSets
                      key={
                        grammar._id.level + grammar._id.type + grammar._id.set
                      }
                      index={ctr++}
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
