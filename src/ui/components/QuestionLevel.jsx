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
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/table";
import QuestionSets from "./QuestionSets";

const QuestionLevel = ({ index, vocabCount, kanjiCount, grammarCount }) => {
    vocabCount && console.log(vocabCount);
    return (
        <AccordionItem key={index} my="1">
            <h2>
                <AccordionButton variant="solid">
                    <Box as="span" flex="1" textAlign="left">
                        <ChevronRightIcon mx="5" />
                        {`N${index}`}
                    </Box>
                    <Box as="span" flex="1" textAlign="right" mx="5">
                        {vocabCount && 0 / vocabCount?.length}
                        {kanjiCount && 0 / kanjiCount?.length}
                        {grammarCount && 0 / grammarCount?.length}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
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
                            <QuestionSets index={index} />
                        </Tbody>
                    </Table>
                </TableContainer>
            </AccordionPanel>
        </AccordionItem>
    );
};
export default QuestionLevel;
