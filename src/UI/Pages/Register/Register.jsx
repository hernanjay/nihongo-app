import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Center,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  IconButton,
  Spacer,
  Card,
  InputRightAddon,
  CardBody,
  Text,
  Link,
  InputRightElement,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

import {
  CheckIcon,
  ViewIcon,
  ViewOffIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { useSignup } from "../../../Logic/hooks/useSignup";

export default function Register() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();
    const bg = useColorModeValue("light.400", "dark.100");
    const border = useColorModeValue("dark.100", "light.400");

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { signup, isLoading } = useSignup();

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(
            formData.firstName,
            formData.lastName,
            formData.cellNumber,
            formData.gender,
            formData.street,
            formData.barangay,
            formData.municipality,
            formData.province,
            formData.region,
            formData.username,
            formData.email,
            formData.password,
            formData.confirmPassword
        );
    };

    return (
        <Center>
            <Card
                bg={bg}
                w="50vw"
                variant="elevated"
                size="sm"
                boxShadow="lg"
                px="5"
                py="5"
                m="10"
            >
                <CardBody>
                    <Text fontSize="4xl">Register</Text>
                    <Flex>
                        <Text fontSize="1xl" mr="1">
                            Already have an account?
                        </Text>
                        <Link
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Login <ExternalLinkIcon mx="2px" />
                        </Link>
                    </Flex>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            {/* Username input Form */}
                            <FormLabel mt="3">Username</FormLabel>
                            <InputGroup size="sm">
                                <InputLeftAddon children="@" />
                                <Input
                                    id="register-username-input"
                                    type="text"
                                    placeholder="Username"
                                    colorScheme="blackAlpha"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                            <FormHelperText>
                                Enter your username.
                            </FormHelperText>

                            {/*Email Input Form*/}
                            <FormLabel mt="3">Email</FormLabel>
                            <InputGroup size="sm">
                                <Input
                                    id="register-email-input"
                                    placeholder="Email"
                                    colorScheme="blackAlpha"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <InputRightAddon children="@awsys-i.com" />
                            </InputGroup>
                            <FormHelperText>Enter your email.</FormHelperText>

                            {/* Password Input Form */}
                            <FormLabel mt="3">Password</FormLabel>
                            <InputGroup size="sm">
                                <Input
                                    id="register-password-input"
                                    type={show ? "text" : "password"}
                                    placeholder="Enter Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <InputRightElement mr={3}>
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
                            <FormHelperText>
                                Password must be eight-character that contains
                                at least one uppercase, lowercase, number,
                                special character
                            </FormHelperText>
                            {/* Password Input Form */}
                            <FormLabel mt="3">Verify Password</FormLabel>
                            <InputGroup size="sm">
                                <Input
                                    id="register-verify-password-input"
                                    type={show ? "text" : "password"}
                                    placeholder="*******"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                <InputRightElement mr={3}>
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
                            <FormHelperText>
                                Enter your password again.
                            </FormHelperText>
                            <Flex>
                                <Spacer />
                                <Button
                                    leftIcon={<CheckIcon />}
                                    colorScheme="gray"
                                    variant="outline"
                                    borderColor={border}
                                    mt={3}
                                    type="submit"
                                    isDisabled={isLoading}
                                >
                                    Register
                                </Button>
                            </Flex>
                        </FormControl>
                    </form>
                </CardBody>
            </Card>
        </Center>
    );
}
