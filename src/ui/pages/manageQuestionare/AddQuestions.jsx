import {
    Box,
    Button,
    Flex,
    FormControl,
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
import { useEffect } from "react";
import { FiPlus, FiTrash, FiTrash2 } from "react-icons/fi";

const AddQuestions = ({ isOpen, onClose, options, setOptions }) => {
    const onChangeOption = (index, value) => {
        const updatedFields = [...options];
        updatedFields[index] = value;
        setOptions(updatedFields);
    };

    const addOption = () => {
        if (options.length < 4) {
            setOptions([...options, ""]);
        }
    };

    const deleteOption = (curIndex) => {
        console.log(curIndex);
        console.log(options);
        const updatedOptions = options.filter(
            (option, index) => index !== curIndex
        );
        console.log(updatedOptions);
        setOptions(updatedOptions);
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
                            <Select>
                                <option>N1</option>
                                <option>N2</option>
                                <option>N3</option>
                                <option>N4</option>
                                <option>N5</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Select Type</FormLabel>
                            <Select>
                                <option value="vocab">Vocab</option>
                                <option value="grammar">Grammar</option>
                                <option value="kanji">Kanji</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Set</FormLabel>
                            <Input type="number" />
                        </FormControl>
                    </Grid>
                    <FormControl isRequired mt={4}>
                        <FormLabel>Question</FormLabel>
                        <Textarea placeholder="Write Question" />
                    </FormControl>
                    <Box mt={5} mb={5}>
                        <FormControl isRequired>
                            <FormLabel>options:</FormLabel>
                            <Box>
                                {options.map((value, index) => (
                                    <>
                                        <Flex key={index} mt={5} mb={5}>
                                            {index <= 3 && (
                                                <>
                                                    <FormLabel
                                                        mt={2}
                                                        htmlFor={`inputField-${
                                                            index + 1
                                                        }`}
                                                    >{`${String.fromCharCode(
                                                        65 + index
                                                    )}.`}</FormLabel>
                                                    <Input
                                                        type="text"
                                                        id={`inputField-${
                                                            index + 1
                                                        }`}
                                                        value={value}
                                                        onChange={(e) =>
                                                            onChangeOption(
                                                                index,
                                                                e.target.value
                                                            )
                                                        }
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
                                                </>
                                            )}
                                        </Flex>
                                    </>
                                ))}

                                <IconButton
                                    onClick={addOption}
                                    icon={<FiPlus />}
                                    isDisabled={options.length === 4}
                                />
                            </Box>
                        </FormControl>
                    </Box>

                    <Grid mt={5}>
                        <FormControl isRequired>
                            <FormLabel>Answer</FormLabel>
                            <Input placeholder="Enter answer" />
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
                    <FormControl isRequired>
                        <FormLabel>Question Translate</FormLabel>
                        <Textarea placeholder="Enter Translation" />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => onClose()}>
                        Save
                    </Button>
                    <Button colorScheme="red" onClick={() => onClose()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
export default AddQuestions;
