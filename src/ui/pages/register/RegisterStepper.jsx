import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Center,
  Spacer,
  Card,
  CardBody,
  Text,
  Link,
  AbsoluteCenter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { useSignup } from "../../../logic/hooks/user/useSignup";
import RegisterStepOneForm from "../../components/RegisterStepOneForm";

const steps = [
  { title: "First", description: "User Details" },
  { title: "Second", description: "Address" },
  { title: "Third", description: "Login Details" },
];

export default function RegisterStepper() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const bg = useColorModeValue("light.400", "dark.100");
  const [isPassValidFormat, setIsPassValidFormat] = useState(false);
  const [isPassValidLength, setIsPassValidLength] = useState(false);
  const [isPassContainUpper, setIsPassContainUpper] = useState(false);
  const [isPassContainLower, setIsPassContainLower] = useState(false);
  const [isPassContainSpecial, setIsPassContainSpecial] = useState(false);
  const [isPassContainNumber, setIsPassContainNumber] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, isLoading, error } = useSignup();

  function handleChangeFormData(e) {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    if (name === "password") {
      passwordChecker(e.target.value);
    }

    if (name === "confirmPassword") {
      formData.password === e.target.value
        ? setIsSamePassword(true)
        : setIsSamePassword(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
      formData.username,
      formData.email + "@awsys-i.com",
      formData.password,
      formData.confirmPassword
    );
  };

  function passwordChecker(str) {
    const strNumChars = /[0-9]/;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // Check if contains 1 uppercase
    str !== str.toLowerCase()
      ? setIsPassContainUpper(true)
      : setIsPassContainUpper(false);

    // Check if contains 1 lowercase
    str !== str.toUpperCase()
      ? setIsPassContainLower(true)
      : setIsPassContainLower(false);

    // Check if contains 1 number
    strNumChars.test(str)
      ? setIsPassContainNumber(true)
      : setIsPassContainNumber(false);

    // Check if contains 1 special character
    specialChars.test(str)
      ? setIsPassContainSpecial(true)
      : setIsPassContainSpecial(false);

    // Check if lenth greater or equal to 8
    str.length >= 8 ? setIsPassValidLength(true) : setIsPassValidLength(false);
  }

  useEffect(() => {
    function passwordValidChecker() {
      isPassValidLength &&
      isPassContainUpper &&
      isPassContainLower &&
      isPassContainSpecial &&
      isPassContainNumber
        ? setIsPassValidFormat(true)
        : setIsPassValidFormat(false);
    }
    passwordValidChecker();

    () => {};
  }, [
    isPassValidFormat,
    isPassValidLength,
    isPassContainUpper,
    isPassContainLower,
    isPassContainSpecial,
    isPassContainNumber,
  ]);

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  function inputField(activeStep) {
    if (activeStep === 0) {
      return <Text>1</Text>;
    } else if (activeStep === 1) {
      return <Text>2</Text>;
    } else if (activeStep === 2) {
      return (
        <RegisterStepOneForm
          handleChangeFormData={handleChangeFormData}
          formData={formData}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          isPassValidFormat={isPassValidLength}
          isPassValidLength={isPassValidLength}
          isPassContainUpper={isPassContainUpper}
          isPassContainLower={isPassContainLower}
          isPassContainSpecial={isPassContainSpecial}
          isPassContainNumber={isPassContainNumber}
          isSamePassword={isSamePassword}
        />
      );
    }
  }

  return (
    <>
      <Center h="fit-content" p="5%">
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
            <Box>
              <Text fontSize="4xl" mb="2vh">
                Register
              </Text>
              <Flex mb="5vh">
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
            </Box>
            <Flex>
              <Spacer />
              <Stepper colorScheme="facebook" index={activeStep}>
                {steps.map((step, index) => (
                  <>
                    <Step key={index} onClick={() => setActiveStep(index)}>
                      <StepIndicator>
                        <StepStatus
                          complete={<StepIcon />}
                          incomplete={<StepNumber />}
                          active={<StepNumber />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </Box>

                      <StepSeparator />
                    </Step>
                    <Spacer />
                  </>
                ))}
              </Stepper>
              <Spacer />
            </Flex>
            <Box my="5vh">{inputField(activeStep)}</Box>
          </CardBody>
        </Card>
      </Center>
    </>
  );
}
