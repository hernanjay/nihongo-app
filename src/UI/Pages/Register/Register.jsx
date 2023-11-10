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
  AbsoluteCenter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";

import {
  CheckIcon,
  ViewIcon,
  ViewOffIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { useSignup } from "../../../Logic/hooks/useSignup";

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const [isPassFormatValid, setIsPassFormatValid] = useState(false);
  const [isPassValidLength, setIsPassValidLength] = useState(false);
  const [isPassContainUpper, setIsPassContainUpper] = useState(false);
  const [isPassContainLower, setIsPassContainLower] = useState(false);
  const [isPassContainSpecial, setIsPassContainSpecial] = useState(false);
  const [isPassContainNumber, setIsPassContainNumber] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, isLoading, error } = useSignup();

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
      formData.email + "@awsys-i.com",
      formData.password,
      formData.confirmPassword
    );
  };

  function checkStrForCase(str) {
    str !== str.toLowerCase()
      ? setIsPassContainUpper(true)
      : setIsPassContainUpper(false);

    str !== str.toUpperCase()
      ? setIsPassContainLower(true)
      : setIsPassContainLower(false);
  }

  function checkStrForNumber(str) {
    const strNumChars = /[0-9]/;
    strNumChars.test(str)
      ? setIsPassContainNumber(true)
      : setIsPassContainNumber(false);
  }

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    specialChars.test(str)
      ? setIsPassContainSpecial(true)
      : setIsPassContainSpecial(false);
  }

  function checkStrIfProperLength(str) {
    str.length >= 8 ? setIsPassValidLength(true) : setIsPassValidLength(false);
  }

  function checkPassFormat(e) {
    checkStrIfProperLength(e.target.value);
    checkStrForCase(e.target.value);
    containsSpecialChars(e.target.value);
    checkStrForNumber(e.target.value);
  }

  return (
    <Center>
      <Modal isOpen={isLoading} size="full" bg="gray.100">
        <ModalOverlay />
        <ModalContent bg="blackAlpha.100">
          <ModalBody>
            <AbsoluteCenter>
              <Spinner color="white" size="xl" />
            </AbsoluteCenter>
          </ModalBody>
        </ModalContent>
      </Modal>
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
              <FormHelperText>Enter your username.</FormHelperText>

              {/*Email Input Form*/}
              <FormLabel mt="3">Email</FormLabel>
              <InputGroup size="sm">
                <Input
                  id="register-email-input"
                  placeholder="Email"
                  colorScheme="blackAlpha"
                  type="text"
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
                  onChange={(e) => {
                    handleChange(e);
                    checkPassFormat(e);
                  }}
                />
                <InputRightElement mr={3}>
                  <IconButton
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                    size="sm"
                    variant="unstyled"
                    isRound={true}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText>Enter your password.</FormHelperText>
              <FormHelperText
                color={isPassValidLength ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must be eight-character.
              </FormHelperText>
              <FormHelperText
                color={isPassContainUpper ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one uppercase.
              </FormHelperText>
              <FormHelperText
                color={isPassContainLower ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one lowercase.
              </FormHelperText>
              <FormHelperText
                color={isPassContainNumber ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one number.
              </FormHelperText>
              <FormHelperText
                color={isPassContainSpecial ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one special character.
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
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                    size="sm"
                    variant="unstyled"
                    isRound={true}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText>Enter your password again.</FormHelperText>
              <Flex></Flex>
              {/* <FormHelperText>Enter your password again.</FormHelperText>
              <FormHelperText
                hidden={formData.password === formData.confirmPassword}
                color="red.300"
              >
                <ChevronRightIcon />
                Passwords do not match.
              </FormHelperText> */}
              <FormHelperText hidden={error === null} color="red.300">
                <ChevronRightIcon />
                {error}
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
