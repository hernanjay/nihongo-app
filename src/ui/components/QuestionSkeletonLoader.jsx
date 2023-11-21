import {
  Box,
  GridItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function QuestionSkeletonLoader() {
  const bg = useColorModeValue("light.400", "dark.100");
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <GridItem colSpan={"2"}>
      {boxes.map((box) => {
        return (
          <Box
            key={box}
            bg={bg}
            mr="1.25vw"
            px="2.25vw"
            py="2.5vw"
            mb="2vh"
            minH="25vh"
            borderRadius="lg"
          >
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        );
      })}
    </GridItem>
  );
}

export default QuestionSkeletonLoader;
