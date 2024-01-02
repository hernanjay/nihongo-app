import { Badge } from "@chakra-ui/layout";
import { Td, Tr } from "@chakra-ui/table";
import { useNavigate } from "react-router-dom";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";
import ThemeColors from "../main/ThemeColors";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useEffect } from "react";

const QuestionSets = ({ type, level, set, grades, isLoading, numOfItems }) => {
    const { hover } = ThemeColors();
    const navigate = useNavigate();

    const score =
        !isLoading &&
        grades.grades
            .filter((grade) => {
                // Using regular expression to extract the type, level, and set
                const match = grade.questionSetId.match(
                    /(\d*)([a-zA-Z]+)(\d+)/
                );

                // Check if a match is found and get the level
                const gradeLevel = match && match[1];

                // Check if a match is found and get the type
                const gradeType = match && match[2];

                // Check if a match is found and get the set
                const gradeSet = match && match[3];

                return (
                    gradeType == type && gradeLevel == level && gradeSet == set
                );
            })
            .map((grade) => grade.score)[0];

    function setQuestionStatus() {
        if (score > 7) {
            return <Badge colorScheme="green">Pass</Badge>;
        } else if (score < 8 && score !== undefined) {
            return <Badge colorScheme="red">Fail</Badge>;
        } else {
            return <Badge colorScheme="gray">pending</Badge>;
        }
    }

    return (
        <Tr
            key={`questions/n${level}/${type}/${set}`}
            _hover={{ bg: hover }}
            onClick={() => navigate(`questions/n${level}/${type}/${set}`)}
            cursor={"pointer"}
        >
            <Td>{`Question : ${set}`}</Td>
            <Td>{numOfItems}</Td>
            <Td isNumeric>{(score === 0 && "0") || score || null}</Td>
            <Td isNumeric>{setQuestionStatus()}</Td>
        </Tr>
    );
};
export default QuestionSets;
