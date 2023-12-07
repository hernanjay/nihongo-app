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
      animateOpacity
      in={
        currentlySelectedQn === "none"
          ? true
          : currentlySelectedQn === `Q${set}`
      }
    >
      <Box key={`questions/n${level}/${type}/${set}`} mx="-1em">
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton
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
            {questions.map((qn, index) => {
              return (
                <AccordionPanel py="-1" _hover={{ bg: hover }}>
                  <HStack py="0.5em" ml="2em">
                    <ChevronRightIcon />
                    <Text>{qn}</Text>
                    <Spacer />
                    <IconButton
                      size="xs"
                      colorScheme="red"
                      icon={<DeleteIcon />}
                    />
                  </HStack>
                  <Divider />
                </AccordionPanel>
              );
            })}
          </AccordionItem>
        </Accordion>
      </Box>
    </Collapse>
  );
};
export default ManageQuestionSets;
