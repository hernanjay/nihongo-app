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
import {
  getKanaCombinationList,
  getKanaDakutenList,
  getMainKanaList,
} from "./kanaCharacterList";

function KanaSelectorTabSide(type) {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const navigate = useNavigate();
  const mainKana = getMainKanaList(type);
  const dakutenKana = getKanaDakutenList(type);
  const combinationKana = getKanaCombinationList(type);
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
              `/alphabet/false/${type === "hiragana" ? `katakana` : `hiragana`}`
            );
          }}
        >
          {`Switch to ${type === "hiragana" ? "Katakana" : "Hiragana"}`}
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
          variant="outline"
          borderColor={border}
          loadingText="All Kana"
          w="45%"
          mr="1vw"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            navigate(`/alphabet/false/${type}`);
          }}
        >
          All Kana
        </Button>

        <Button
          variant="outline"
          borderColor={border}
          loadingText="Custom Kana"
          w="45%"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            if (Boolean(group.length) && Boolean(setMode().length)) {
              navigate(`/alphabet/true/${setMode()}/${type}/${group}`);
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
