import {
  Box,
  GridItem,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function QuestionSkeletonLoader() {
  const bg = useColorModeValue("light.400", "dark.100");
  const start = useColorModeValue("light.400", "dark.100");
  const end = useColorModeValue("dark.100", "light.400");
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
            <SkeletonCircle
              startColor={start}
              endColor={end}
              fadeDuration={1}
              size="10"
            />
            <SkeletonText
              startColor={start}
              endColor={end}
              fadeDuration={4}
              mt="4"
              noOfLines={4}
              spacing="4"
              skeletonHeight="3"
            />
          </Box>
        );
      })}
    </GridItem>
  );
}

export default QuestionSkeletonLoader;
