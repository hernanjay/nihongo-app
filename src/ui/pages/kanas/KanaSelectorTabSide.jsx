import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import KanaSelectorButtonGroup from "../../components/KanaSelectorButtonGroup";

function KanaSelectorTabSide({ typeOfKana, custom, isLoading }) {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const navigate = useNavigate();
  const [isCustomKana, setIsCustomKana] = useState(custom);
  const [mainKanaSelected, setMainKanaSelected] = useState(false);
  const [dakutenKanaSelected, setDakutenKanaSelected] = useState(false);
  const [combinationKanaSelected, setCombinationKanaSelected] = useState(false);
  const [mainCustomSelected, setMainCustomSelected] = useState(false);
  const [dakutenCustomSelected, setDakutenCustomSelected] = useState(false);
  const [combinationCustomSelected, setCombinationCustomSelected] =
    useState(false);
  const [group, setGroup] = useState([]);
  const toast = useToast();

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

  const mainKana =
    typeOfKana === "hiragana"
      ? [
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
        ]
      : [
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

  const dakutenKana =
    typeOfKana === "hiragana"
      ? ["が・ga", "ざ・za", "だ・da", "ば・ba", "ぱ・pa"]
      : ["ガ・ga", "ザ・za", "ダ・da", "バ・ba", "パ・pa"];

  const combinationKana =
    typeOfKana === "hiragana"
      ? [
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
        ]
      : [
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
    <Container mt="2.5vh">
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Button
          bg={bg}
          variant="outline"
          borderColor={border}
          w="100%"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            navigate(
              `/alphabet/false/${
                typeOfKana === "hiragana" ? `katakana` : `hiragana`
              }`
            );
          }}
        >
          {`Switch to ${typeOfKana === "hiragana" ? "Katakana" : "Hiragana"}`}
        </Button>
      </Box>
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Button
          bg={isLoading ? bg : isCustomKana ? "green.400" : bg}
          variant="outline"
          borderColor={border}
          isDisabled={isCustomKana}
          isLoading={isLoading}
          loadingText="All Kana"
          w="45%"
          mr="1vw"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            setIsCustomKana(!isCustomKana);
            navigate(`/alphabet/false/${typeOfKana}`);
          }}
        >
          All Kana
        </Button>

        <Button
          bg={isLoading ? bg : !isCustomKana ? "green.400" : bg}
          variant="outline"
          borderColor={border}
          isDisabled={!isCustomKana}
          isLoading={isLoading}
          loadingText="Custom Kana"
          w="45%"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            if (Boolean(group.length) && Boolean(setMode().length)) {
              setIsCustomKana(!isCustomKana);
              navigate(`/alphabet/true/${setMode()}/${typeOfKana}/${group}`);
            } else {
              toast({
                title: "No Kana Selected",
                position: "top",
                description: "Please Select Kanas from the sidebar",
                status: "error",
                duration: 1000,
                isClosable: true,
              });
            }
          }}
        >
          Custom Kana
        </Button>
      </Box>

      {/* All Main Kana */}
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Flex mb="1.5vh">
          <Button
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
            const before_ = kana.substring(0, kana.indexOf("・"));
            return (
              <KanaSelectorButtonGroup
                key={`KanaSelectorButtonGroup${kana}:${index}`}
                index={index}
                border={border}
                kana={before_}
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

      {/* All Dakuten Kana */}
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Flex mb="1.5vh">
          <Button
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
            const before_ = kana.substring(0, kana.indexOf("・"));
            return (
              <KanaSelectorButtonGroup
                key={`KanaSelectorButtonGroup${kana}:${index}`}
                index={index}
                border={border}
                kana={before_}
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

      {/* All Combination Kana */}
      <Box textAlign="center" bg={bg} p="5" boxShadow="lg" borderRadius="lg">
        <Flex mb="1.5vh">
          <Button
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
            const before_ = kana.substring(0, kana.indexOf("・"));
            return (
              <KanaSelectorButtonGroup
                key={`KanaSelectorButtonGroup${kana}:${index}`}
                index={index}
                border={border}
                kana={before_}
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
    </Container>
  );
}

export default KanaSelectorTabSide;
