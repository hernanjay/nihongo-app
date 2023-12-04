import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";

function RegisterStepJobDetail({ setActiveStep }) {
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();
  return (
    <Card mt="2em" bg={bg} variant="elevated" size="sm" boxShadow="none">
      <CardBody>
        <form>
          <FormControl isRequired>
            <HStack>
              <Box w="50%">
                <FormLabel>Current Job Title</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Jr. R&D Engineer"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Company Name</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Advanced World Solutions, Inc"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Business Unit</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Dev G"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Location</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Cebu IT Park"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Division</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="ESD"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Solution Development Group</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="SDG2"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            <Flex mt="3em">
              <Spacer />
              <Button
                rightIcon={<ChevronRightIcon />}
                fontWeight="normal"
                fontSize=".75em"
                size="md"
                colorScheme="gray"
                variant="outline"
                onClick={() => setActiveStep(2)}
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

export default RegisterStepJobDetail;
