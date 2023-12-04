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

function LearnVocabLevelMenu({ onClick, searchValueLevel }) {
  const levels = ["N1", "N2", "N3", "N4", "N5"];
  return (
    <Menu>
      <MenuButton mx="1em" variant="outline">
        <HStack>
          <Text>{searchValueLevel}</Text> <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList fontSize="0.75em">
        <MenuItem
          onClick={() => {
            onClick("All");
          }}
        >
          All
        </MenuItem>
        {levels.map((level) => {
          return (
            <MenuItem
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
