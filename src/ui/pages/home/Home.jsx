import { Box, Container, Heading, Accordion } from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import QuestionLevel from "../../components/QuestionLevel";
import { useEffect, useState } from "react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import QuestionType from "../../components/QuestionType";

export default function Home() {
    const bg = useColorModeValue("light.400", "dark.100");
    const { dispatch: questionDispatch } = useQuestionContext();
    const [vocabCount, setVocabCount] = useState(null);
    const [grammarCount, setGrammarCount] = useState(null);
    const [kanjiCount, setKanjiCount] = useState(null);
    const numberOfLevel = [1, 2, 3, 4, 5];
    useEffect(() => {
        async function fetchQuestions() {
            const response = await fetch(
                `${
                    import.meta.env.VITE_LOCALHOST_API
                }/api/questions/count-type-level`
            );

            const json = await response.json();

            if (!response.ok) {
                console.log(json.error);
            }

            if (response.ok) {
                console.log(json);
                setVocabCount(json.vocabQuestions);
                setGrammarCount(json.grammarQuestions);
                setKanjiCount(json.kanjiQuestions);
            }
        }
        fetchQuestions();
    }, []);
    return (
        <>
            <Box data-testid="home-container" pt={"10vw"} pb={"5vw"}>
                <Container maxW="container.xl" bg={bg} p="5" borderRadius="10">
                    <QuestionType type="Kanji" bg={bg}>
                        {numberOfLevel.map((num, index) => (
                            <QuestionLevel
                                index={index + 1}
                                key={num}
                                kanjiCount={kanjiCount}
                            />
                        ))}
                    </QuestionType>
                    <QuestionType type="Vocab" bg={bg}>
                        {numberOfLevel.map((num, index) => (
                            <QuestionLevel
                                index={index + 1}
                                key={num}
                                vocabCount={vocabCount}
                            />
                        ))}
                    </QuestionType>
                    <QuestionType type="Grammar" bg={bg}>
                        {numberOfLevel.map((num, index) => (
                            <QuestionLevel
                                index={index + 1}
                                key={num}
                                grammarCount={grammarCount}
                            />
                        ))}
                    </QuestionType>
                </Container>
            </Box>
        </>
    );
}
