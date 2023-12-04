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

function RegisterStepContactDetail({ setActiveStep }) {
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();
  return (
    <Card mt="2em" bg={bg} variant="elevated" size="sm" boxShadow="none">
      <CardBody>
        <form>
          <FormControl>
            <FormLabel color="gray.500" mb="1.5em">
              Current Address:
            </FormLabel>
            <HStack>
              <Box w="50%">
                <FormLabel>Country</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Country"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Province/Region</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Province/Region"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Town/City</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Town/City"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Street</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Street"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Postal</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Postal"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            <FormLabel color="gray.500" my="1.5em">
              Permanent Address:
            </FormLabel>
            <HStack>
              <Box w="50%">
                <FormLabel>Country</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Country"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Province/Region</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Province/Region"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Town/City</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Town/City"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Street</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Street"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Postal</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Postal"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Cellphone No</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="XXX-XXX-XXXX"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Phone No</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="XXX-XXX-XXXX"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Contact person</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Contact person"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Contact number</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="XXX-XXX-XXXX"
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

export default RegisterStepContactDetail;
