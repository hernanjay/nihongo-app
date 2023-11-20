import React, { useState } from "react";

import {
  Flex,
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
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

function RegisterStepOneForm({
  handleChangeFormData,
  formData,
  isLoading,
  handleSubmit,
  isPassValidFormat,
  isPassValidLength,
  isPassContainUpper,
  isPassContainLower,
  isPassContainSpecial,
  isPassContainNumber,
  isSamePassword,
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");

  return (
    <>
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
      <Card bg={bg} variant="unstyled" size="sm" boxShadow="none">
        <CardBody>
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
                  onChange={handleChangeFormData}
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
                  onChange={handleChangeFormData}
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
                  onChange={(e) => handleChangeFormData(e)}
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
                Password must be at least eight-character.
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
                  onChange={handleChangeFormData}
                  isDisabled={!isPassValidFormat}
                />
                <InputRightElement mr={3}>
                  <IconButton
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                    size="sm"
                    variant="unstyled"
                    isRound={true}
                    isDisabled={!isPassValidFormat}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText>Enter your password again.</FormHelperText>
              <FormHelperText
                hidden={
                  isSamePassword ||
                  formData.password === "" ||
                  formData.confirmPassword === ""
                }
                color="red.300"
              >
                <ChevronRightIcon />
                {!isSamePassword && "Password does not match"}
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
                  isDisabled={
                    isLoading ||
                    !isSamePassword ||
                    formData.confirmPassword === "" ||
                    !isPassValidFormat ||
                    !formData
                  }
                >
                  Register
                </Button>
              </Flex>
            </FormControl>
          </form>
        </CardBody>
      </Card>
    </>
  );
}

export default RegisterStepOneForm;
