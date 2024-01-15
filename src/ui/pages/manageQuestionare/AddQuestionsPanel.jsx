import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Spacer,
    TabPanel,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tooltip,
    Tr,
} from "@chakra-ui/react";
import QuestionRow from "./QuestionRow";
import AlerPopUp from "../../components/AlerPopUp";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";

function AddQuestionsPanel({
    bg,
    border,
    onOpen,
    hover,
    fontColor,
    onAlertOpen,
    isAlertOpen,
    onAlertClose,
    handleClearBtn,
    isLoading,
    handleSubmit,
    questions,
    setIsViewLocal,
    setQnPreview,
    setIsEditLocal,
    setPreviewIndex,
    deleteQuestion,
}) {
    return (
        <TabPanel>
            {/*Start of add questions list header */}
            {/* ======================================================================================= */}
            <HStack mb="1em" bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                <Heading fontSize="1.25em">List of Questions to Add</Heading>
                <Spacer />
                <Button
                    size="sm"
                    my="-1em"
                    fontSize="0.75em"
                    // variant="outline"
                    leftIcon={<FiPlusCircle />}
                    onClick={onOpen}
                    colorScheme="green"
                    bg="green.500"
                >
                    ADD
                </Button>
            </HStack>
            {/* ======================================================================================= */}
            {/* For Adding questions */}
            <Box bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                <TableContainer
                    maxH="50vh"
                    overflowY="visible"
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
                    bg={bg}
                >
                    {/*Start of add questions table header */}
                    {/* ======================================================================================= */}
                    <Table>
                        <Thead position="sticky" zIndex={3} top={0} bg={hover}>
                            <Tr color={fontColor}>
                                <Th w="5%">ID</Th>
                                <Th w="5%">Level</Th>
                                <Th w="10%">Type</Th>
                                <Th w="5%">Set</Th>
                                <Th w="100%">Question</Th>
                                <Th w="10%" textAlign="center">
                                    Action
                                </Th>
                            </Tr>
                        </Thead>
                        {/*Start of add questions body */}
                        {/* ======================================================================================= */}
                        <Tbody borderTopRadius="lg">
                            {questions.map((question, index) => (
                                <QuestionRow
                                    question={question}
                                    key={index}
                                    index={index}
                                    setIsViewLocal={setIsViewLocal}
                                    setQnPreview={setQnPreview}
                                    setIsEditLocal={setIsEditLocal}
                                    setPreviewIndex={setPreviewIndex}
                                    deleteQuestion={deleteQuestion}
                                />
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                {/*Start of add questions button group */}
                {/*Start of add questions only visible if more than one question is present */}
                {/* ======================================================================================= */}
                <Flex mt="1.5em" mb="0.5em">
                    <Tooltip
                        label="Delete all question in the list"
                        fontSize="md"
                        offset={[0, -70]}
                        closeOnClick
                    >
                        <Button
                            ms="auto"
                            bg="red.500"
                            colorScheme="red"
                            hidden={questions.length < 1}
                            me={4}
                            onClick={onAlertOpen}
                        >
                            Delete All
                        </Button>
                    </Tooltip>
                    {/*A confirmation popup for deleting*/}
                    {/* ======================================================================================= */}
                    <AlerPopUp
                        isOpen={isAlertOpen}
                        onClose={onAlertClose}
                        onClick={handleClearBtn}
                    />
                    {/* ======================================================================================= */}
                    <Tooltip
                        label="Submit to add questions to database"
                        fontSize="md"
                        offset={[0, -70]}
                        closeOnClick
                    >
                        <Button
                            isLoading={isLoading}
                            hidden={questions.length < 1}
                            bg="green.500"
                            colorScheme="green"
                            leftIcon={<FiCheckCircle />}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Tooltip>
                </Flex>
            </Box>
            {/* ======================================================================================= */}
        </TabPanel>
    );
}
export default AddQuestionsPanel;
