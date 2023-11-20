import { Box, Container } from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import QuestionLevel from "../../components/QuestionLevel";
import { useEffect } from "react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import QuestionType from "../../components/QuestionType";

export default function Home() {
    const bg = useColorModeValue("light.400", "dark.100");
    // const { dispatch: questionDispatch } = useQuestionContext();
    const numberOfLevel = [1, 2, 3, 4, 5];

    return (
        <>
            <Box data-testid="home-container" pt={"7vw"} pb={"5vw"}>
                <Container maxW="container.xl" bg={bg} p="5" borderRadius="10">
                    <QuestionType type="Kanji" bg={bg}>
                        {numberOfLevel.map((num, index) => (
                            <QuestionLevel
                                index={index + 1}
                                key={num + "123"}
                                type="Kanji"
                            ></QuestionLevel>
                        ))}
                    </QuestionType>
                    <QuestionType type="Vocab" bg={bg}>
                        {numberOfLevel.map((num, index) => (
                            <QuestionLevel
                                index={index + 1}
                                key={num + "51231"}
                                type="Vocab"
                            />
                        ))}
                    </QuestionType>
                    <QuestionType type="Grammar" bg={bg}>
                        {numberOfLevel.map((num, index) => (
                            <QuestionLevel
                                index={index + 1}
                                key={num + "avdc"}
                                type="Grammar"
                            />
                        ))}
                    </QuestionType>
                </Container>
            </Box>
        </>
    );
}
