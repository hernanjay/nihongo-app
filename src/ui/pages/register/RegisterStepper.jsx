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
  Container,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useSignup } from "../../../logic/hooks/user/useSignup";
import ThemeColors from "../main/ThemeColors";
import RegisterStepLoginDetail1 from "../../components/register/RegisterStepLoginDetail1";
import RegisterStepLoginDetail2 from "../../components/register/RegisterStepLoginDetail2";
import RegisterStepPersonalDetail from "../../components/register/RegisterStepPersonalDetail";
import RegisterStepJobDetail from "../../components/register/RegisterStepJobDetail";
import RegisterStepContactDetail from "../../components/register/RegisterStepContactDetail";

const steps = [
  { title: "First", description: "Personal Details" },
  { title: "First", description: "Job Details" },
  { title: "Second", description: "Contact Details" },
  { title: "Third", description: "Login Details" },
  { title: "Fourth  ", description: "Login Details" },
];

export default function RegisterStepper() {
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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
      return <RegisterStepPersonalDetail setActiveStep={setActiveStep} />;
    } else if (activeStep === 1) {
      return <RegisterStepJobDetail setActiveStep={setActiveStep} />;
    } else if (activeStep === 2) {
      return <RegisterStepContactDetail setActiveStep={setActiveStep} />;
    } else if (activeStep === 3) {
      return (
        <RegisterStepLoginDetail1
          handleChangeFormData={handleChangeFormData}
          formData={formData}
          isLoading={isLoading}
          setActiveStep={setActiveStep}
        />
      );
    } else if (activeStep === 4) {
      return (
        <RegisterStepLoginDetail2
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
    <Container
      minW="100vw"
      h="100vh"
      overflow="auto"
      overscrollBehavior="auto"
      sx={{
        "&::-webkit-scrollbar": {
          width: "12px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.25)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.25)`,
        },
      }}
    >
      <Center p="5%">
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
          w="60vw"
          variant="elevated"
          boxShadow="lg"
          px="1.5em"
          pt="1.5em"
          m="2em"
          borderRadius="xl"
        >
          <CardBody>
            <Box>
              <Text fontSize="2.5em" mb="1vh">
                Register
              </Text>
              <Flex mb="5vh">
                <Text fontSize="1.25em" mr="0.5em">
                  Already have an account?
                </Text>
                <Link
                  fontSize="1.25em"
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
              <Stepper fontSize="1em" colorScheme="facebook" index={activeStep}>
                {steps.map((step, index) => (
                  <>
                    <Step key={index} onClick={() => setActiveStep(index)}>
                      <StepIndicator>
                        <StepStatus
                          complete={<StepIcon />}
                          incomplete={<StepNumber fontSize="1em" />}
                          active={<StepNumber fontSize="0.80em" />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0">
                        <StepTitle fontSize="0.75em">{step.title}</StepTitle>
                        <StepDescription fontSize="0.75em">
                          {step.description}
                        </StepDescription>
                      </Box>
                      <StepSeparator />
                    </Step>
                    <Spacer />
                  </>
                ))}
              </Stepper>
              <Spacer />
            </Flex>
            <Box mt="3vh" mb="2.5vh">
              {inputField(activeStep)}
            </Box>
          </CardBody>
        </Card>
      </Center>
    </Container>
  );
}
