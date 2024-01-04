import { Badge, Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

import KanaSelectorTab from "../kanas/KanaSelectorTab";
import ThemeColors from "../main/ThemeColors";
import { useNavigate } from "react-router-dom";
import HomeUserProfileCard from "../../components/HomeUserProfileCard";
import QuestionLevel from "../questionHomePage/QuestionLevel";
import QuestionType from "../questionHomePage/QuestionType";
import Loader from "../../components/Loader";
import { useQuestionsTypeLevelSet } from "../../../logic/hooks/question/useQuestionsTypeLevelSet";
import { Fragment } from "react";

export default function Home() {
    const { bg } = ThemeColors();
    const numberOfLevel = [1, 2, 3, 4, 5];
    const questionTypes = ["kanji", "vocab", "grammar"];
    const navigate = useNavigate();

    // Run this function to fetch
    const { isGettingQuestionsByTypeLevelSet } = useQuestionsTypeLevelSet();

    return isGettingQuestionsByTypeLevelSet ? (
        <Loader isLoading={isGettingQuestionsByTypeLevelSet} />
    ) : (
        <Box data-testid="home-container" pb={"5vw"}>
            <Divider minH="10vh" />
            <Box
                pt={{ base: "2.5vh", lg: "5vh" }}
                h="90vh"
                pb={{ base: "10vh", lg: "0" }}
                overflow="auto"
                overscrollBehavior="auto"
                sx={{
                    "&::-webkit-scrollbar": {
                        width: "12px",
                        borderRadius: "8px",
                        backgroundColor: `rgba(0, 0, 0, 0.25)`,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: `rgba(0, 0, 0, 0.25)`,
                    },
                }}
            >
                {/* Home Page Start */}

                {/* User Profile Card*/}
                <HomeUserProfileCard />

                {/*Question Pages List*/}
                <Box
                    ml={{ base: "2.5vw", lg: "35vw" }}
                    maxW={{ base: "90vw", lg: "60vw" }}
                >
                    {/*#region WIP */}
                    <Box
                        boxShadow="lg"
                        py="1.5vh"
                        px="2.5vh"
                        bg={bg}
                        borderRadius="lg"
                        mb="2.25vh"
                    >
                        <Text
                            textAlign="center"
                            cursor="pointer"
                            fontSize="2.25vh"
                            onClick={() => {
                                navigate("/learnVocab");
                            }}
                        >
                            日本語辞書　・　Japanese Dictionary
                        </Text>
                    </Box>
                    {/*#endregion WIP */}

                    {/*Nan's Kana Pages */}
                    <KanaSelectorTab />

                    {/* Divider */}
                    <Divider maxW={{ base: "90vw", lg: "60vw" }} my="2.5vh" />
                    {/* Divider */}

                    {questionTypes.map((type) => (
                        <Fragment key={type}>
                            <Box
                                bg={bg}
                                p="5"
                                borderRadius="10"
                                ml={{ base: "2.5vw", lg: "0vw" }}
                                boxShadow="lg"
                            >
                                <QuestionType type={type} bg={bg}>
                                    {numberOfLevel.map((num, index) => (
                                        <QuestionLevel
                                            level={num}
                                            key={`${type}-${num}`}
                                            type={type}
                                            bg={bg}
                                        />
                                    ))}
                                </QuestionType>
                            </Box>

                            <Divider
                                maxW={{ base: "90vw", lg: "60vw" }}
                                my="2.5vh"
                            />
                        </Fragment>
                    ))}
                </Box>

                {/* Home Page End */}
                <Divider minH="5vh" />
            </Box>
        </Box>
    );
}
