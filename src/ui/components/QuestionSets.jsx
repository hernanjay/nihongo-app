import { Badge } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import { Stat, StatArrow, StatLabel } from "@chakra-ui/stat";
import { Td, Tr } from "@chakra-ui/table";
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from "react-router-dom";
import { Text, HStack } from "@chakra-ui/react";

const QuestionSets = ({ index }) => {
  const navigate = useNavigate();

  function setQuestionStatus() {
    let x = Math.round(Math.random() * (2 - 0) + 0);
    if (x === 0) {
      return <Badge colorScheme="green">Success</Badge>;
    } else if (x === 1) {
      return <Badge colorScheme="red">Fail</Badge>;
    } else {
      return <Badge colorScheme="teal">New</Badge>;
    }
  }

  const toast = useToast();
  return (
    <Tr key={index}>
      <Td
        onClick={() => {
          navigate("/kanji");
        }}
        style={{ cursor: "pointer" }}
      >
        <Text fontSize="1vw">{`Question : ${index + 1}`}</Text>
      </Td>
      <Td>
        <Progress value={Math.round(Math.random() * (100 - 75) + 75)} />{" "}
      </Td>
      <Td isNumeric>
        <Stat>
          <StatLabel fontSize="1vw">
            {Math.round(Math.random()) ? (
              <StatArrow type="increase" />
            ) : (
              <StatArrow type="decrease" />
            )}

            {Math.round(Math.random() * (100 - 75) + 75)}
          </StatLabel>
        </Stat>
      </Td>
      <Td isNumeric>{setQuestionStatus()}</Td>
    </Tr>
  );
};
export default QuestionSets;
