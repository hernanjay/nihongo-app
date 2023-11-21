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

const QuestionSideSets = ({ bg, type, level, setHasSubmit }) => {
    const { countBySetVocab, countBySetGrammar, countBySetKanji } =
        useQuestionContext();
    const { dispatch: questionDispatch } = useQuestionContext();

    const { set } = useParams();
    const navigate = useNavigate();

    return (
        <GridItem colSpan="1">
            <Card boxShadow="lg" bgColor={bg} position="sticky" top="7.5vw">
                <CardHeader>
                    <Text
                        align="center"
                        fontSize={"1.5vw"}
                    >{`${level.toUpperCase()} ${
                        type[0].toUpperCase() + type.slice(1)
                    } Sets`}</Text>
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
                                          variant="ghost"
                                          key={type + level + kanji._id.set}
                                          bg={
                                              kanji._id.set == set
                                                  ? "blue.300"
                                                  : bg
                                          }
                                          onClick={() => {
                                              setHasSubmit(false);
                                              questionDispatch({
                                                  type: "clearAnswers",
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
                                          variant="ghost"
                                          key={type + level + vocab._id.set}
                                          bg={
                                              vocab._id.set == set
                                                  ? "blue.300"
                                                  : bg
                                          }
                                          onClick={() => {
                                              setHasSubmit(false);
                                              questionDispatch({
                                                  type: "clearAnswers",
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
                                          variant="ghost"
                                          key={type + level + grammar._id.set}
                                          bg={
                                              grammar._id.set == set
                                                  ? "blue.300"
                                                  : bg
                                          }
                                          onClick={() => {
                                              setHasSubmit(false);
                                              questionDispatch({
                                                  type: "clearAnswers",
                                              });
                                              navigate(
                                                  `/questions/n${level}/${type}/${grammar._id.set}`
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
