import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { InputRightAddon, useColorModeValue } from "@chakra-ui/react";
// import { loginUser } from "../../../Logic/controller/userController";

//Comment For Testing

import {
    Box,
    Flex,
    AbsoluteCenter,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    IconButton,
    Spacer,
    Card,
    CardBody,
    Text,
    Link,
    InputRightElement,
    InputGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Spinner,
} from "@chakra-ui/react";

import {
    ViewIcon,
    ViewOffIcon,
    ExternalLinkIcon,
    QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { useLogin } from "../../../logic/hooks/useLogin";
import Loader from "../../components/Loader";

export default function Login() {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = () => setShow(!show);
    const bg = useColorModeValue("light.400", "dark.100");
    const border = useColorModeValue("dark.100", "light.400");

    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email + "@awsys-i.com", password);
    };

    return (
        <>
            {isLoading && <Loader isLoading={isLoading} />}
            <Box position="relative" h="80vh">
                <AbsoluteCenter w="30vw" axis="both">
                    <Card
                        bg={bg}
                        variant="elevated"
                        size="sm"
                        boxShadow="lg"
                        px="5"
                        py="5"
                    >
                        <CardBody>
                            {/* Header */}
                            <Text fontSize="4xl">Login</Text>
                            <Flex>
                                <Text fontSize="1xl" mr="1">
                                    Don't have an account yet?
                                </Text>
                                <Link
                                    onClick={() => {
                                        navigate("/register");
                                    }}
                                >
                                    Register <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Flex>

                            {/* Login Input */}
                            <form onSubmit={handleSubmit}>
                                <FormControl isRequired>
                                    <FormLabel mt="5">Email</FormLabel>
                                    <InputGroup size="sm">
                                        <Input
                                            id="login-username-input"
                                            placeholder="Email"
                                            colorScheme="blackAlpha"
                                            type="text"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <InputRightAddon children="@awsys-i.com" />
                                    </InputGroup>
                                    <FormHelperText>
                                        Enter your email.
                                    </FormHelperText>

                                    {/* Password Input */}
                                    <FormLabel mt="5">Password</FormLabel>
                                    <InputGroup size="sm">
                                        <Input
                                            id="login-password-input"
                                            type={show ? "text" : "password"}
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <InputRightElement mr={2}>
                                            <IconButton
                                                icon={
                                                    show ? (
                                                        <ViewOffIcon />
                                                    ) : (
                                                        <ViewIcon />
                                                    )
                                                }
                                                size="sm"
                                                variant="unstyled"
                                                isRound={true}
                                                onClick={handleClick}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormHelperText mb="5">
                                        Enter your password
                                    </FormHelperText>

                                    {/* Forgot password */}
                                    <Flex>
                                        <Spacer />
                                        <Link
                                            onClick={() => {
                                                navigate("/recovery");
                                            }}
                                        >
                                            Forgot Password{" "}
                                            <QuestionOutlineIcon />
                                        </Link>
                                    </Flex>
                                    <Flex>
                                        <Spacer />
                                        <Button
                                            variant="outline"
                                            borderColor={border}
                                            mt={5}
                                            type="submit"
                                            isDisabled={isLoading}
                                        >
                                            Login
                                        </Button>
                                    </Flex>
                                </FormControl>
                            </form>
                        </CardBody>
                    </Card>
                </AbsoluteCenter>
            </Box>
        </>
    );
}
