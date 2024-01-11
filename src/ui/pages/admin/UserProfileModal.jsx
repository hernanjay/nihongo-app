import {
    Heading,
    Image,
    Center,
    Input,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Text,
    Divider,
    Box,
    Grid,
    GridItem,
    HStack,
    VStack,
    Container,
    InputGroup,
    InputLeftAddon,
    CloseButton,
    useOutsideClick,
    AbsoluteCenter,
    Avatar,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    IconButton,
    Tooltip,
    Flex,
    Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import ThemeColors from "../main/ThemeColors";
import { useRef } from "react";
import { FiEdit, FiEdit3 } from "react-icons/fi";
import { useUpdateUserRole } from "../../../logic/hooks/user/useUpdateUserRole";

const UserProfileModal = ({
    user,
    isOpen,
    onClose,
    isView,
    setIsView,
    isEdit,
    setIsEdit,
}) => {
    const { bg } = ThemeColors();

    const [isUpdateRole, setIsUpdateRole] = useState(false);
    const { updateUserRole, isUpdatingUserRole } = useUpdateUserRole();
    const [selectedRole, setSelectedRole] = useState(user.role);

    if (isOpen)
        return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minW="100vw">
                    {/* <ModalHeader mx="auto" fontSize="5vh" p={0}>
                        User Profile
                    </ModalHeader> */}

                    <ModalBody mx="auto" my={0}>
                        <Grid templateColumns="repeat(9, 1fr)" w="90vw">
                            <GridItem colSpan={6}>
                                <Box
                                    borderLeftRadius="lg"
                                    boxShadow="lg"
                                    bg={bg}
                                    minW="90%"
                                    mt="2.5vh"
                                    maxH="86vh"
                                    minH="86vh"
                                    overflow="auto"
                                    overscrollBehavior="auto"
                                    sx={{
                                        "&::-webkit-scrollbar": {
                                            width: "10px",
                                            borderRadius: "8px",
                                            backgroundColor: `rgba(0, 0, 0, 0.05)`,
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            backgroundColor: `rgba(0, 0, 0, 0.05)`,
                                        },
                                    }}
                                >
                                    <Container minW="90%">
                                        <Heading
                                            py={4}
                                            fontSize="5vh"
                                            mx="auto"
                                        >
                                            User Profile
                                        </Heading>
                                        <Divider my="1.5vh" />
                                        <Heading
                                            pb={4}
                                            mb="2vh"
                                            fontSize="2.5vh"
                                            fontWeight="normal"
                                        >
                                            Personal Information :
                                        </Heading>
                                        <VStack>
                                            {/* Name */}
                                            <InputGroup mb="2vh">
                                                <InputLeftAddon
                                                    fontSize="1.75vh"
                                                    minW="5vw"
                                                    children="Name:"
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="First Name"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Middle Name"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Last Name"
                                                    isReadOnly
                                                />
                                            </InputGroup>

                                            {/* Japanese Name */}
                                            <InputGroup mb="2vh">
                                                <InputLeftAddon
                                                    fontSize="1.75vh"
                                                    minW="5vw"
                                                    children="名前:"
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="フルスト名前"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="ミッヅロ名前"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="ラスト名前"
                                                    isReadOnly
                                                />
                                            </InputGroup>

                                            {/* Nickname */}
                                            <HStack minW="100%" mb="2vh">
                                                <InputGroup>
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Nickname:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="Toto"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                                <InputGroup>
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        children="ニックネーム:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        Value="とと"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                                <InputGroup>
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        children="Suffix:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        Value="Sr."
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                            </HStack>
                                        </VStack>
                                        <Divider my="1.5vh" />
                                        <Heading
                                            pb={4}
                                            mb="2vh"
                                            fontSize="2.5vh"
                                            fontWeight="normal"
                                        >
                                            Current Job Information :
                                        </Heading>
                                        <VStack>
                                            <HStack minW="100%" mb="2vh">
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Current Job Title:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="Jr. R&D Engineer"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Company Name:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="Advanced World Solutions, Inc"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                            </HStack>

                                            <HStack minW="100%" mb="2vh">
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Business Unit:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="Dev G"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Location:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="Cebu IT Park"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                            </HStack>

                                            <HStack minW="100%" mb="2vh">
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Division:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="ESD"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Solution Development Group:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="SDG2"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                            </HStack>
                                        </VStack>

                                        <Divider my="1.5vh" />
                                        <Heading
                                            pb={4}
                                            mb="2vh"
                                            fontSize="2.5vh"
                                            fontWeight="normal"
                                        >
                                            Contact Information :
                                        </Heading>
                                        <VStack>
                                            {/* Current Address */}
                                            <InputGroup mb="2vh">
                                                <InputLeftAddon
                                                    fontSize="1.75vh"
                                                    children="Current:"
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Street"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Town/City"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Province/Region"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Country"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Postal"
                                                    isReadOnly
                                                />
                                            </InputGroup>

                                            {/* Permanent Address*/}
                                            <InputGroup mb="2vh">
                                                <InputLeftAddon
                                                    fontSize="1.75vh"
                                                    children="Permanent:"
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Street"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Town/City"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Province/Region"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Country"
                                                    isReadOnly
                                                />
                                                <Input
                                                    fontSize="1.75vh"
                                                    pl="1vw"
                                                    type="text"
                                                    variant="flushed"
                                                    value="Postal"
                                                    isReadOnly
                                                />
                                            </InputGroup>

                                            {/* Contact Number */}
                                            <HStack minW="100%" mb="2vh">
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Cellphone No:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="XXX-XXX-XXXX"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Phone No:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="XXX-XXX-XXXX"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                            </HStack>

                                            {/* Contact Person */}
                                            <HStack minW="100%" mb="2vh">
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Contact person:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="XXX-XXX-XXXX"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                                <InputGroup mb="2vh">
                                                    <InputLeftAddon
                                                        fontSize="1.75vh"
                                                        minW="5vw"
                                                        children="Contact number:"
                                                    />
                                                    <Input
                                                        fontSize="1.75vh"
                                                        pl="1vw"
                                                        type="text"
                                                        variant="flushed"
                                                        value="XXX-XXX-XXXX"
                                                        isReadOnly
                                                    />
                                                </InputGroup>
                                            </HStack>
                                        </VStack>
                                    </Container>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={3} bg="transparent">
                                <Card mr="1vw" my="2.5vh" bg="transparent">
                                    <ModalCloseButton
                                        onClick={() => {
                                            setIsView(false);
                                            setIsEdit(false);
                                        }}
                                    />
                                    <CardHeader
                                        minH="20vh"
                                        roundedTopRight="xl"
                                        backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
                                        backgroundSize="cover"
                                        backgroundPosition="top"
                                    >
                                        <Center position="relative" top="10vh">
                                            <Avatar
                                                mr={2}
                                                src=""
                                                boxSize="8vw"
                                            />
                                        </Center>
                                    </CardHeader>
                                    <CardBody minH="60vh" bg={bg}>
                                        <Box mt="7vh">
                                            <Heading
                                                fontWeight="bold"
                                                textAlign="center"
                                                fontSize="3vh"
                                            >
                                                @{user.username}
                                            </Heading>
                                            <Divider my="1vh" />
                                            <Text
                                                fontWeight="normal"
                                                textAlign="center"
                                                my={2}
                                            >
                                                {user.email}
                                            </Text>
                                            <Flex
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                {isUpdateRole ? (
                                                    <>
                                                        <Select
                                                            size="md"
                                                            w="30%"
                                                            name="role"
                                                            defaultValue={
                                                                user.role
                                                            }
                                                            onChange={(e) => {
                                                                setSelectedRole(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        >
                                                            <option>
                                                                student
                                                            </option>
                                                            <option>
                                                                teacher
                                                            </option>
                                                        </Select>

                                                        <Tooltip
                                                            label="Update Role"
                                                            placement="top"
                                                        >
                                                            <Button
                                                                ms={2}
                                                                size="sm"
                                                                colorScheme="blue"
                                                                bg="blue.500"
                                                                onClick={() => {
                                                                    updateUserRole(
                                                                        {
                                                                            userId: user._id,
                                                                            role: selectedRole,
                                                                        }
                                                                    );

                                                                    setIsUpdateRole(
                                                                        false
                                                                    );
                                                                    setSelectedRole(
                                                                        user.role
                                                                    );
                                                                }}
                                                            >
                                                                Update
                                                            </Button>
                                                        </Tooltip>
                                                        <Button
                                                            ms={2}
                                                            size="sm"
                                                            colorScheme="red"
                                                            bg="red.500"
                                                            onClick={() => {
                                                                setIsUpdateRole(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            Cancel
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Text
                                                            fontWeight="normal"
                                                            textAlign="center"
                                                            my={2}
                                                        >
                                                            {user.role}
                                                        </Text>
                                                        {isEdit && (
                                                            <Tooltip
                                                                label="Update Role"
                                                                placement="top"
                                                            >
                                                                <IconButton
                                                                    ms={2}
                                                                    icon={
                                                                        <FiEdit />
                                                                    }
                                                                    size="sm"
                                                                    onClick={() =>
                                                                        setIsUpdateRole(
                                                                            true
                                                                        )
                                                                    }
                                                                />
                                                            </Tooltip>
                                                        )}
                                                    </>
                                                )}
                                            </Flex>
                                            {isView && (
                                                <Center mt="10">
                                                    <Button
                                                        colorScheme="blue"
                                                        bg="blue.500"
                                                        onClick={() => {
                                                            setIsView(false);
                                                            setIsEdit(true);
                                                        }}
                                                    >
                                                        Edit
                                                    </Button>
                                                </Center>
                                            )}
                                        </Box>
                                    </CardBody>
                                    <CardFooter
                                        minH="5vh"
                                        bg="purple"
                                        roundedBottomRight="xl"
                                        backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
                                        backgroundSize="cover"
                                        backgroundPosition="bottom"
                                    ></CardFooter>
                                </Card>
                            </GridItem>
                        </Grid>
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        );
};
export default UserProfileModal;
