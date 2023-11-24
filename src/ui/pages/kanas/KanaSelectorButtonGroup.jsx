import {
  Box,
  Center,
  Checkbox,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ThemeColors from "../main/ThemeColors";

function KanaSelectorButtonGroup({
  mode,
  kanaGroup,
  selectedGroup,
  selectedGroupSetter,
  label,
}) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();

  const [checkedItems, setCheckedItems] = useState(() => {
    let items = [];
    kanaGroup.map((value) => {
      if (sessionStorage.getItem("kanaGroup")) {
        if (
          sessionStorage
            .getItem("kanaGroup")
            .split(",")
            .includes(value.split("・")[1])
        ) {
          items.push(true);
        } else {
          items.push(false);
        }
      } else {
        items.push(false);
      }
    });
    return items;
  });

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <Box textAlign="center">
      <Flex mb="1.5vh">
        <Box
          textAlign="start"
          cursor="pointer"
          border="1px"
          borderRadius="md"
          borderColor={border}
          py="1vh"
          fontWeight="normal"
          minW="100%"
          onClick={() => {
            let items = [];
            let selectedKana = selectedGroup;
            checkedItems.map((isChecked, index) => {
              if (isChecked) {
                selectedKana.splice(selectedKana.indexOf(kanaGroup[index]), 1);
              } else {
                selectedKana.push(kanaGroup[index].split("・")[1]);
              }
              if (isChecked && !allChecked) {
                items.push(isChecked);
              } else {
                items.push(!isChecked);
              }
            });
            setCheckedItems(items);
            selectedGroupSetter(selectedKana);
          }}
        >
          <Checkbox
            id={`ButtonGroupAll${label}`}
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            colorScheme="green"
            key={`ButtonGroupAllMainKana`}
            fontWeight="normal"
            ml="1vw"
            py="1"
          ></Checkbox>
          <Box minW="80%" display="inline-block" textAlign="center">
            {label}
          </Box>
        </Box>
      </Flex>
      <SimpleGrid columns={mode === "dakuten" ? 1 : 2} gap={2.5}>
        {kanaGroup.map((kana, index) => {
          return (
            <Box
              key={`ButtonGroup${kana}:${index}`}
              border="1px"
              borderRadius="md"
              borderColor={border}
              py="1vh"
              minW="47.5%"
              cursor="pointer"
              onClick={() => {
                let items = [];
                let selectedKana = selectedGroup;
                checkedItems.map((value, itemIndex) => {
                  if (itemIndex === index) {
                    if (!value) {
                      selectedKana.push(kana.split("・")[1]);
                    } else {
                      selectedKana.splice(index, 1);
                    }
                    items.push(!value);
                  } else {
                    items.push(value);
                  }
                });
                setCheckedItems(items);
                selectedGroupSetter(selectedKana);
              }}
            >
              <Checkbox
                isFocusable={false}
                id={`ButtonGroup${kana}:${index}`}
                isChecked={checkedItems[index]}
                key={`ButtonGroup${kana}:${index}`}
                value={kana}
                colorScheme="green"
                fontSize="2vh"
                fontWeight="light"
                ml="0.25vw"
                py="1"
              ></Checkbox>
              <Box minW="80%" display="inline-block" textAlign="center">
                {kana}
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default KanaSelectorButtonGroup;
