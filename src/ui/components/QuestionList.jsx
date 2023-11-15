import { Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function kanjiQuestionList(questionNo, userHasAnswered) {
  const border = useColorModeValue("dark.100", "light.400");
  const bg = useColorModeValue("light.400", "dark.100");
  let isDone =
    typeof userHasAnswered[questionNo] === "undefined"
      ? false
      : userHasAnswered[questionNo].isDone;
  return (
    <Tag
      key={questionNo}
      size="lg"
      variant="outline"
      mr="5"
      borderColor={border}
      bg={isDone ? "green.400" : bg}
    >
      <TagLabel>{`Q${questionNo}`}</TagLabel>
    </Tag>
  );
}
