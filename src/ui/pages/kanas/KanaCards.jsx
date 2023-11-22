import React from "react";

import { useParams } from "react-router-dom";
import { useKananContext } from "../../../logic/hooks/kana/useKanaContext";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  Skeleton,
  Spacer,
  useColorModeValue,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

function KanaCards({ totalItems, kana, index }) {
  const { type } = useParams();
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const popColor = useColorModeValue("gray.200", "dark.200");
  const typeOfKana = type.substring(0, 8);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <Card
      borderColor={border}
      bg={isCorrect ? "green.100" : !isEmpty ? "red.200" : bg}
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
                  typeOfKana === "hiragana" ? kana.hiragana : kana.katakana
                } ・ ${kana.romaji}`}</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Spacer />
          <Text>{`${index + 1}/${totalItems}`}</Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Heading fontSize="4vw" textAlign={"center"} m={2}>
          {typeOfKana === "hiragana" ? kana.hiragana : kana.katakana}
        </Heading>
        <Input
          textAlign="center"
          bg={isCorrect ? "white" : bg}
          key={kana.romaji + index}
          id={`KanaCardsInput${index}`}
          mt={10}
          type="text"
          autoComplete="off"
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
