import React from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import KanaSelectorButtonGroup from "../../components/KanaSelectorButtonGroup";
import { useState } from "react";

function KanaSelectorKatakana() {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const navigate = useNavigate();
  const [mainKanaSelected, setMainKanaSelected] = useState(false);
  const [dakutenKanaSelected, setDakutenKanaSelected] = useState(false);
  const [combinationKanaSelected, setCombinationKanaSelected] = useState(false);
  let group = [];
  let mode = [];

  function setURL() {
    if (mainKanaSelected) {
      group = [...group, ...stripKana(mainKana)];
      mode = [...mode, "main"];
    }
    if (dakutenKanaSelected) {
      group = [...group, ...stripKana(dakutenKana)];
      mode = [...mode, "dakuten"];
    }
    if (combinationKanaSelected) {
      group = [...group, ...stripKana(combinationKana)];
      mode = [...mode, "combination"];
    }
  }

  function stripKana(array) {
    const strippedKana = [];
    array.map((kanaToStrip) => {
      const substr = kanaToStrip.slice(kanaToStrip.indexOf("・") + 1);
      strippedKana.push(substr);
    });
    return strippedKana;
  }

  const mainKana = [
    "ア・a",
    "カ・ka",
    "サ・sa",
    "タ・ta",
    "ナ・na",
    "ハ・ha",
    "マ・ma",
    "ヤ・ya",
    "ラ・ra",
    "ワ・wa",
  ];

  const dakutenKana = ["ガ・ga", "ザ・za", "ダ・da", "バ・ba", "パ・pa"];

  const combinationKana = [
    "キャ・kya",
    "シャ・sya",
    "チャ・cha",
    "ニャ・nya",
    "ヒャ・hya",
    "ミャ・mya",
    "リャ・rya",
    "ギャ・gya",
    "ジャ・ja",
    "ヂャ・dya",
    "ビャ・bya",
    "ピャ・pya",
  ];

  return (
    <Container minW="98%">
      <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem mt="auto" rowSpan={1} colSpan={6}>
          <Button
            key="ButtonAllKana"
            minW="100%"
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            onClick={() => {
              navigate("/alphabet/false/katakana");
            }}
          >
            All Kana
          </Button>
          <Divider h="2vh" />
        </GridItem>
        <GridItem rowSpan={4} colSpan={2}>
          <Box textAlign="center">
            <Flex mb="1.5vh">
              <Button
                key={`ButtonGroupAllMainKana`}
                variant="outline"
                borderColor={border}
                bg={mainKanaSelected ? "green.200" : bg}
                fontWeight="normal"
                minW="100%"
                onClick={() => {
                  setMainKanaSelected(!mainKanaSelected);
                }}
              >
                All Main Kana
              </Button>
            </Flex>
            <SimpleGrid columns={2} gap={2.5}>
              {mainKana.map((kana, index) => {
                return (
                  <KanaSelectorButtonGroup
                    key={`KanaSelectorButtonGroup${kana}:${index}`}
                    index={index}
                    kana={kana}
                    border={border}
                    type={"katakana"}
                    mode={"main"}
                    onClick={() => {}}
                  />
                );
              })}
            </SimpleGrid>
          </Box>
        </GridItem>
        <GridItem rowSpan={4} colSpan={2}>
          <Box textAlign="center">
            <Flex mb="1.5vh">
              <Button
                key={`ButtonGroupAllDakutenKana`}
                variant="outline"
                borderColor={border}
                bg={dakutenKanaSelected ? "green.200" : bg}
                fontWeight="normal"
                minW="100%"
                onClick={() => {
                  setDakutenKanaSelected(!dakutenKanaSelected);
                }}
              >
                All Dakuten Kana
              </Button>
            </Flex>
            <SimpleGrid columns={1} gap={2.5}>
              {dakutenKana.map((kana, index) => {
                return (
                  <KanaSelectorButtonGroup
                    key={`KanaSelectorButtonGroup${kana}:${index}`}
                    index={index}
                    kana={kana}
                    border={border}
                    type={"katakana"}
                    mode={"dakuten"}
                  />
                );
              })}
            </SimpleGrid>
          </Box>
        </GridItem>
        <GridItem rowSpan={5} colSpan={2}>
          <Box textAlign="center">
            <Flex mb="1.5vh">
              <Button
                key={`ButtonGroupAllCombinationKana`}
                variant="outline"
                borderColor={border}
                bg={combinationKanaSelected ? "green.200" : bg}
                fontWeight="normal"
                minW="100%"
                onClick={() => {
                  setCombinationKanaSelected(!combinationKanaSelected);
                }}
              >
                All Combination Kana
              </Button>
            </Flex>
            <SimpleGrid columns={2} gap={2.5}>
              {combinationKana.map((kana, index) => {
                return (
                  <KanaSelectorButtonGroup
                    key={`KanaSelectorButtonGroup${kana}:${index}`}
                    index={index}
                    kana={kana}
                    border={border}
                    type={"katakana"}
                    mode={"combination"}
                  />
                );
              })}
            </SimpleGrid>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Button
            key="ButtonAllKana"
            mb="2.5"
            minW="100%"
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            onClick={() => {
              setURL();
              navigate(`/alphabet/true/${mode}/katakana/${group}`);
            }}
          >
            Custom Kana
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default KanaSelectorKatakana;
