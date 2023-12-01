import {
  AbsoluteCenter,
  Box,
  SimpleGrid,
  Button,
  Code,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function Comp() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  return (
    <Box minH="100vh" minW="100vw" bg={body}>
      <AbsoluteCenter minW="80vw">
        <HStack minW="80vw" fontSize="3vh" mb="2vh">
          <Text color={"blue.700"}>{String(`const`)}</Text>
          <Text color={"purple.600"}>{String(`{`)}</Text>
          <Text color={"blue.500"}>
            {String(
              `body, bg, border, fontColor, success, error, warning, info`
            )}
          </Text>
          <Text color={"purple.600"}>{String(`}`)}</Text>
          <Text>{String(`=`)}</Text>
          <Text color={"yellow.600"}>{String(`ThemeColors`)}</Text>
          <Text color={"purple.400"}>{String(`()`)}</Text>
          <Text>{String(`;`)}</Text>
        </HStack>
        <SimpleGrid columns={8} gap={10}>
          <Button
            textAlign="center"
            color={fontColor}
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={body}
          >
            Body: {body}
          </Button>
          <Button
            textAlign="center"
            color={fontColor}
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={bg}
          >
            BG: {bg}
          </Button>
          <Button
            textAlign="center"
            color={fontColor}
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={border}
          >
            Border: {border}
          </Button>
          <Button
            textAlign="center"
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={fontColor}
          >
            Font: {fontColor}
          </Button>
          <Button
            textAlign="center"
            color={fontColor}
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={success}
          >
            Success: {success}
          </Button>
          <Button
            textAlign="center"
            color={fontColor}
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={error}
          >
            Error: {error}
          </Button>
          <Button
            textAlign="center"
            color={fontColor}
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={warning}
          >
            Warning: {warning}
          </Button>
          <Button
            textAlign="center"
            color={fontColor}
            justifyContent="center"
            minW="10vw"
            minH="10vh"
            fontWeight="light"
            bg={info}
          >
            Info: {info}
          </Button>
        </SimpleGrid>
      </AbsoluteCenter>
    </Box>
  );
}

export default Comp;
