import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Textarea,
    Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import ThemeColors from "../main/ThemeColors";

const ViewQuestion = ({ isView, setIsView, qn }) => {
    const { fontColor, border } = ThemeColors();
    return (
        <Modal isOpen={isView} size="3xl" isCloseable={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Questionnaire Form</ModalHeader>
                <ModalBody>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        <FormControl isRequired>
                            <FormLabel>Select Level</FormLabel>
                            <Select name="level" defaultValue="N5" isReadOnly>
                                <option>N1</option>
                                <option>N2</option>
                                <option>N3</option>
                                <option>N4</option>
                                <option>N5</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Select Type</FormLabel>
                            <Select
                                name="type"
                                value={qn.type}
                                isDisabled
                                _disabled={{
                                    color: "var(--chakra-colors-light.400)",
                                    borderColor: "var(--chakra-colors-blue)",
                                }}
                            >
                                <option value="vocab">Vocab</option>
                                <option value="grammar">Grammar</option>
                                <option value="kanji">Kanji</option>
                            </Select>
                        </FormControl>
                        <FormControl
                            isRequired
                            // isInvalid={hasSubmit && isErrorSet}
                        >
                            <FormLabel>Set</FormLabel>
                            <Input
                                type="number"
                                name="set"
                                value={qn.set}
                                isReadOnly
                                // placeholder="1"
                                // defaultValue="1"
                            />
                            {/* {isErrorSet && (
                                <FormErrorMessage>
                                    Set is required.
                                </FormErrorMessage>
                            )} */}
                        </FormControl>
                    </Grid>
                    <FormControl
                        isRequired
                        mt={4}
                        // isInvalid={hasSubmit && isErrorQuestion}
                    >
                        <FormLabel>Question</FormLabel>
                        <Textarea
                            placeholder="Write Question"
                            name="question"
                            value={qn.question}
                            isReadOnly
                        />
                        {/* {isErrorQuestion && (
                            <FormErrorMessage>
                                Question is required.
                            </FormErrorMessage>
                        )} */}
                    </FormControl>
                    <Box mt={5} mb={5}>
                        <FormControl
                            isRequired
                            // isInvalid={hasSubmit && isErrorOptions}
                        >
                            <Grid templateColumns="repeat(3, 1fr)">
                                <GridItem colSpan={1}>
                                    <Flex>
                                        <FormLabel pt={2}>Options</FormLabel>
                                        {/* <Tooltip
                                            hasArrow
                                            label="Add options and options translate"
                                            openDelay={500}
                                            gutter={10}
                                            // isDisabled={optLength === 4}
                                        >
                                            <Button
                                                onClick={addOption}
                                                leftIcon={<FiPlusCircle />}
                                                isDisabled={optLength === 4}
                                                size={"sm"}
                                            >
                                                Add
                                            </Button> 
                                        </Tooltip> */}
                                    </Flex>
                                </GridItem>

                                <GridItem colSpan={2}>
                                    <FormControl
                                        isRequired
                                        // isInvalid={hasSubmit && isErrorAnswer}
                                    >
                                        <Flex alignItems="center">
                                            <FormLabel mt={1}>Answer</FormLabel>
                                            <Tooltip
                                                hasArrow
                                                label="Make sure options are not empty"
                                                openDelay={300}
                                            >
                                                <QuestionOutlineIcon me={2} />
                                            </Tooltip>
                                            <Select
                                                size="sm"
                                                name="answer"
                                                value={qn.answer}
                                                isReadOnly
                                                // onChange={(e) =>
                                                //     handleChange(e)
                                                // }
                                                placeholder="Select Answer"
                                                question
                                                // isDisabled={isErrorOptions}
                                            >
                                                {qn.options.map(
                                                    (opt, index) => (
                                                        <option key={index}>
                                                            {opt}
                                                        </option>
                                                    )
                                                )}
                                            </Select>
                                        </Flex>
                                    </FormControl>
                                </GridItem>
                            </Grid>

                            <Box>
                                {qn.options.map((value, index) => (
                                    <Flex key={index} mt={5} mb={5}>
                                        <FormLabel
                                            mt={2}
                                            htmlFor={`options-${index + 1}`}
                                        >{`${String.fromCharCode(
                                            65 + index
                                        )}.`}</FormLabel>
                                        <Input
                                            type="text"
                                            id={`options-${index + 1}`}
                                            value={value}
                                            name="options"
                                            isReadOnly
                                            // onChange={(e) => {
                                            //     handleOptionsChange(
                                            //         index,
                                            //         e.target.value
                                            //     );
                                            // }}
                                        />

                                        {/* <IconButton
                                            onClick={() => deleteOption(index)}
                                            icon={<FiTrash2 />}
                                            bg="red.500"
                                            colorScheme="red"
                                            ms="1rem"
                                        /> */}
                                    </Flex>
                                ))}
                                {/* {isErrorOptions && (
                                    <FormErrorMessage>
                                        Options is required.
                                    </FormErrorMessage>
                                )} */}
                            </Box>
                        </FormControl>
                    </Box>

                    <Box mt={5} mb={5}>
                        <FormControl>
                            <FormLabel>Options Translate (optional)</FormLabel>

                            <Box>
                                {qn.optionsTranslate.map((value, index) => (
                                    <Flex key={index} mt={5} mb={5}>
                                        {index <= 3 && (
                                            <>
                                                <FormLabel
                                                    mt={2}
                                                    htmlFor={`optionsTranslate-${
                                                        index + 1
                                                    }`}
                                                >{`${String.fromCharCode(
                                                    65 + index
                                                )}.`}</FormLabel>
                                                <Input
                                                    type="text"
                                                    id={`optionsTranslate-${
                                                        index + 1
                                                    }`}
                                                    name="optionsTranslate"
                                                    value={value}
                                                    isReadOnly
                                                    // onChange={(e) =>
                                                    //     handleOptionsTranslateChange(
                                                    //         index,
                                                    //         e.target.value
                                                    //     )
                                                    // }
                                                />
                                            </>
                                        )}
                                    </Flex>
                                ))}
                            </Box>
                        </FormControl>
                    </Box>

                    <Grid mt={5}></Grid>

                    <FormControl>
                        <FormLabel>Question Translate</FormLabel>
                        <Textarea
                            placeholder="Enter Translation"
                            name="questionTranslate"
                            value={qn.questionTranslate}
                            isReadOnly
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => setIsView(false)}
                    >
                        Edit
                    </Button>
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            setIsView(false);
                        }}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
export default ViewQuestion;
