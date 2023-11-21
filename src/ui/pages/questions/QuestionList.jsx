import {
  Box,
  Container,
  GridItem,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import QuestionItem from "./QuestionItem";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";

const QuestionList = ({ bg, hoverColor, hasSubmit }) => {
  const { questions } = useQuestionContext();
  return (
    <GridItem colSpan={"2"}>
      <Box maxW={"60vw"}>
        <UnorderedList>
          {questions?.map((qn, index) => (
            <QuestionItem
              qn={qn}
              bg={bg}
              hoverColor={hoverColor}
              key={qn.question}
              index={index}
              hasSubmit={hasSubmit}
            />
          ))}
        </UnorderedList>
      </Box>
    </GridItem>
  );
};
export default QuestionList;
