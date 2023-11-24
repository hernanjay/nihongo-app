import React from "react";

import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  Spacer,
  useColorModeValue,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import ThemeColors from "../main/ThemeColors";

function KanaCards({ totalItems, kana, index }) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const popColor = useColorModeValue("gray.200", "dark.200");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const { kanaMode, kanaType, kanaGroup } = useKanaContext();

  return (
    <Card
      borderColor={border}
      bg={isCorrect ? success : !isEmpty ? error : bg}
      variant={"outline"}
      boxShadow={"lg"}
    >
      <CardHeader>
        <Flex>
          <Popover placement="right" autoFocus={false}>
            <PopoverTrigger>
              <Text style={{ cursor: "pointer" }} onClick={() => {}}>
                ?
              </Text>
            </PopoverTrigger>
            <PopoverContent bg={popColor} w="fit-content" pr="2vw">
              <PopoverArrow bg={popColor} />
              <PopoverCloseButton bg={popColor} />
              <PopoverBody>
                <Text>{`${
                  kanaType === "hiragana" ? kana.hiragana : kana.katakana
                } ・ ${kana.romaji}`}</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Spacer />
          <Text>{`${index + 1}/${totalItems}`}</Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Heading
          fontSize="4vw"
          textAlign={"center"}
          m="1vh"
          fontWeight={isCorrect ? "light" : "bold"}
          h={isCorrect ? "20vh" : "auto"}
        >
          {!isCorrect
            ? kanaType === "hiragana"
              ? kana.hiragana
              : kana.katakana
            : kanaType === "hiragana"
            ? `${kana.hiragana}・${kana.romaji}`
            : `${kana.katakana}・${kana.romaji}`}
        </Heading>
        <Input
          textAlign="center"
          bg={isCorrect ? success : bg}
          key={kana.romaji + index}
          id={`KanaCardsInput${index}`}
          mt="5.7vh"
          type="text"
          hidden={isCorrect}
          readOnly={isCorrect}
          onChange={(e) => {
            if (e.target.value === kana.romaji) {
              setIsCorrect(true);
              setIsEmpty(false);
              if (index + 1 < totalItems)
                document.getElementById(`KanaCardsInput${index + 1}`).focus();
            } else {
              if (e.target.value === "") {
                setIsEmpty(true);
              } else {
                setIsCorrect(false);
                setIsEmpty(false);
              }
            }
          }}
        ></Input>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default KanaCards;
