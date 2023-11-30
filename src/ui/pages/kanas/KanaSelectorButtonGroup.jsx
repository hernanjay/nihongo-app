import {
    Box,
    Button,
    Checkbox,
    Flex,
    SimpleGrid,
    Text,
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

    //Stores Truthy value of all buttons
    const [checkedItems, setCheckedItems] = useState(() => {
        let items = [];
        const storedKanaGroup = sessionStorage.getItem("kanaGroup");
        kanaGroup.map((value) => {
            if (storedKanaGroup) {
                const splitKanaGroup = storedKanaGroup.split(",");
                const strippedDownValue = value.split("・")[1];
                if (splitKanaGroup.includes(strippedDownValue))
                    items.push(true);
            } else {
                items.push(false);
            }
        });
        return items;
    });

    console.log(checkedItems, mode);

    //Checks if all buttons are checked
    const allChecked = checkedItems.every(Boolean);
    //Checks if all child buttons aren't checked
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
                            //Checks which kana character is chosen
                            if (isChecked) {
                                selectedKana.splice(
                                    selectedKana.indexOf(kanaGroup[index]),
                                    1
                                );
                            } else {
                                selectedKana.push(
                                    kanaGroup[index].split("・")[1]
                                );
                            }
                            //Checks which button is marked checked
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
                        ml={{ base: "2.5vw", lg: "1vw" }}
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
                                            selectedKana.push(
                                                kana.split("・")[1]
                                            );
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
                            <Box
                                minW="80%"
                                display="inline-block"
                                textAlign="center"
                            >
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
