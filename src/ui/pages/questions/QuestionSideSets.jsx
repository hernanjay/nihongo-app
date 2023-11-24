import {
  Button,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";

const QuestionSideSets = ({ bg, hoverColor, type, level, setHasSubmit }) => {
  const { countBySetVocab, countBySetGrammar, countBySetKanji } =
    useQuestionContext();
  const { dispatch: questionDispatch } = useQuestionContext();

  const { set } = useParams();
  const navigate = useNavigate();

  return (
    <GridItem colSpan="1">
      <Card boxShadow="lg" bgColor={bg} position="sticky" top="15.5vh">
        <CardHeader>
          <Text align="center" fontSize={"1.5vw"}>
            {`${level.toUpperCase()} ${
              type[0].toUpperCase() + type.slice(1)
            } Sets`}
          </Text>
        </CardHeader>
        <CardBody>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            align="stretch"
            textAlign="start"
          >
            {type == "kanji"
              ? countBySetKanji?.map((kanji) =>
                  kanji._id.level == level[1] ? (
                    <Button
                      isDisabled={kanji._id.set === set}
                      variant="ghost"
                      key={type + level + kanji._id.set}
                      fontWeight="light"
                      bg={kanji._id.set == set ? "blue.300" : bg}
                      _hover={
                        kanji._id.set == set
                          ? { bg: "blue.300" }
                          : { bg: hoverColor }
                      }
                      onClick={() => {
                        setHasSubmit(false);
                        questionDispatch({
                          type: "clearuseruserAnswers",
                        });
                        navigate(
                          `/questions/${level}/${kanji._id.type}/${kanji._id.set}`
                        );
                      }}
                    >
                      Question Set {kanji._id.set}
                    </Button>
                  ) : null
                )
              : null}
            {type == "vocab"
              ? countBySetVocab?.map((vocab) =>
                  vocab._id.level == level[1] ? (
                    <Button
                      isDisabled={vocab._id.set === set}
                      variant="ghost"
                      key={type + level + vocab._id.set}
                      fontWeight="light"
                      bg={vocab._id.set == set ? "blue.300" : bg}
                      _hover={
                        vocab._id.set == set
                          ? { bg: "blue.200" }
                          : { bg: hoverColor }
                      }
                      onClick={() => {
                        setHasSubmit(false);
                        questionDispatch({
                          type: "clearuseruserAnswers",
                        });
                        navigate(
                          `/questions/${level}/${type}/${vocab._id.set}`
                        );
                      }}
                    >
                      Question Set {vocab._id.set}
                    </Button>
                  ) : null
                )
              : null}
            {type == "grammar"
              ? countBySetGrammar?.map((grammar) =>
                  grammar._id.level == level[1] ? (
                    <Button
                      isDisabled={grammar._id.set === set}
                      variant="ghost"
                      key={type + level + grammar._id.set}
                      fontWeight="light"
                      bg={grammar._id.set == set ? "blue.300" : bg}
                      _hover={
                        grammar._id.set == set
                          ? { bg: "blue.200" }
                          : { bg: hoverColor }
                      }
                      onClick={() => {
                        setHasSubmit(false);
                        questionDispatch({
                          type: "clearuseruserAnswers",
                        });
                        navigate(
                          `/questions/${level}/${type}/${grammar._id.set}`
                        );
                      }}
                    >
                      Question Set {grammar._id.set}
                    </Button>
                  ) : null
                )
              : null}
          </VStack>
        </CardBody>
      </Card>
    </GridItem>
  );
};
export default QuestionSideSets;
