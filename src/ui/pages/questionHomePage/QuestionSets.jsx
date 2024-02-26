import { Badge } from "@chakra-ui/layout";
import { Td, Tr } from "@chakra-ui/table";
import { useNavigate } from "react-router-dom";
import ThemeColors from "../main/ThemeColors";
import { getQuestionStatus } from "./qnHomeHelper";

const QuestionSets = ({
    type,
    level,
    set,
    grades,
    isGettingGrades,
    numOfItems,
}) => {
    const { hover } = ThemeColors();
    const navigate = useNavigate();

    const score =
        !isGettingGrades &&
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

    const numItems =
        !isGettingGrades &&
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
            .map((grade) => grade.idPerQuestion.length)[0];

    const status = getQuestionStatus(score, numItems);

    return (
        <Tr
            key={`questions/n${level}/${type}/${set}`}
            _hover={{ bg: hover }}
            onClick={() => navigate(`questions/n${level}/${type}/${set}`)}
            cursor={"pointer"}
        >
            <Td>{`Question Set: ${set}`}</Td>
            <Td>{numOfItems}</Td>
            <Td isNumeric>{(score === 0 && "0") || score || null}</Td>
            <Td isNumeric>
                <Badge
                    colorScheme={
                        (status === "Pass" && "green") ||
                        (status === "Fail" && "red") ||
                        (status === "Pending" && "gray")
                    }
                >
                    {status}
                </Badge>
            </Td>
        </Tr>
    );
};
export default QuestionSets;
