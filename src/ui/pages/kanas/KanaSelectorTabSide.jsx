import React, { useState } from "react";

import { Box, Button, Container } from "@chakra-ui/react";
import {
  getKanaCombinationList,
  getKanaDakutenList,
  getMainKanaList,
} from "./kanaCharacterList";
import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import KanaSelectorButtonGroup from "./KanaSelectorButtonGroup";
import ThemeColors from "../main/ThemeColors";

function KanaSelectorTabSide() {
  const {
    kanaMode,
    kanaType,
    kanaGroup,
    dispatch: kanaDispatch,
  } = useKanaContext();
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const mainKana = getMainKanaList(kanaType);
  const dakutenKana = getKanaDakutenList(kanaType);
  const combinationKana = getKanaCombinationList(kanaType);
  const [mainKanaSelected, setMainKanaSelected] = useState(() => {
    const temp = [];
    mainKana.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  });
  const [dakutenKanaSelected, setDakutenKanaSelected] = useState(() => {
    const temp = [];
    dakutenKana.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  });
  const [combinationKanaSelected, setCombinationKanaSelected] = useState(() => {
    const temp = [];
    combinationKana.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  });

  function setMode() {
    let mode = [];
    if (mainKanaSelected.length) {
      mode.push("main");
    }
    if (dakutenKanaSelected.length) {
      mode.push("dakuten");
    }
    if (combinationKanaSelected.length) {
      mode.push("combination");
    }
    return mode;
  }

  return (
    <Container
      h="90vh"
      overflow="auto"
      overscrollBehavior="auto"
      sx={{
        "&::-webkit-scrollbar": {
          width: "10px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}
    >
      <Box
        textAlign="center"
        my="2.5vh"
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
            kanaDispatch({
              type: "typeSet",
              payload: kanaType === "hiragana" ? "katakana" : "hiragana",
            });
          }}
        >
          {`Switch to ${kanaType === "hiragana" ? "Katakana" : "Hiragana"}`}
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
            kanaDispatch({ type: "modeSet", payload: [] });
            kanaDispatch({ type: "typeSet", payload: kanaType });
            kanaDispatch({ type: "groupSet", payload: [] });
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
            kanaDispatch({ type: "modeSet", payload: setMode() });
            kanaDispatch({
              type: "groupSet",
              payload: [
                ...mainKanaSelected,
                ...dakutenKanaSelected,
                ...combinationKanaSelected,
              ],
            });
            kanaDispatch({ type: "typeSet", payload: kanaType });
          }}
        >
          Selected Kana
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
        <KanaSelectorButtonGroup
          mode={"main"}
          label={"All Main Kana"}
          kanaGroup={mainKana}
          selectedGroup={mainKanaSelected}
          selectedGroupSetter={setMainKanaSelected}
        />
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
        <KanaSelectorButtonGroup
          mode={"dakuten"}
          label={"All Dakuten Kana"}
          kanaGroup={dakutenKana}
          selectedGroup={dakutenKanaSelected}
          selectedGroupSetter={setDakutenKanaSelected}
        />
      </Box>

      {/* All Combination Kana */}
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
      >
        <KanaSelectorButtonGroup
          mode={"combination"}
          label={"All Combination Kana"}
          kanaGroup={combinationKana}
          selectedGroup={combinationKanaSelected}
          selectedGroupSetter={setCombinationKanaSelected}
        />
      </Box>
    </Container>
  );
}

export default KanaSelectorTabSide;
