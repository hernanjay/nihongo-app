import React from "react";

import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function KanaSelectorHiragana() {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const navigate = useNavigate();

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
    "しゃ・sya",
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
    <Box>
      <Button
        mx="10"
        mb="2.5"
        minW="90%"
        variant="outline"
        borderColor={border}
        fontWeight="normal"
        onClick={() => {
          navigate("/alphabet/hiragana");
        }}
      >
        All Kana
      </Button>
      <SimpleGrid px="10" columns={3} gap={5}>
        {/* Main Kana */}
        <Box textAlign="center">
          <Flex mb="1.5vh">
            <Button
              variant="outline"
              borderColor={border}
              fontWeight="normal"
              minW="100%"
              onClick={() => {
                navigate("/alphabet/hiragana-main");
              }}
            >
              All Main Kana
            </Button>
          </Flex>
          <SimpleGrid columns={2} gap={2.5}>
            {mainKana.map((kana) => {
              return (
                <>
                  <Button
                    key={kana}
                    variant="outline"
                    borderColor={border}
                    minW="47.5%"
                    fontSize="2vh"
                    fontWeight="light"
                  >
                    {kana}
                  </Button>
                </>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* Dakuten Kana */}
        <Box textAlign="center">
          <Flex mb="1.5vh">
            <Button
              variant="outline"
              borderColor={border}
              fontWeight="normal"
              minW="100%"
              onClick={() => {
                navigate("/alphabet/hiragana-dakuten");
              }}
            >
              All Dakuten Kana
            </Button>
          </Flex>
          <SimpleGrid columns={1} gap={2.5}>
            {dakutenKana.map((kana) => {
              return (
                <>
                  <Button
                    key={kana}
                    variant="outline"
                    borderColor={border}
                    minW="47.5%"
                    fontSize="2vh"
                    fontWeight="light"
                  >
                    {kana}
                  </Button>
                </>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* Combination Kana */}
        <Box textAlign="center">
          <Flex mb="1.5vh">
            <Button
              variant="outline"
              borderColor={border}
              fontWeight="normal"
              minW="100%"
              onClick={() => {
                navigate("/alphabet/hiragana-combination");
              }}
            >
              All Combination Kana
            </Button>
          </Flex>
          <SimpleGrid columns={2} gap={2.5}>
            {combinationKana.map((kana) => {
              return (
                <>
                  <Button
                    key={kana}
                    variant="outline"
                    borderColor={border}
                    minW="47.5%"
                    fontSize="2vh"
                    fontWeight="light"
                  >
                    {kana}
                  </Button>
                </>
              );
            })}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default KanaSelectorHiragana;
