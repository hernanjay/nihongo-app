import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DataSet from "../../../assets/data.json";
import CharacterPracticeTestCard from "./CharacterPracticeTestCard";
import ThemeColors from "../../pages/main/ThemeColors";

function CharacterPracticeTest(props) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();

  return (
    <Container minW="90vw" bg={bg} p={10} boxShadow={"lg"}>
      <SimpleGrid columns={4} gap={10}>
        {DataSet.alphabet.map((data, index) => {
          if (index < 16) {
            return (
              <CharacterPracticeTestCard
                key={index}
                data={data}
                index={index}
                mode={props.mode}
                length={DataSet.alphabet.length}
              />
            );
          }
        })}
      </SimpleGrid>
    </Container>
  );
}

export default CharacterPracticeTest;
