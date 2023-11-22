import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function KanaSelectorButtonGroup({
  index,
  kana,
  border,
  customSelected,
  kanaSelected,
  onClick,
}) {
  const bg = useColorModeValue("light.400", "dark.100");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (kanaSelected) {
      setIsSelected(false);
    }
  }, [kanaSelected]);

  return (
    <>
      <Button
        key={`ButtonGroup${kana}:${index}`}
        isDisabled={kanaSelected}
        variant="outline"
        borderColor={border}
        bg={customSelected && isSelected ? "green.200" : bg}
        minW="47.5%"
        fontSize="2vh"
        fontWeight="light"
        onClick={() => {
          onClick();
          setIsSelected(!isSelected);
        }}
      >
        {kana}
      </Button>
    </>
  );
}

export default KanaSelectorButtonGroup;
