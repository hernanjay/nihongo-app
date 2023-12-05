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

const ViewEditQuestion = ({
    isView,
    setIsView,
    isEdit,
    setIsEdit,
    setQuestions,
    qn,
}) => {
    const { fontColor, border } = ThemeColors();
    const isOpen = isView || isEdit;

    const optLength = qn.options.length;

    const isErrorSet = qn.set === "";
    const isErrorQuestion = qn.question === "";
    const isErrorOptions = optLength === 0 || qn.options.includes("");
    const isErrorAnswer = qn.answer === "";
    const [hasSubmit, setHasSubmit] = useState(false);

    const addOption = () => {
        if (optLength < 4) {
            setQn((prevQn) => ({
                ...prevQn,
                options: [...prevQn.options, ""],
                optionsTranslate: [...prevQn.optionsTranslate, ""],
            }));
        }
    };

    const deleteOption = (curIndex) => {
        const updatedOptions = qn.options.filter(
            (option, index) => index !== curIndex
        );

        const updatedOptionsTranslate = qn.optionsTranslate.filter(
            (optionTranslate, index) => index !== curIndex
        );

        setQn((prevQn) => ({
            ...prevQn,
            options: updatedOptions,
            optionsTranslate: updatedOptionsTranslate,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQn((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOptionsChange = (index, value) => {
        setQn((prevQn) => {
            const updatedOptions = [...prevQn.options];
            updatedOptions[index] = value;
            return {
                ...prevQn,
                options: updatedOptions,
            };
        });
    };

    const handleOptionsTranslateChange = (index, value) => {
        setQn((prevQn) => {
            const updatedOptions = [...prevQn.optionsTranslate];
            updatedOptions[index] = value;
            return {
                ...prevQn,
                optionsTranslate: updatedOptions,
            };
        });
    };
    return (
        <Modal isOpen={isOpen} size="3xl" isCloseable={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Questionnaire Form</ModalHeader>
                <ModalBody>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        <FormControl isRequired>
                            <FormLabel>Select Level</FormLabel>
                            <Select
                                name="level"
                                defaultValue="N5"
                                isDisabled={isView}
                                _disabled={{
                                    color: fontColor,
                                    borderColor: border,
                                }}
                            >
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
                                isDisabled={isView}
                                _disabled={{
                                    color: fontColor,
                                    borderColor: border,
                                }}
                            >
                                <option value="vocab">Vocab</option>
                                <option value="grammar">Grammar</option>
                                <option value="kanji">Kanji</option>
                            </Select>
                        </FormControl>
                        <FormControl
                            isRequired
                            isInvalid={hasSubmit && isErrorSet}
                        >
                            <FormLabel>Set</FormLabel>
                            <Input
                                type="number"
                                name="set"
                                value={qn.set}
                                isDisabled={isView}
                                _disabled={{
                                    color: fontColor,
                                    borderColor: border,
                                }}
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
                            isDisabled={isView}
                            _disabled={{
                                color: fontColor,
                                borderColor: border,
                            }}
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
                                            // isDisabled={isView}th === 4}
                                        >
                                            <Button
                                                onClick={addOption}
                                                leftIcon={<FiPlusCircle />}
                                                isDisabled={isView}th === 4}
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
                                            {/* <Tooltip
                                                hasArrow
                                                label="Make sure options are not empty"
                                                openDelay={300}
                                            >
                                                <QuestionOutlineIcon me={2} />
                                            </Tooltip> */}
                                            <Select
                                                size="sm"
                                                name="answer"
                                                value={qn.answer}
                                                isDisabled={isView}
                                                _disabled={{
                                                    color: fontColor,
                                                    borderColor: border,
                                                }}
                                                // onChange={(e) =>
                                                //     handleChange(e)
                                                // }
                                                placeholder="Select Answer"
                                                question
                                                // isDisabled={isView}Options}
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
                                            isDisabled={isView}
                                            _disabled={{
                                                color: fontColor,
                                                borderColor: border,
                                            }}
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
                                                    isDisabled={isView}
                                                    _disabled={{
                                                        color: fontColor,
                                                        borderColor: border,
                                                    }}
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
                            // placeholder="Enter Translation"
                            name="questionTranslate"
                            value={qn.questionTranslate}
                            isDisabled={isView}
                            _disabled={{
                                color: fontColor,
                                borderColor: border,
                            }}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => {
                            setIsView(false);
                            setIsEdit(true);
                        }}
                    >
                        {isEdit ? "Update" : "Edit"}
                    </Button>
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            setIsView(false);
                            setIsEdit(false);
                        }}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
export default ViewEditQuestion;
