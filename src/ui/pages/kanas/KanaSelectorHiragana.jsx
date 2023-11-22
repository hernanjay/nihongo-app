import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import KanaSelectorButtonGroup from "../../components/KanaSelectorButtonGroup";

function KanaSelectorHiragana() {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const navigate = useNavigate();
  const [mainKanaSelected, setMainKanaSelected] = useState(false);
  const [dakutenKanaSelected, setDakutenKanaSelected] = useState(false);
  const [combinationKanaSelected, setCombinationKanaSelected] = useState(false);
  const [mainCustomSelected, setMainCustomSelected] = useState(false);
  const [dakutenCustomSelected, setDakutenCustomSelected] = useState(false);
  const [combinationCustomSelected, setCombinationCustomSelected] =
    useState(false);
  const [group, setGroup] = useState([]);

  function setMode() {
    let mode = [];
    if (mainKanaSelected || mainCustomSelected) {
      mode = [...mode, "main"];
    }
    if (dakutenKanaSelected || dakutenCustomSelected) {
      mode = [...mode, "dakuten"];
    }
    if (combinationKanaSelected || combinationCustomSelected) {
      mode = [...mode, "combination"];
    }
    return mode;
  }

  function batchKanaSelection(kanaGroup, kanaIsSelected) {
    // setGroup([...group, ...stripKana(kanaGroup)]);

    if (!kanaIsSelected) {
      const temp = [];
      stripKana(kanaGroup).map((kana) => {
        if (!group.includes(kana)) {
          temp.push(kana);
        }
      });
      setGroup([...group, ...temp]);
    } else {
      let temp = group;
      stripKana(kanaGroup).map((kana) => {
        temp = temp.filter((e) => e !== kana);
      });
      setGroup(temp);
    }
  }

  function individualKanaSelection(kana) {
    const substr = kana.slice(kana.indexOf("・") + 1);
    if (group.includes(substr)) {
      setGroup(group.filter((e) => e !== substr));
    } else {
      setGroup([...group, substr]);
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
    "あ・a",
    "か・ka",
    "さ・sa",
    "た・ta",
    "な・na",
    "は・ha",
    "ま・ma",
    "や・ya",
    "ら・ra",
    "わ・wa",
  ];

  const dakutenKana = ["が・ga", "ざ・za", "だ・da", "ば・ba", "ぱ・pa"];

  const combinationKana = [
    "きゃ・kya",
    "しゃ・sha",
    "ちゃ・cha",
    "にゃ・nya",
    "ひゃ・hya",
    "みゃ・mya",
    "りゃ・rya",
    "ぎゃ・gya",
    "ざ・ja",
    "ぢゃ・dya",
    "びゃ・bya",
    "ぴゃ・pya",
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
              navigate("/alphabet/false/hiragana");
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
                  if (mainKanaSelected) {
                    setMainKanaSelected(false);
                  } else {
                    setMainKanaSelected(true);
                    setMainCustomSelected(false);
                  }
                  batchKanaSelection(mainKana, mainKanaSelected);
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
                    border={border}
                    kana={kana}
                    customSelected={mainCustomSelected}
                    kanaSelected={mainKanaSelected}
                    onClick={() => {
                      if (!mainCustomSelected) {
                        setMainCustomSelected(true);
                        setMainKanaSelected(false);
                      }
                      individualKanaSelection(kana);
                    }}
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
                  if (dakutenKanaSelected) {
                    setDakutenKanaSelected(false);
                  } else {
                    setDakutenKanaSelected(true);
                    setDakutenCustomSelected(false);
                  }
                  batchKanaSelection(dakutenKana, dakutenKanaSelected);
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
                    border={border}
                    kana={kana}
                    customSelected={dakutenCustomSelected}
                    kanaSelected={dakutenKanaSelected}
                    onClick={() => {
                      if (!dakutenCustomSelected) {
                        setDakutenCustomSelected(true);
                        setDakutenKanaSelected(false);
                      }
                      individualKanaSelection(kana);
                    }}
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
                  if (combinationKanaSelected) {
                    setCombinationKanaSelected(false);
                  } else {
                    setCombinationKanaSelected(true);
                    setCombinationCustomSelected(false);
                  }
                  batchKanaSelection(combinationKana, combinationKanaSelected);
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
                    border={border}
                    kana={kana}
                    customSelected={combinationCustomSelected}
                    kanaSelected={combinationKanaSelected}
                    onClick={() => {
                      if (!combinationCustomSelected) {
                        setCombinationCustomSelected(true);
                        setCombinationKanaSelected(false);
                      }
                      individualKanaSelection(kana);
                    }}
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
              if (Boolean(group.length) && Boolean(setMode().length)) {
                navigate(`/alphabet/true/${setMode()}/hiragana/${group}`);
              } else {
                alert("Empty Config");
              }
            }}
          >
            Custom Kana
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default KanaSelectorHiragana;
