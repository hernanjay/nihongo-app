import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputRightAddon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

import {
  ViewIcon,
  ViewOffIcon,
  ExternalLinkIcon,
  QuestionOutlineIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useLogin } from "../../../logic/hooks/user/useLogin";
import Loader from "../../components/Loader";
import ThemeColors from "../main/ThemeColors";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => setShow(!show);
  const highlight = useColorModeValue("gray.200", "dark.200");
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();

  const { login, isLoading, error } = useLogin();
  const { isOpen, onToggle, onClose } = useDisclosure();

  function isEmailEmpty() {
    return email === "" ? true : false;
  }

  function isPasswordEmpty() {
    return password === "" ? true : false;
  }

  const handleSubmit = async (e) => {
    onToggle();
    e.preventDefault();
    if (!isEmailEmpty() && !isPasswordEmpty()) {
      await login(email + "@awsys-i.com", password);
    }
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Box h={{ base: "85vh", lg: "100vh" }}>
        <AbsoluteCenter w={{ base: "xs", lg: "lg" }} axis="both">
          <Card
            bg={bg}
            variant="elevated"
            boxShadow="lg"
            h={{ base: "50vh", lg: "lg" }}
            px={{ base: "0.75em", lg: "1em" }}
            py={{ base: "0.75em", lg: "1em" }}
          >
            <CardBody>
              {/* Header */}
              <Text fontSize="2em">Login</Text>
              <Flex>
                <Text fontSize={{ base: "0.75em", lg: "1em" }} mr="1">
                  Don't have an account yet?
                </Text>
                <Link
                  fontSize={{ base: "0.75em", lg: "1em" }}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register <ExternalLinkIcon mx="2px" />
                </Link>
              </Flex>

              {/* Login Input */}
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel fontSize={{ base: "0.75em", lg: "1em" }} mt="5">
                    Email
                  </FormLabel>
                  <Popover
                    returnFocusOnClose={false}
                    autoFocus={false}
                    isOpen={isEmailEmpty() && isOpen}
                    onClose={onClose}
                    placement="top-end"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <InputGroup size="sm">
                        <Input
                          fontSize={{ base: "0.75em", lg: "1em" }}
                          id="login-username-input"
                          placeholder="Email"
                          colorScheme="blackAlpha"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputRightAddon
                          fontSize={{ base: "0.75em", lg: "1em" }}
                          children="@awsys-i.com"
                        />
                      </InputGroup>
                    </PopoverTrigger>
                    <PopoverContent bg={highlight} w="fit-content">
                      <PopoverArrow bg={highlight} />
                      <PopoverBody fontSize={{ base: "0.75em", lg: "1em" }}>
                        {<ChevronRightIcon mr="1" />}Email field is empty
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <FormHelperText fontSize={{ base: "0.75em", lg: "1em" }}>
                    Enter your email.
                  </FormHelperText>

                  {/* Password Input */}
                  <FormLabel fontSize={{ base: "0.75em", lg: "1em" }} mt="5">
                    Password
                  </FormLabel>
                  <Popover
                    returnFocusOnClose={false}
                    autoFocus={false}
                    isOpen={isPasswordEmpty() && isOpen}
                    onClose={onClose}
                    placement="top-end"
                    closeOnBlur={false}
                    variant="outline"
                  >
                    <PopoverTrigger>
                      <InputGroup size="sm">
                        <Input
                          fontSize={{ base: "0.75em", lg: "1em" }}
                          id="login-password-input"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement mr={2}>
                          <IconButton
                            icon={show ? <ViewOffIcon /> : <ViewIcon />}
                            size="sm"
                            variant="unstyled"
                            isRound={true}
                            onClick={handleClick}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </PopoverTrigger>
                    <PopoverContent bg={highlight} w="fit-content">
                      <PopoverArrow bg={highlight} />
                      <PopoverBody fontSize={{ base: "0.75em", lg: "1em" }}>
                        {<ChevronRightIcon mr="2" />}Password field is empty.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <FormHelperText
                    fontSize={{ base: "0.75em", lg: "1em" }}
                    mb={{ base: "7vh", lg: "7vh" }}
                  >
                    Enter your password
                  </FormHelperText>

                  {/* Forgot password */}
                  <Flex>
                    <Spacer />
                    <Link
                      fontSize={{ base: "0.75em", lg: "1em" }}
                      onClick={() => {
                        navigate("/recovery");
                      }}
                    >
                      Forgot Password <QuestionOutlineIcon />
                    </Link>
                  </Flex>
                  <Flex>
                    <Spacer />
                    <Button
                      fontSize={{ base: "xs", lg: "md" }}
                      data-testid="login-button"
                      variant="outline"
                      borderColor={border}
                      mt={{ base: "1vh", lg: "2vh" }}
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
