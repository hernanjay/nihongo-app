import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
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
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FiPlus, FiTrash, FiTrash2 } from "react-icons/fi";

const AddQuestions = ({ isOpen, onClose, setQuestions }) => {
    // const [options, setOptions] = useState([]);
    // const [translationFields, setTranslationFields] = useState([]);
    const [qn, setQn] = useState({
        level: "N1",
        type: "vocab",
        set: "1",
        question: "",
        options: [],
        answer: "",
        optionsTranslate: [],
        questionTranslate: "",
    });

    const [hasSubmit, setHasSubmit] = useState(false);

    const isErrorSet = qn.set === "";
    const isErrorQuestion = qn.question === "";
    const isErrorOptions = qn.options.length === 0;
    const isErrorAnswer = qn.answer === "";

    const addOption = () => {
        if (qn.options.length < 4) {
            setQn((prevQn) => ({
                ...prevQn,
                options: [...prevQn.options, ""],
            }));
        }
    };

    const deleteOption = (curIndex) => {
        const updatedOptions = qn.options.filter(
            (option, index) => index !== curIndex
        );
        console.log(updatedOptions);
        setQn((prevQn) => ({
            ...prevQn,
            options: updatedOptions,
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

    // const onChangeOption = (index, value) => {
    //     setOptions((prevOptions) => {
    //         const updatedFields = [...prevOptions];
    //         updatedFields[index] = value;
    //         return updatedFields;
    //     });
    // };

    const addQuestion = () => {
        setHasSubmit(true);
        console.log(qn);
        // setQuestions((prevData) => [...prevData, qn]);
    };

    // useEffect(() => {
    //     console.log(options);
    // }, [options]);

    return (
        <Modal isOpen={isOpen} size="3xl" isCloseable={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Questionnaire Form</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        <FormControl isRequired>
                            <FormLabel>Select Level</FormLabel>
                            <Select
                                name="level"
                                defaultValue="N5"
                                onChange={(e) => handleChange(e)}
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
                            <FormLabel>options:</FormLabel>
                            <Box>
                                {qn.options.map((value, index) => (
                                    <Flex key={index} mt={5} mb={5}>
                                        <FormLabel
                                            mt={2}
                                            htmlFor={`inputField-${index + 1}`}
                                        >{`${String.fromCharCode(
                                            65 + index
                                        )}.`}</FormLabel>
                                        <Input
                                            type="text"
                                            id={`inputField-${index + 1}`}
                                            value={value}
                                            name="options"
                                            onChange={(e) => {
                                                // handleChange(e);
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

                                <IconButton
                                    onClick={addOption}
                                    icon={<FiPlus />}
                                    isDisabled={qn.options.length === 4}
                                />
                                {isErrorOptions && (
                                    <FormErrorMessage>
                                        Options is required.
                                    </FormErrorMessage>
                                )}
                            </Box>
                        </FormControl>
                    </Box>

                    <Grid mt={5}>
                        <FormControl
                            isRequired
                            isInvalid={hasSubmit && isErrorAnswer}
                        >
                            <FormLabel>Answer</FormLabel>
                            <Input
                                placeholder="Enter answer"
                                name="answer"
                                onChange={(e) => handleChange(e)}
                            />
                            {isErrorAnswer && (
                                <FormErrorMessage>
                                    Answer is required.
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </Grid>
                    <Box mt={5} mb={5}>
                        <FormControl>
                            <FormLabel>Options Translate:</FormLabel>

                            <Box>
                                {/* {translationFields.map((value, index) => (
                                    <Flex key={index} mt={5} mb={5}>
                                        {index <= 3 && (
                                            <>
                                                <FormLabel
                                                    mt={2}
                                                    htmlFor={`translationField-${
                                                        index + 1
                                                    }`}
                                                >{`${index + 1}.`}</FormLabel>
                                                <Input
                                                    type="text"
                                                    id={`translationField-${
                                                        index + 1
                                                    }`}
                                                    value={value}
                                                    onChange={(e) =>
                                                        translationInputChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </>
                                        )}
                                    </Flex>
                                ))} */}

                                <IconButton
                                    icon={<FiPlus />}
                                    // onClick={addTranslationInput}
                                />
                            </Box>
                        </FormControl>
                    </Box>
                    <FormControl>
                        <FormLabel>Question Translate</FormLabel>
                        <Textarea placeholder="Enter Translation" />
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
                            onClose();
                            setHasSubmit(false);
                            setQn((prevState) => ({
                                ...prevState,
                                level: "N1",
                                type: "vocab",
                                set: "1",
                                question: "",
                                options: [],
                                answer: "",
                                optionsTranslate: [],
                                questionTranslate: "",
                            }));
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
