import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";

function LearnVocabLevelMenu({ onClick, searchValueLevel }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const levels = ["N1", "N2", "N3", "N4", "N5"];
  return (
    <Menu bg={bg}>
      <MenuButton mx="1em" variant="outline">
        <HStack>
          <Text>{searchValueLevel}</Text> <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList bg={bg} fontSize="0.75em">
        <MenuItem
          bg={bg}
          _hover={{ bg: hover }}
          onClick={() => {
            onClick("All");
          }}
        >
          All
        </MenuItem>
        {levels.map((level) => {
          return (
            <MenuItem
              bg={bg}
              _hover={{ bg: hover }}
              key={level}
              onClick={() => {
                onClick(level);
              }}
            >
              {level}
            </MenuItem>
          );
        })}

        {/* <MenuItem onClick={() => setSearchValueLevel("N1")}>N1</MenuItem>
        <MenuItem onClick={() => setSearchValueLevel("N2")}>N2</MenuItem>
        <MenuItem onClick={() => setSearchValueLevel("N3")}>N3</MenuItem>
        <MenuItem onClick={() => setSearchValueLevel("N4")}>N4</MenuItem>
        <MenuItem onClick={() => setSearchValueLevel("N5")}>N5</MenuItem> */}
      </MenuList>
    </Menu>
  );
}

export default LearnVocabLevelMenu;
