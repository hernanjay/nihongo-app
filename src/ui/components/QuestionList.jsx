import { Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function KanjiQuestionList({ questionNo, userHasAnswered }) {
  const border = useColorModeValue("dark.100", "light.400");
  const bg = useColorModeValue("light.400", "dark.100");
  const chosen = useColorModeValue("gray.200", "dark.200");
  let isDone =
    typeof userHasAnswered[questionNo] === "undefined"
      ? false
      : userHasAnswered[questionNo].isDone;
  return (
    <Tag
      key={questionNo}
      size="lg"
      variant="outline"
      borderColor={border}
      bg={isDone ? chosen : bg}
    >
      <TagLabel fontSize="2vh" color={border}>{`Q${questionNo}`}</TagLabel>
    </Tag>
  );
}
