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
import ThemeColors from "../main/ThemeColors";

const AddQuestions = ({
    isAdd,
    onClose,
    setQuestions,
    isView,
    setIsView,
    isEdit,
    setIsEdit,
    qnPreview,
    previewIndex,
}) => {
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
    const { fontColor, border } = ThemeColors();

    const [hasSubmit, setHasSubmit] = useState(false);
    const [questionUpdate, setQuestionUpdate] = useState();

    // set the questionUpdate at first run
    useEffect(() => {
        setQuestionUpdate(qnPreview);
    }, [qnPreview]);

    const optLength = isAdd
        ? qn.options.length
        : questionUpdate?.options?.length;

    const isErrorSet = isAdd ? qn.set === "" : questionUpdate?.set === "";
    const isErrorQuestion = isAdd
        ? qn.question === ""
        : questionUpdate?.question === "";
    const isErrorOptions = isAdd
        ? optLength === 0 || qn.options.includes("")
        : optLength === 0 || questionUpdate?.options?.includes("");
    const isErrorAnswer = isAdd
        ? qn.answer === ""
        : questionUpdate?.answer === "";

    const addOption = () => {
        if (optLength < 4) {
            isAdd &&
                setQn((prevQn) => ({
                    ...prevQn,
                    options: [...prevQn.options, ""],
                    optionsTranslate: [...prevQn.optionsTranslate, ""],
                }));
        }
    };

    const deleteOption = (curIndex) => {
        if (isAdd) {
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
        }
        if (isEdit) {
            const updatedOptions = questionUpdate?.options?.filter(
                (option, index) => index !== curIndex
            );

            const updatedOptionsTranslate =
                questionUpdate?.optionsTranslate?.filter(
                    (optionTranslate, index) => index !== curIndex
                );

            setQuestionUpdate((prevQn) => ({
                ...prevQn,
                options: updatedOptions,
                optionsTranslate: updatedOptionsTranslate,
            }));
        }
    };

    const handleChange = (e) => {
        if (isAdd) {
            const { name, value } = e.target;
            setQn((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
        if (isEdit) {
            const { name, value } = e.target;
            setQuestionUpdate((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleOptionsChange = (index, value) => {
        if (isAdd) {
            setQn((prevQn) => {
                const updatedOptions = [...prevQn.options];
                updatedOptions[index] = value;
                return {
                    ...prevQn,
                    options: updatedOptions,
                };
            });
        }
        if (isEdit) {
            setQuestionUpdate((prevQn) => {
                const updatedOptions = [...prevQn.options];
                updatedOptions[index] = value;
                return {
                    ...prevQn,
                    options: updatedOptions,
                };
            });
        }
    };

    const handleOptionsTranslateChange = (index, value) => {
        if (isAdd) {
            setQn((prevQn) => {
                const updatedOptions = [...prevQn.optionsTranslate];
                updatedOptions[index] = value;
                return {
                    ...prevQn,
                    optionsTranslate: updatedOptions,
                };
            });
        }
        if (isEdit) {
            setQuestionUpdate((prevQn) => {
                const updatedOptions = [...prevQn.optionsTranslate];
                updatedOptions[index] = value;
                return {
                    ...prevQn,
                    optionsTranslate: updatedOptions,
                };
            });
        }
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

    function updateQuestion() {
        setHasSubmit(true);

        if (
            !isErrorSet &&
            !isErrorQuestion &&
            !isErrorOptions &&
            !isErrorAnswer
        ) {
            const lsQuestions = JSON.parse(localStorage.getItem("questions"));
            const updatedLSQuestions =
                lsQuestions.filter((qn, index) => index !== previewIndex) || [];
            updatedLSQuestions.push(questionUpdate);
            localStorage.setItem(
                "questions",
                JSON.stringify(updatedLSQuestions)
            );

            // setQuestions(
            //     (prevData) => (prevData[previewIndex] = updateQuestion)
            // );
            // resetQn();
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
    }

    function resetQn() {
        setHasSubmit(false);
        isAdd &&
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

        isView && setIsView(false);
        isEdit && setIsEdit(false);
        onClose();
    }
    return (
        <Modal
            isOpen={isAdd || isView || isEdit}
            size="3xl"
            isCloseable={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {(isAdd && "Add ") ||
                        (isEdit && "Edit ") ||
                        (isView && "View ")}
                    Questionaire Form
                </ModalHeader>
                <ModalBody>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel>Select Level</FormLabel>
                                <Select
                                    name="level"
                                    defaultValue="5"
                                    value={
                                        isAdd ? qn.level : questionUpdate?.level
                                    }
                                    onChange={(e) => handleChange(e)}
                                    isDisabled={isView}
                                    _disabled={{
                                        color: fontColor,
                                        borderColor: border,
                                    }}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </FormControl>
                        </GridItem>

                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel>Select Type</FormLabel>
                                <Select
                                    name="type"
                                    defaultValue="vocab"
                                    value={
                                        isAdd ? qn.type : questionUpdate?.type
                                    }
                                    onChange={(e) => handleChange(e)}
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
                        </GridItem>

                        <GridItem>
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
                                    value={isAdd ? qn.set : questionUpdate?.set}
                                    onChange={(e) => handleChange(e)}
                                    isDisabled={isView}
                                    _disabled={{
                                        color: fontColor,
                                        borderColor: border,
                                    }}
                                />
                                {isErrorSet && (
                                    <FormErrorMessage>
                                        Set is required.
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={3}>
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
                                    value={
                                        isAdd
                                            ? qn.question
                                            : questionUpdate?.question
                                    }
                                    isDisabled={isView}
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
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <FormControl
                                isRequired
                                isInvalid={hasSubmit && isErrorOptions}
                            >
                                <Flex alignItems="center">
                                    <FormLabel mt={2}>Options</FormLabel>
                                    {isAdd && (
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
                                    {isEdit && (
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
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormControl
                                isRequired
                                isInvalid={hasSubmit && isErrorAnswer}
                            >
                                <Flex alignItems="center">
                                    <FormLabel mt={2}>Answer</FormLabel>
                                    {isAdd && (
                                        <Tooltip
                                            hasArrow
                                            label="Make sure options are not empty"
                                            openDelay={300}
                                        >
                                            <QuestionOutlineIcon me={2} />
                                        </Tooltip>
                                    )}
                                    <Select
                                        size="sm"
                                        name="answer"
                                        value={
                                            isAdd
                                                ? qn.answer
                                                : questionUpdate?.answer
                                        }
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Select Answer"
                                        isDisabled={isErrorOptions || isView}
                                        _disabled={{
                                            color: fontColor,
                                        }}
                                    >
                                        {isAdd &&
                                            qn.options.map((opt, index) => (
                                                <option key={index}>
                                                    {opt}
                                                </option>
                                            ))}
                                        {(isView || isEdit) &&
                                            questionUpdate?.options?.map(
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

                        <GridItem colSpan={3}>
                            <FormControl
                                isRequired
                                isInvalid={hasSubmit && isErrorOptions}
                            >
                                {isAdd &&
                                    qn.options.map((value, index) => (
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
                                                onClick={() =>
                                                    deleteOption(index)
                                                }
                                                icon={<FiTrash2 />}
                                                bg="red.500"
                                                colorScheme="red"
                                                ms="1rem"
                                            />
                                        </Flex>
                                    ))}
                                {(isEdit || isView) &&
                                    questionUpdate?.options?.map(
                                        (value, index) => (
                                            <Flex key={index} mt={5} mb={5}>
                                                <FormLabel
                                                    mt={2}
                                                    htmlFor={`options-${
                                                        index + 1
                                                    }`}
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
                                                    isDisabled={isView}
                                                    _disabled={{
                                                        color: fontColor,
                                                        borderColor: border,
                                                    }}
                                                />

                                                {isEdit && (
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
                                        )
                                    )}
                                {isErrorOptions && (
                                    <FormErrorMessage>
                                        Options is required.
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={3}>
                            <FormControl>
                                <FormLabel>
                                    Options Translate (optional)
                                </FormLabel>

                                {isAdd &&
                                    qn.optionsTranslate.map((value, index) => (
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

                                {(isEdit || isView) &&
                                    questionUpdate?.optionsTranslate?.map(
                                        (value, index) => (
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
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            isDisabled={isView}
                                                            _disabled={{
                                                                color: fontColor,
                                                                borderColor:
                                                                    border,
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </Flex>
                                        )
                                    )}
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={3}>
                            <FormControl>
                                <FormLabel>Question Translate</FormLabel>
                                <Textarea
                                    placeholder="Enter Translation"
                                    name="questionTranslate"
                                    value={
                                        isAdd
                                            ? qn.questionTranslate
                                            : questionUpdate?.questionTranslate
                                    }
                                    onChange={(e) => handleChange(e)}
                                    isDisabled={isView}
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
                        onClick={() => {
                            isAdd && addQuestion();
                            isEdit && updateQuestion();
                            if (isView) {
                                setIsEdit(true);
                                setIsView(false);
                            }
                        }}
                    >
                        {isAdd && "Add"}
                        {isEdit && "Update"}
                        {isView && "Edit"}
                    </Button>
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            resetQn();
                            setIsEdit(false);
                            setIsView(false);
                        }}
                    >
                        {(isAdd || isEdit) && "Cancel"}
                        {isView && "Close"}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
export default AddQuestions;
