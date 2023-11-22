import React from "react";
import {
  useColorModeValue,
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function KanaSelectorTabSide({ typeOfKana, type, isLoading }) {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const navigate = useNavigate();

  const mainKana =
    typeOfKana === "hiragana"
      ? ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"]
      : ["ア", "カ", "サ", "タ", "ナ", "ハ", "マ", "ヤ", "ラ", "ワ"];

  const dakutenKana =
    typeOfKana === "hiragana"
      ? ["が", "ざ", "だ", "ば", "ぱ"]
      : ["ガ", "ザ", "ダ", "バ", "パ"];

  const combinationKana =
    typeOfKana === "hiragana"
      ? [
          "きゃ",
          "しゃ",
          "ちゃ",
          "にゃ",
          "ひゃ",
          "みゃ",
          "りゃ",
          "ぎゃ",
          "ざ",
          "ぢゃ",
          "びゃ",
          "ぴゃ",
        ]
      : [
          "キャ",
          "シャ",
          "チャ",
          "ニャ",
          "ヒャ",
          "ミャ",
          "リャ",
          "ギャ",
          "ジャ",
          "ヂャ",
          "ビャ",
          "ピャ",
        ];

  return (
    <Container mt="2.5vh">
      {/* {isLoading && <Loader isLoading={isLoading} />} */}
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
              `/alphabet/${typeOfKana === "hiragana" ? "katakana" : "hiragana"}`
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
          isDisabled={type === "hiragana"}
          bg={bg}
          variant="outline"
          borderColor={border}
          w="100%"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            navigate(`/alphabet/${typeOfKana}`);
          }}
        >
          All Kana
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
            isDisabled={type === "hiragana-main"}
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            minW="100%"
            onClick={() => {
              navigate(`/alphabet/${typeOfKana}-main`);
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
                  fontSize="2.5vh"
                  fontWeight="light"
                >
                  {kana}
                </Button>
              </>
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
            isDisabled={type === "hiragana-dakuten"}
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            minW="100%"
            onClick={() => {
              navigate(`/alphabet/${typeOfKana}-dakuten`);
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
                  fontSize="2.5vh"
                  fontWeight="light"
                >
                  {kana}
                </Button>
              </>
            );
          })}
        </SimpleGrid>
      </Box>

      {/* All Combination Kana */}
      <Box textAlign="center" bg={bg} p="5" boxShadow="lg" borderRadius="lg">
        <Flex mb="1.5vh">
          <Button
            isDisabled={type === "hiragana-combination"}
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            minW="100%"
            onClick={() => {
              navigate(`/alphabet/${typeOfKana}-combination`);
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
                  fontSize="2.5vh"
                  fontWeight="light"
                >
                  {kana}
                </Button>
              </>
            );
          })}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default KanaSelectorTabSide;
