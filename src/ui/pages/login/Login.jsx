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
      <Box position="relative" h="100vh">
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
                <FormControl>
                  <FormLabel mt="5">Email</FormLabel>
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
                          id="login-username-input"
                          placeholder="Email"
                          colorScheme="blackAlpha"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputRightAddon children="@awsys-i.com" />
                      </InputGroup>
                    </PopoverTrigger>
                    <PopoverContent bg={highlight} w="fit-content">
                      <PopoverArrow bg={highlight} />
                      <PopoverBody fontSize="1vw">
                        {<ChevronRightIcon mr="1" />}Email field is empty
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <FormHelperText>Enter your email.</FormHelperText>

                  {/* Password Input */}
                  <FormLabel mt="5">Password</FormLabel>
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
                      <PopoverBody fontSize="1vw">
                        {<ChevronRightIcon mr="2" />}Password field is empty.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <FormHelperText mb="5">Enter your password</FormHelperText>

                  {/* Forgot password */}
                  <Flex>
                    <Spacer />
                    <Link
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
                      data-testid="login-button"
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
