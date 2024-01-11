import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
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
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Textarea,
    Tooltip,
    usePrevious,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import ThemeColors from "../main/ThemeColors";
import { useUpdateQuestion } from "../../../logic/hooks/question/useUpdateQuestion";
import { useQueryClient } from "@tanstack/react-query";

const AddViewEditQuestionModal = ({
    isAdd,
    onClose,
    setQuestions,
    isViewLocal,
    setIsViewLocal,
    isEditLocal,
    setIsEditLocal,
    isViewDatabase,
    setIsViewDatabase,
    isEditDatabase,
    setIsEditDatabase,
    qnPreview,
    previewIndex,
}) => {
    const [qn, setQn] = useState({
        question: "",
        options: [],
        type: "vocab",
        level: "5",
        set: 1,
        answer: "",
        optionsTranslate: [],
        questionTranslate: "",
    });

    const toast = useToast();
    const { fontColor, border, bg } = ThemeColors();
    const [hasSubmit, setHasSubmit] = useState(false);

    const { updateQuestion, isUpdating } = useUpdateQuestion();
    const queryClient = useQueryClient();
    const questionsByTypeLevelSet = queryClient.getQueryData([
        "questionsByTypeLevelSet",
    ]);

    // This is the maxlength of all types depending on type and level
    const maxSetLength = questionsByTypeLevelSet.filter(
        (data) => data._id.level == qn.level && data._id.type == qn.type
    ).length;

    const isKanji = qn.type === "kanji";

    const hasBracket = qn.question.includes("[") && qn.question.includes("]");

    const optLength = qn.options?.length;

    const isErrorSet = qn.set === "";
    const isErrorQuestion = qn.question === "";
    const isErrorOptions = optLength === 0;
    const isErrorOptionChoices = qn.options.includes("");
    const isErrorAnswer = qn.answer === "";
    const isErrorKanji = isKanji && !hasBracket;

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

    const addUpdateQuestion = () => {
        setHasSubmit(true);
        if (
            !isErrorSet &&
            !isErrorQuestion &&
            !isErrorOptions &&
            !isErrorOptionChoices &&
            !isErrorAnswer &&
            !isErrorKanji
        ) {
            const lsQuestions = JSON.parse(localStorage.getItem("questions"));

            if (!lsQuestions && isAdd) {
                localStorage.setItem("questions", JSON.stringify([qn]));
                setQuestions((prevData) => [...prevData, qn]);
            } else {
                if (isAdd) {
                    lsQuestions.push(qn);
                    localStorage.setItem(
                        "questions",
                        JSON.stringify(lsQuestions)
                    );
                    setQuestions((prevData) => [...prevData, qn]);
                }

                if (isEditLocal) {
                    const updatedLSQuestions = lsQuestions.filter(
                        (qn, index) => index !== previewIndex
                    );
                    updatedLSQuestions.push(qn);

                    // Update the items in Local Storage
                    localStorage.setItem(
                        "questions",
                        JSON.stringify(updatedLSQuestions)
                    );

                    setQuestions((prevData) =>
                        prevData.map((question, index) =>
                            index === previewIndex ? qn : question
                        )
                    );
                }

                if (isEditDatabase) {
                    console.log("Hello World! isEdit Database");
                    updateQuestion({ question: qn });
                }
            }
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
        setIsViewLocal(false);
        setIsEditLocal(false);
        setIsViewDatabase(false);
        setIsEditDatabase(false);
        onClose();
    }

    // set the questionPreviewUpdate at first run
    useEffect(() => {
        (isEditLocal || isEditDatabase || isViewLocal || isViewDatabase) &&
            setQn(qnPreview);
    }, [qnPreview, isEditLocal, isEditDatabase, isViewLocal, isViewDatabase]);

    // Keep track of the previous options
    const prevOptions = usePrevious(qn.options);

    useEffect(() => {
        // Check if options have been deleted
        if (prevOptions && prevOptions.length > qn.options.length) {
            const isInOptions = qn.options.includes(qn.answer);
            !isInOptions && setQn((prevData) => ({ ...prevData, answer: "" }));
        }
    }, [qn.options, prevOptions, qn.answer]);

    return (
        <Modal
            isOpen={
                isAdd ||
                isViewLocal ||
                isEditLocal ||
                isViewDatabase ||
                isEditDatabase
            }
            size="3xl"
            isCloseable={false}
        >
            <ModalOverlay />
            <ModalContent bg={bg}>
                <ModalHeader>
                    {(isAdd && "Add ") ||
                        ((isEditLocal || isEditDatabase) && "Edit ") ||
                        ((isViewLocal || isViewDatabase) && "View ")}
                    Questionaire Form
                </ModalHeader>
                <ModalBody>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        {/* LEVEL */}
                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel htmlFor="level">
                                    Select Level
                                </FormLabel>
                                <Select
                                    bg={bg}
                                    name="level"
                                    value={qn.level}
                                    onChange={(e) => handleChange(e)}
                                    isDisabled={isViewLocal || isViewDatabase}
                                    _disabled={{
                                        color: fontColor,
                                        borderColor: border,
                                        opacity: 1,
                                    }}
                                >
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        1
                                    </option>
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        2
                                    </option>
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        3
                                    </option>
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        4
                                    </option>
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        5
                                    </option>
                                </Select>
                            </FormControl>
                        </GridItem>

                        {/* TYPE */}
                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel htmlFor="type">
                                    Select Type
                                </FormLabel>
                                <Select
                                    bg={bg}
                                    name="type"
                                    value={qn.type}
                                    onChange={(e) => handleChange(e)}
                                    isDisabled={isViewLocal || isViewDatabase}
                                    _disabled={{
                                        color: fontColor,
                                        borderColor: border,
                                        opacity: 1,
                                    }}
                                >
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                        value="vocab"
                                    >
                                        Vocab
                                    </option>
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                        value="grammar"
                                    >
                                        Grammar
                                    </option>
                                    <option
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                        value="kanji"
                                    >
                                        Kanji
                                    </option>
                                </Select>
                            </FormControl>
                        </GridItem>

                        {/* SET */}
                        <GridItem>
                            <FormControl
                                isRequired
                                isInvalid={hasSubmit && isErrorSet}
                            >
                                <FormLabel>Set No.</FormLabel>
                                <NumberInput
                                    value={qn.set}
                                    min={1}
                                    max={maxSetLength + 1}
                                    onChange={(valueString) => {
                                        const value = parseInt(valueString, 10); // Parse the string to an integer
                                        handleChange({
                                            target: { name: "set", value },
                                        }); // Simulate the structure of an event object
                                    }}
                                    isDisabled={isViewLocal || isViewDatabase}
                                >
                                    <NumberInputField
                                        value={qn.set}
                                        name="set"
                                        placeholder={`min: 1, max: ${
                                            maxSetLength + 1
                                        }`}
                                        _disabled={{
                                            color: fontColor,
                                            borderColor: border,
                                        }}
                                    />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                {isErrorSet && (
                                    <FormErrorMessage>
                                        Set is required.
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </GridItem>

                        {/* QUESTION */}
                        <GridItem colSpan={3}>
                            <FormControl
                                isRequired
                                mt={4}
                                isInvalid={
                                    hasSubmit &&
                                    (isErrorQuestion || isErrorKanji)
                                }
                            >
                                <FormLabel>Question</FormLabel>
                                <Textarea
                                    placeholder="Write Question"
                                    name="question"
                                    onChange={(e) => handleChange(e)}
                                    value={qn.question}
                                    isDisabled={isViewLocal || isViewDatabase}
                                    _disabled={{
                                        color: fontColor,
                                        borderColor: border,
                                    }}
                                />
                                {isErrorQuestion && (
                                    <FormErrorMessage>
                                        Question is required.
                                    </FormErrorMessage>
                                )}
                                {isErrorKanji && (
                                    <FormErrorMessage>
                                        Kanji question requires
                                        &quot;[kanji/hiragana]&quot; ex. [山] or
                                        [やま]
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </GridItem>

                        {/* OPTIONS ADD BUTTON */}
                        <GridItem colSpan={1}>
                            <FormControl
                                isRequired
                                isInvalid={hasSubmit && isErrorOptions}
                            >
                                <Flex alignItems="center">
                                    <FormLabel mt={2}>Options</FormLabel>
                                    {(isAdd ||
                                        isEditLocal ||
                                        isEditDatabase) && (
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
                                    )}
                                </Flex>
                                {isErrorOptions && (
                                    <FormErrorMessage>
                                        Options is required.
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </GridItem>

                        {/* ANSWER */}
                        <GridItem colSpan={2}>
                            <FormControl
                                isRequired
                                isInvalid={hasSubmit && isErrorAnswer}
                            >
                                <Flex alignItems="center">
                                    <FormLabel mt={2}>Answer</FormLabel>
                                    {(isAdd || isEditLocal) && (
                                        <Tooltip
                                            hasArrow
                                            label="Make sure options are not empty"
                                            openDelay={300}
                                        >
                                            <QuestionOutlineIcon me={2} />
                                        </Tooltip>
                                    )}
                                    <Select
                                        bg={bg}
                                        size="sm"
                                        name="answer"
                                        value={qn.answer}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Select Answer"
                                        isDisabled={
                                            isErrorOptions ||
                                            isViewLocal ||
                                            isViewDatabase
                                        }
                                        _disabled={
                                            isViewLocal || isViewDatabase
                                                ? {
                                                      color: fontColor,
                                                      borderColor: border,
                                                      opacity: 1,
                                                  }
                                                : {}
                                        }
                                    >
                                        {qn.options.map((opt, index) => (
                                            <option
                                                style={{
                                                    backgroundColor:
                                                        "transparent",
                                                }}
                                                key={index}
                                            >
                                                {opt}
                                            </option>
                                        ))}
                                    </Select>
                                </Flex>
                            </FormControl>
                        </GridItem>

                        {/* OPTIONS CHOICES */}
                        <GridItem colSpan={3}>
                            <FormControl
                                isRequired
                                isInvalid={hasSubmit && isErrorOptionChoices}
                            >
                                {qn.options.map((value, index) => (
                                    <Flex key={index} my={index > 0 && 5}>
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
                                            isDisabled={
                                                isViewLocal || isViewDatabase
                                            }
                                            _disabled={{
                                                color: fontColor,
                                                borderColor: border,
                                            }}
                                        />

                                        {(isAdd || isEditLocal) && (
                                            <IconButton
                                                onClick={() =>
                                                    deleteOption(index)
                                                }
                                                icon={<FiTrash2 />}
                                                bg="red.500"
                                                colorScheme="red"
                                                ms="1rem"
                                            />
                                        )}
                                    </Flex>
                                ))}

                                {isErrorOptionChoices && (
                                    <FormErrorMessage>
                                        Option must not be empty.
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={3}>
                            <FormControl>
                                <FormLabel>
                                    Options Translate (optional)
                                </FormLabel>

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
                                                    isDisabled={
                                                        isViewLocal ||
                                                        isViewDatabase
                                                    }
                                                    _disabled={{
                                                        color: fontColor,
                                                        borderColor: border,
                                                    }}
                                                />
                                            </>
                                        )}
                                    </Flex>
                                ))}
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={3}>
                            <FormControl>
                                <FormLabel>Question Translate</FormLabel>
                                <Textarea
                                    placeholder="Enter Translation"
                                    name="questionTranslate"
                                    value={qn.questionTranslate}
                                    onChange={(e) => handleChange(e)}
                                    isDisabled={isViewLocal || isViewDatabase}
                                    _disabled={{
                                        color: fontColor,
                                        borderColor: border,
                                    }}
                                />
                            </FormControl>
                        </GridItem>
                    </Grid>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        mr={3}
                        disabled={isUpdating}
                        onClick={() => {
                            if (isAdd || isEditLocal || isEditDatabase) {
                                addUpdateQuestion();
                            }

                            if (isViewLocal) {
                                setIsEditLocal(true);
                                setIsViewLocal(false);
                            }

                            if (isViewDatabase) {
                                setIsEditDatabase(true);
                                setIsViewDatabase(false);
                            }
                        }}
                    >
                        {isAdd && "Add"}
                        {isEditLocal && "Update Question Local"}
                        {isEditDatabase && "Update Question Database"}
                        {(isViewLocal || isViewDatabase) && "Edit"}
                    </Button>
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            resetQn();
                        }}
                    >
                        {(isAdd || isEditLocal || isEditDatabase) && "Cancel"}
                        {(isViewLocal || isViewDatabase) && "Close"}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddViewEditQuestionModal;
