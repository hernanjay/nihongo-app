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

const QuestionSideSets = ({ bg, type, level }) => {
    const { countBySetVocab, countBySetGrammar, countBySetKanji } =
        useQuestionContext();
    const { set } = useParams();
    const navigate = useNavigate();

    let ctr = 0;

    return (
        <GridItem colSpan="1">
            <Card boxShadow="lg" bgColor={bg} position="sticky" top="7.5vw">
                <CardHeader>
                    <Text align="center" fontSize={"1.5vw"}>{`N${level} ${
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
                                  kanji._id.level == level ? (
                                      <Button
                                          variant="ghost"
                                          key={kanji._id.level + ctr}
                                          bg={
                                              kanji._id.set == set
                                                  ? "blue.300"
                                                  : bg
                                          }
                                          onClick={() =>
                                              navigate(
                                                  `/questions/n${level}/${type}/${ctr}`
                                              )
                                          }
                                      >
                                          Question Set {++ctr}
                                      </Button>
                                  ) : null
                              )
                            : null}
                        {type == "vocab"
                            ? countBySetVocab?.map((vocab) =>
                                  vocab._id.level == level ? (
                                      <Button
                                          variant="ghost"
                                          key={vocab._id.level + ctr}
                                          bg={
                                              vocab._id.set == set
                                                  ? "blue.300"
                                                  : bg
                                          }
                                          onClick={() =>
                                              navigate(
                                                  `/questions/n${level}/${type}/${ctr}`
                                              )
                                          }
                                      >
                                          Question Set {++ctr}
                                      </Button>
                                  ) : null
                              )
                            : null}
                        {type == "grammar"
                            ? countBySetGrammar?.map((grammar) =>
                                  grammar._id.level == level ? (
                                      <Button
                                          variant="ghost"
                                          key={grammar._id.level + ctr}
                                          bg={
                                              grammar._id.set == set
                                                  ? "blue.300"
                                                  : bg
                                          }
                                          onClick={() =>
                                              navigate(
                                                  `/questions/n${level}/${type}/${ctr}`
                                              )
                                          }
                                      >
                                          Question Set {++ctr}
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
