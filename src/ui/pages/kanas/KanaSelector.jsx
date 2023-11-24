import React, { useState } from "react";

import {
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import {
  getKanaCombinationList,
  getKanaDakutenList,
  getMainKanaList,
} from "./kanaCharacterList";
import KanaSelectorButtonGroup from "./KanaSelectorButtonGroup";
import ThemeColors from "../main/ThemeColors";

function KanaSelector({ type }) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const navigate = useNavigate();
  const { kanaGroup, dispatch: kanaDispatch } = useKanaContext();
  const mainKana = getMainKanaList(type);
  const dakutenKana = getKanaDakutenList(type);
  const combinationKana = getKanaCombinationList(type);
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
              kanaDispatch({ type: "modeSet", payload: [] });
              kanaDispatch({ type: "typeSet", payload: type });
              kanaDispatch({ type: "groupSet", payload: [] });
              navigate("/kana-quiz");
            }}
          >
            All Kana
          </Button>
          <Divider h="2vh" />
        </GridItem>
        <GridItem rowSpan={4} colSpan={2}>
          <KanaSelectorButtonGroup
            mode={"main"}
            label={"All Main Kana"}
            kanaGroup={mainKana}
            selectedGroup={mainKanaSelected}
            selectedGroupSetter={setMainKanaSelected}
          />
        </GridItem>
        <GridItem rowSpan={4} colSpan={2}>
          <KanaSelectorButtonGroup
            mode={"dakuten"}
            label={"All Dakuten Kana"}
            kanaGroup={dakutenKana}
            selectedGroup={dakutenKanaSelected}
            selectedGroupSetter={setDakutenKanaSelected}
          />
        </GridItem>
        <GridItem rowSpan={5} colSpan={2}>
          <KanaSelectorButtonGroup
            mode={"combination"}
            label={"All Combination Kana"}
            kanaGroup={combinationKana}
            selectedGroup={combinationKanaSelected}
            selectedGroupSetter={setCombinationKanaSelected}
          />
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
              kanaDispatch({ type: "modeSet", payload: setMode() });
              kanaDispatch({
                type: "groupSet",
                payload: [
                  ...mainKanaSelected,
                  ...dakutenKanaSelected,
                  ...combinationKanaSelected,
                ],
              });
              kanaDispatch({ type: "typeSet", payload: type });
              navigate("/kana-quiz");
            }}
          >
            Load Selected Kana
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default KanaSelector;
