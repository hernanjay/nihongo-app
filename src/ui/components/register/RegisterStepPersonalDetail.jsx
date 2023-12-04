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
  InputLeftAddon,
  InputRightAddon,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";

function RegisterStepPersonalDetail({ setActiveStep }) {
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();
  return (
    <Card mt="2em" bg={bg} variant="elevated" size="sm" boxShadow="none">
      <CardBody>
        <form>
          <FormControl isRequired>
            {/*First Name input Form */}
            <HStack>
              <Box w="50%">
                <FormLabel>First Name</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="First Name"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>フルスト名前</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="フルスト名前"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            {/*Middle Name input Form */}
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Middle Name</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Middle Name"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>ミッヅロ名前</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="ミッヅロ名前"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            {/*Last Name input Form */}
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Last Name</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Last Name"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>ラスト名前</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="ラスト名前"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            {/* Nickname and Gender */}
            <HStack mt="2em">
              <Box w="33%">
                <FormLabel>Nickname</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Nickname"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="33%">
                <FormLabel>ニックネーム</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="ニックネーム"
                    colorScheme="blackAlpha"
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="33%">
                <FormLabel>Suffix</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Suffix [N/A if not applicable]"
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
                onClick={() => setActiveStep(1)}
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

export default RegisterStepPersonalDetail;
