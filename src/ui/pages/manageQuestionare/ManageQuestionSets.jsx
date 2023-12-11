import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Collapse,
  Divider,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon, DeleteIcon } from "@chakra-ui/icons";
import ThemeColors from "../main/ThemeColors";

const ManageQuestionSets = ({
  type,
  level,
  set,
  currentlySelectedQn,
  setCurrenlySelectedQn,
}) => {
  const { hover } = ThemeColors();
  const questions = [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
  ];

  return (
    <Collapse
      id="test"
      style={{ overflow: "visible" }}
      animateOpacity
      in={
        currentlySelectedQn === "none"
          ? true
          : currentlySelectedQn === `Q${set}`
      }
    >
      <Box key={`questions/n${level}/${type}/${set}`} mx="-1em">
        <Accordion allowToggle>
          <AccordionItem my="1">
            <AccordionButton
              pr="2em"
              onClick={() => {
                currentlySelectedQn === `Q${set}`
                  ? setCurrenlySelectedQn("none")
                  : setCurrenlySelectedQn(`Q${set}`);
              }}
            >
              <Box ml="1em" as="span" flex="1" textAlign="left">
                <ChevronRightIcon /> {`Question Set : ${set}`}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              maxH="50vh"
              overflowY="scroll"
              borderRadius="lg"
              sx={{
                "&::-webkit-scrollbar": {
                  width: "8px",
                  backgroundColor: `rgba(0, 0, 0, 0.15)`,
                  borderRightRadius: "lg",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.15)`,
                  borderRightRadius: "lg",
                },
              }}
            >
              {questions.map((qn, index) => {
                return (
                  <Box>
                    <HStack
                      cursor="pointer"
                      _hover={{ bg: hover }}
                      py="0.5em"
                      pl="1.25em"
                    >
                      <ChevronRightIcon />
                      <Text>{qn}</Text>
                      <Spacer />
                      <IconButton
                        size="sm"
                        mr="2em"
                        colorScheme="red"
                        icon={<DeleteIcon />}
                      />
                    </HStack>
                    <Divider />
                  </Box>
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Collapse>
  );
};
export default ManageQuestionSets;
