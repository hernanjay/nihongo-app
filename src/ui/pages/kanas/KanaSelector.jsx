//#region Imports
import React, { useState } from "react";

import {
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
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
//#endregion

function KanaSelector({ type }) {
  //Importing app theme colors
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();

  const { isOpen, onOpen, onClose } = useDisclosure();

  //#region Variable decleration
  const navigate = useNavigate();
  // -------------------------------------------------------------------------------------
  const { kanaGroup, dispatch: kanaDispatch } = useKanaContext();
  // -------------------------------------------------------------------------------------
  const mainKana = getMainKanaList(type);
  const dakutenKana = getKanaDakutenList(type);
  const combinationKana = getKanaCombinationList(type);
  // -------------------------------------------------------------------------------------
  const [mainKanaSelected, setMainKanaSelected] = useState(
    setDefaultKanas(mainKana)
  );
  const [dakutenKanaSelected, setDakutenKanaSelected] = useState(
    setDefaultKanas(dakutenKana)
  );
  const [combinationKanaSelected, setCombinationKanaSelected] = useState(
    setDefaultKanas(combinationKana)
  );
  //#endregion

  //Checks which kana is saved in the context and places it inside a new useState
  function setDefaultKanas(kanaList) {
    const temp = [];
    kanaList.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  }

  //Checks which kana is chosen
  function setMode() {
    let mode = [];
    if (mainKanaSelected.length) mode.push("main");
    if (dakutenKanaSelected.length) mode.push("dakuten");
    if (combinationKanaSelected.length) mode.push("combination");
    return mode;
  }

  return (
    <Container minW="98%">
      <Grid
        display={{ base: "block", lg: "grid" }}
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem mt={{ base: "2.5vh", lg: "auto" }} rowSpan={1} colSpan={6}>
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
        <GridItem rowSpan={4} colSpan={2} mb={{ base: "2.5vh", lg: "0" }}>
          <KanaSelectorButtonGroup
            mode={"main"}
            label={"All Main Kana"}
            kanaGroup={mainKana}
            selectedGroup={mainKanaSelected}
            selectedGroupSetter={setMainKanaSelected}
          />
        </GridItem>
        <GridItem rowSpan={4} colSpan={2} mb={{ base: "2.5vh", lg: "0" }}>
          <KanaSelectorButtonGroup
            mode={"dakuten"}
            label={"All Dakuten Kana"}
            kanaGroup={dakutenKana}
            selectedGroup={dakutenKanaSelected}
            selectedGroupSetter={setDakutenKanaSelected}
          />
        </GridItem>
        <GridItem rowSpan={5} colSpan={2} mb={{ base: "2.5vh", lg: "0" }}>
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
              // navigate("/kana-quiz");
              onOpen();
            }}
          >
            Load Selected Kana
          </Button>
        </GridItem>
      </Grid>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Kanas To load</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{mainKanaSelected}</ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Proceed</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default KanaSelector;
