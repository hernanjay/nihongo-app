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
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import ThemeColors from "../main/ThemeColors";
import { scrollTo } from "scroll-js";

function KanaCards({ totalItems, kana, index }) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const { kanaType } = useKanaContext();
  const [showAnswer, setShowAnswer] = useBoolean();

  return (
    <Card
      borderColor={border}
      bg={isCorrect ? success : !isEmpty ? error : bg}
      variant={"outline"}
      boxShadow={"lg"}
    >
      <CardHeader>
        <Flex>
          <Text
            hidden={showAnswer || isCorrect}
            cursor="pointer"
            onClick={setShowAnswer.toggle}
          >
            ?
          </Text>
          <Spacer />
          <Text>{`${index + 1}/${totalItems}`}</Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Heading
          fontSize={{ base: "5vh", lg: "4vw" }}
          textAlign={"center"}
          m={{ base: "0", lg: "1vh" }}
          fontWeight={isCorrect ? "light" : "bold"}
          h={{
            base: isCorrect ? "10vh" : "5vh",
            lg: isCorrect ? "20vh" : "auto",
          }}
        >
          {showAnswer
            ? kana.romaji
            : kanaType === "hiragana"
            ? kana.hiragana
            : kana.katakana}
        </Heading>
        <Input
          textAlign="center"
          bg={isCorrect ? success : bg}
          key={kana.romaji + index}
          id={`KanaCardsInput${index}`}
          mt={{ base: "5vh", lg: "5.7vh" }}
          type="text"
          hidden={isCorrect}
          readOnly={isCorrect || showAnswer}
          onChange={(e) => {
            if (e.target.value === kana.romaji) {
              setIsCorrect(true);
              setIsEmpty(false);

              const elem = document.getElementById(
                `KanaCardsInput${index + 1}`
              );
              if (index + 1 < totalItems) {
                scrollTo(document.getElementById("kanaPageScroll"), {
                  top: elem.offsetParent.offsetTop - window.innerHeight * 0.05,
                });
                elem.focus();
              }
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
      <CardFooter />
    </Card>
  );
}

export default KanaCards;
