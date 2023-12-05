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
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";

const AddQuestions = ({ isOpen, onClose, setQuestions }) => {
    const [qn, setQn] = useState({
        question: "",
        options: [],
        type: "vocab",
        level: "5",
        set: "1",
        answer: "",
        optionsTranslate: [],
        questionTranslate: "",
    });

    const toast = useToast();

    const [hasSubmit, setHasSubmit] = useState(false);

    const optLength = qn.options.length;

    const isErrorSet = qn.set === "";
    const isErrorQuestion = qn.question === "";
    const isErrorOptions = optLength === 0 || qn.options.includes("");
    const isErrorAnswer = qn.answer === "";

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

    const addQuestion = () => {
        setHasSubmit(true);

        if (
            !isErrorSet &&
            !isErrorQuestion &&
            !isErrorOptions &&
            !isErrorAnswer
        ) {
            const lsQuestions = JSON.parse(localStorage.getItem("questions"));

            if (!lsQuestions) {
                console.log(lsQuestions);
                localStorage.setItem("questions", JSON.stringify([qn]));
            } else {
                lsQuestions.push(qn);
                localStorage.setItem("questions", JSON.stringify(lsQuestions));
            }
            setQuestions((prevData) => [...prevData, qn]);
            resetQn();
        } else {
            toast({
                title: "Questions Not Added!",
                position: "top",
                status: "error",
                description: `Please fill-up required fields`,
                duration: 3000,
                isClosable: true,
            });
        }
    };

    function resetQn() {
        setHasSubmit(false);
        setQn({
            question: "",
            options: [],
            type: "vocab",
            level: "5",
            set: "1",
            answer: "",
            optionsTranslate: [],
            questionTranslate: "",
        });
        onClose();
    }
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
                                defaultValue="5"
                                onChange={(e) => handleChange(e)}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Select Type</FormLabel>
                            <Select
                                name="type"
                                defaultValue="vocab"
                                onChange={(e) => handleChange(e)}
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
                                placeholder="1"
                                defaultValue="1"
                                onChange={(e) => handleChange(e)}
                            />
                            {isErrorSet && (
                                <FormErrorMessage>
                                    Set is required.
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </Grid>
                    <FormControl
                        isRequired
                        mt={4}
                        isInvalid={hasSubmit && isErrorQuestion}
                    >
                        <FormLabel>Question</FormLabel>
                        <Textarea
                            placeholder="Write Question"
                            name="question"
                            onChange={(e) => handleChange(e)}
                        />
                        {isErrorQuestion && (
                            <FormErrorMessage>
                                Question is required.
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <Box mt={5} mb={5}>
                        <FormControl
                            isRequired
                            isInvalid={hasSubmit && isErrorOptions}
                        >
                            <Grid templateColumns="repeat(3, 1fr)">
                                <GridItem colSpan={1}>
                                    <Flex>
                                        <FormLabel pt={2}>Options</FormLabel>
                                        <Tooltip
                                            hasArrow
                                            label="Add options and options translate"
                                            openDelay={500}
                                            gutter={10}
                                            isDisabled={optLength === 4}
                                        >
                                            <Button
                                                onClick={addOption}
                                                leftIcon={<FiPlusCircle />}
                                                isDisabled={optLength === 4}
                                                size={"sm"}
                                            >
                                                Add
                                            </Button>
                                        </Tooltip>
                                    </Flex>
                                </GridItem>

                                <GridItem colSpan={2}>
                                    <FormControl
                                        isRequired
                                        isInvalid={hasSubmit && isErrorAnswer}
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
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                                placeholder="Select Answer"
                                                isDisabled={isErrorOptions}
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
                                            onChange={(e) => {
                                                handleOptionsChange(
                                                    index,
                                                    e.target.value
                                                );
                                            }}
                                        />

                                        <IconButton
                                            onClick={() => deleteOption(index)}
                                            icon={<FiTrash2 />}
                                            bg="red.500"
                                            colorScheme="red"
                                            ms="1rem"
                                        />
                                    </Flex>
                                ))}
                                {isErrorOptions && (
                                    <FormErrorMessage>
                                        Options is required.
                                    </FormErrorMessage>
                                )}
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
                                                    onChange={(e) =>
                                                        handleOptionsTranslateChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </>
                                        )}
                                    </Flex>
                                ))}

                                {/* <IconButton
                                    icon={<FiPlus />}
                                    onClick={addOptionTranslate}
                                    isDisabled={
                                        optTranslateLength === optLength
                                    }
                                /> */}
                            </Box>
                        </FormControl>
                    </Box>

                    <Grid mt={5}></Grid>

                    <FormControl>
                        <FormLabel>Question Translate</FormLabel>
                        <Textarea
                            placeholder="Enter Translation"
                            name="questionTranslate"
                            onChange={(e) => handleChange(e)}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => addQuestion()}
                    >
                        Save
                    </Button>
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            resetQn();
                        }}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
export default AddQuestions;
