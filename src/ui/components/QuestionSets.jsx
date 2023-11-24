import { Badge } from "@chakra-ui/layout";
import { Td, Tr } from "@chakra-ui/table";
import { useNavigate } from "react-router-dom";
import { useGradeContext } from "../../logic/hooks/grade/useGradeContext";

const QuestionSets = ({ index, type, level, set }) => {
    const navigate = useNavigate();

    const { grades } = useGradeContext();

    // check if what grade is in this set
    const dynamicGrades =
        (type === "kanji" && grades?.kanjiGrades[index]) ||
        (type === "vocab" && grades?.vocabGrades[index]) ||
        (type === "grammar" && grades?.grammarGrades[index]);

    // if dynamicGrades is not null, get its level
    const gradesLevel =
        dynamicGrades && dynamicGrades?.questionSetId.slice(0, 1);

    // check if it gradesLEvel is same sa questions level
    const isSameLevel = level === gradesLevel;

    let score = isSameLevel ? dynamicGrades?.score : null;

    let numOfItems = 0;

    function setQuestionStatus() {
        if (score > 7) {
            return <Badge colorScheme="green">Pass</Badge>;
        } else if (score < 8 && score != null) {
            return <Badge colorScheme="red">Fail</Badge>;
        } else {
            return <Badge colorScheme="gray">pending</Badge>;
        }
    }
    return (
        <Tr key={index}>
            <Td
                onClick={() => navigate(`questions/n${level}/${type}/${set}`)}
                style={{ cursor: "pointer" }}
            >
                {`Question : ${index + 1}`}
            </Td>
            <Td>{numOfItems}</Td>
            <Td isNumeric>{score}</Td>
            <Td isNumeric>{setQuestionStatus()}</Td>
        </Tr>
    );
};
export default QuestionSets;
