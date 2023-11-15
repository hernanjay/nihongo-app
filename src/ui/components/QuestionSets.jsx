import { Badge } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import { Stat, StatArrow, StatLabel } from "@chakra-ui/stat";
import { Td, Tr } from "@chakra-ui/table";
import { useToast } from "@chakra-ui/toast";

const QuestionSets = ({ index }) => {
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
                    toast({
                        title: "Test Opened.",
                        description: "This is a sample text thankyou.",
                        status: "success",
                        duration: 500,
                        isClosable: true,
                    });
                }}
                style={{ cursor: "pointer" }}
            >
                {`Question : ${index + 1}`}
            </Td>
            <Td>
                <Progress value={Math.round(Math.random() * (100 - 75) + 75)} />{" "}
            </Td>
            <Td isNumeric>
                <Stat>
                    <StatLabel>
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
