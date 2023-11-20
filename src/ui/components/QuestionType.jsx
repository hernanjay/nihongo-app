import { Accordion } from "@chakra-ui/accordion";
import { Heading } from "@chakra-ui/layout";

const QuestionType = ({ children, type, bg }) => {
    return (
        <>
            <Heading m="10">{type} Questions</Heading>
            <Accordion allowToggle m="10" bg={bg} variant="outline">
                {children}
            </Accordion>
        </>
    );
};
export default QuestionType;
