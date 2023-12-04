import React, { useState } from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spacer,
  Card,
  InputRightAddon,
  CardBody,
  InputGroup,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import ThemeColors from "../../pages/main/ThemeColors";

function RegisterStepLoginDetail1({
  handleChangeFormData,
  formData,
  handleSubmit,
  setActiveStep,
}) {
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();

  return (
    <Card bg={bg} variant="elevated" size="sm" boxShadow="none">
      <CardBody>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            {/* Username input Form */}
            <FormLabel>Username</FormLabel>
            <InputGroup mt="0.75em" size="md">
              <Input
                id="register-username-input"
                type="text"
                placeholder="Username"
                colorScheme="blackAlpha"
                name="username"
                value={formData.username}
                onChange={handleChangeFormData}
                pb="-10em"
              />
            </InputGroup>

            {/*Email Input Form*/}
            <FormLabel mt="2em">Email</FormLabel>
            <InputGroup mt="0.75em" size="md">
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
            <Flex mt="2.5em">
              <Spacer />
              <Button
                rightIcon={<ChevronRightIcon />}
                fontWeight="normal"
                colorScheme="gray"
                variant="ghost"
                onClick={() => setActiveStep(3)}
              >
                Next
              </Button>
            </Flex>
          </FormControl>
        </form>
      </CardBody>
    </Card>
  );
}

export default RegisterStepLoginDetail1;
