import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ThemeColors from "../main/ThemeColors";

function KanaSelectorButtonGroup({
    mode,
    kanaGroup,
    selectedGroup,
    selectedGroupSetter,
    label,
    isLoading,
}) {
    const {
        body,
        bg,
        border,
        fontColor,
        success,
        error,
        warning,
        info,
        hover,
    } = ThemeColors();

    // Initialize checked state for each button
    const initialCheckedItems = kanaGroup.map((kana) =>
        // Check if the selectedGroup includes the kana
        selectedGroup.includes(kana.split("・")[1])
    );

    const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

    useEffect(() => {
        let items = kanaGroup.map((kana) =>
            // Check if the selectedGroup includes the kana
            selectedGroup.includes(kana.split("・")[1])
        );
        setCheckedItems(items);
    }, [kanaGroup, selectedGroup]);

    //Checks if every buttons are checked
    const allChecked = checkedItems.every(Boolean);

    // Function to handle button click
    const handleButtonClick = (index) => {
        const newCheckedItems = [...checkedItems];

        // Toggle the checked state of the clicked item
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);

        const selectedKana = [...selectedGroup];
        const kanaName = kanaGroup[index].split("・")[1];
        if (newCheckedItems[index]) {
            // If checked, add to selectedKana
            selectedKana.push(kanaName);
        } else {
            // If unchecked, remove from selectedKana
            const indexToRemove = selectedKana.indexOf(kanaName);
            if (indexToRemove !== -1) {
                selectedKana.splice(indexToRemove, 1);
            }
        }
        selectedGroupSetter(selectedKana);
    };

    const handleSelectAllButton = () => {
        let items = [];
        if (allChecked) {
            items = kanaGroup.map(() => false);
            setCheckedItems(items);
            selectedGroupSetter([]);
        } else {
            items = kanaGroup.map(() => true);
            setCheckedItems(items);
            let selectedKana = kanaGroup.map((kana) => kana.split("・")[1]);
            selectedGroupSetter(selectedKana);
        }
    };

    return (
        <Box textAlign="center">
            <Flex mb="1.5vh">
                <Button
                    size={{ base: "xs", lg: "sm", xl: "md" }}
                    w="100%"
                    _hover={{ bg: allChecked ? success : hover }}
                    textAlign="center"
                    border="1px"
                    borderRadius="md"
                    bg={allChecked ? success : bg}
                    borderColor={border}
                    py="1vh"
                    fontWeight="normal"
                    minW="100%"
                    isDisabled={isLoading}
                    onClick={() => {
                        handleSelectAllButton();
                    }}
                >
                    <Text
                        fontSize={{ base: "0.75em", lg: "0.75em", xl: "1em" }}
                        minW="80%"
                        display="inline-block"
                        textAlign="center"
                    >
                        {label}
                    </Text>
                </Button>
            </Flex>
            <SimpleGrid columns={mode === "dakuten" ? 1 : 2} gap={2.5}>
                {kanaGroup.map((kana, index) => {
                    return (
                        <Button
                            _hover={{
                                bg: checkedItems[index] ? "green.500" : hover,
                            }}
                            key={`ButtonGroup${kana}:${index}`}
                            size={{ base: "xs", lg: "sm", xl: "md" }}
                            w="100%"
                            border="1px"
                            borderRadius="md"
                            borderColor={border}
                            bg={checkedItems[index] ? success : bg}
                            py="1vh"
                            minW="47.5%"
                            cursor="pointer"
                            fontWeight="normal"
                            isDisabled={isLoading}
                            onClick={() => handleButtonClick(index)}
                        >
                            <Text
                                fontSize={{
                                    base: "0.75em",
                                    lg: "0.75em",
                                    xl: "1em",
                                }}
                                textAlign="center"
                            >
                                {kana}
                            </Text>
                        </Button>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}

export default KanaSelectorButtonGroup;
