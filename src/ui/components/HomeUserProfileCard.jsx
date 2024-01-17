import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Divider,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ThemeColors from "../pages/main/ThemeColors";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGradeContext } from "../../logic/hooks/grade/useGradeContext";
import {
    fetchGrades,
    fetchTotalScoresAndItems,
} from "../../logic/services/apiGrades";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function HomeUserProfileCard() {
    const { bg } = ThemeColors();
    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["user"]);
    const { dispatch: gradeDispatch } = useGradeContext();

    const { data: totalScoresNumItems } = useQuery({
        queryKey: ["totalScoresNumItems"],
        queryFn: () => fetchTotalScoresAndItems(user._id),
        enabled: !!user,
    });

    const [level, setLevel] = useState("N5");
    const [score, setScore] = useState({});
    const [total, setTotal] = useState({});

    const kanjiScores = totalScoresNumItems
        ?.map((grade) => {
            const { totalItems, totalScore, questionSetId } = grade;
            return (
                questionSetId.includes("kanji") && {
                    totalItems,
                    totalScore,
                    lvl: "N" + questionSetId.slice(0, 1),
                }
            );
        })
        .filter((score) => score);

    const vocabScores = totalScoresNumItems
        ?.map((grade) => {
            const { totalItems, totalScore, questionSetId } = grade;
            return (
                questionSetId.includes("vocab") && {
                    totalItems,
                    totalScore,
                    lvl: "N" + questionSetId.slice(0, 1),
                }
            );
        })
        .filter((score) => score);

    const grammarScores = totalScoresNumItems
        ?.map((grade) => {
            const { totalItems, totalScore, questionSetId } = grade;
            return (
                questionSetId.includes("grammar") && {
                    totalItems,
                    totalScore,
                    lvl: "N" + questionSetId.slice(0, 1),
                }
            );
        })
        .filter((score) => score);

    // Set Score and total in first render
    useEffect(() => {
        // Check if totalScoresNumItems is available and not an empty array
        if (totalScoresNumItems && totalScoresNumItems.length > 0) {
            const kanjiN5 = kanjiScores.find((kanji) => kanji.lvl === "N5");
            const vocabN5 = vocabScores.find((vocab) => vocab.lvl === "N5");
            const grammarN5 = grammarScores.find(
                (grammar) => grammar.lvl === "N5"
            );
            setScore(() => ({
                kanji: kanjiN5?.totalScore || "0",
                vocab: vocabN5?.totalScore || "0",
                grammar: grammarN5?.totalScore || "0",
            }));
            setTotal(() => ({
                kanji: kanjiN5?.totalItems || "0",
                vocab: vocabN5?.totalItems || "0",
                grammar: grammarN5?.totalItems || "0",
            }));
        }
    }, [totalScoresNumItems]);

    const handleLevelChange = (newLevel) => {
        setLevel(newLevel);

        const kanjiScoreForLevel = kanjiScores?.find(
            (score) => score && score.lvl === newLevel
        );

        if (kanjiScoreForLevel) {
            setScore((prevScore) => ({
                ...prevScore,
                kanji: kanjiScoreForLevel.totalScore,
            }));
            setTotal((prevTotal) => ({
                ...prevTotal,
                kanji: kanjiScoreForLevel.totalItems,
            }));
        } else {
            setScore((prevScore) => ({
                ...prevScore,
                kanji: 0,
            }));
            setTotal((prevTotal) => ({
                ...prevTotal,
                kanji: 0,
            }));
        }

        const vocabScoreForLevel = vocabScores?.find(
            (score) => score && score.lvl === newLevel
        );

        if (vocabScoreForLevel) {
            setScore((prevScore) => ({
                ...prevScore,
                vocab: vocabScoreForLevel.totalScore,
            }));
            setTotal((prevTotal) => ({
                ...prevTotal,
                vocab: vocabScoreForLevel.totalItems,
            }));
        } else {
            setScore((prevScore) => ({
                ...prevScore,
                vocab: 0,
            }));
            setTotal((prevTotal) => ({
                ...prevTotal,
                vocab: 0,
            }));
        }

        const grammarScoreForLevel = grammarScores?.find(
            (score) => score && score.lvl === newLevel
        );

        if (grammarScoreForLevel) {
            setScore((prevScore) => ({
                ...prevScore,
                grammar: grammarScoreForLevel.totalScore,
            }));
            setTotal((prevTotal) => ({
                ...prevTotal,
                grammar: grammarScoreForLevel.totalItems,
            }));
        } else {
            setScore((prevScore) => ({
                ...prevScore,
                grammar: 0,
            }));
            setTotal((prevTotal) => ({
                ...prevTotal,
                grammar: 0,
            }));
        }
    };

    useEffect(() => {
        const fetchScores = async () => {
            const scoresNumItems = await fetchTotalScoresAndItems(user._id);

            gradeDispatch({
                type: "receivedTotalScoresNumItems",
                payload: scoresNumItems,
            });
        };

        fetchScores();
    }, [user, gradeDispatch]);

    return (
        <Box
            position={{ base: "relative", lg: "fixed" }}
            w={{ base: "90vw", lg: "30vw" }}
            ml={{ base: "2.5vw", lg: "2vw" }}
            mr={{ base: "2.5vw", lg: "0vw" }}
            mb="2.25vh"
        >
            <Card
                variant="outlined"
                bg="transparent"
                boxShadow="lg"
                minH="80vh"
            >
                {/* Cover Photo */}
                <CardHeader
                    roundedTop="xl"
                    maxH="15vh"
                    backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                >
                    <Center
                        position="relative"
                        top={{ base: "6.5vh", lg: "3vh", xl: "5vh" }}
                    >
                        <Image
                            borderRadius="full"
                            boxSize={{
                                base: "25vw",
                                lg: "10vw",
                                xl: "8vw",
                            }}
                            src="https://w0.peakpx.com/wallpaper/167/11/HD-wallpaper-lazy-egg6-egg-gudetama-kawaii-lazy-egg.jpg"
                            alt="Dan Abramov"
                        />
                    </Center>
                </CardHeader>

                {/* Body */}
                <CardBody bg={bg} roundedBottom={"lg"}>
                    <Box minH={{ base: "5vh", lg: "8vh ", xl: "10vh" }}></Box>

                    {/* Name and email */}
                    <Box>
                        <Heading
                            fontWeight="normal"
                            textAlign="center"
                            fontSize={{
                                base: "5vh",
                                lg: "1.5em ",
                                xl: "2em",
                            }}
                        >
                            @{user.username}
                        </Heading>
                        <Divider my="0.5em" />
                        <Text fontWeight="normal" textAlign="center">
                            {user.email}
                        </Text>
                    </Box>

                    {/* Scoreboard */}
                    <TableContainer mt="5vh">
                        <Table fontSize=".8rem" variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Text>Category </Text>
                                    </Th>
                                    <Th>
                                        <Menu>
                                            <MenuButton
                                                display="flex"
                                                size="xs"
                                                justifyContent="end"
                                                variant="unstyled"
                                                as={Button}
                                                rightIcon={<ChevronDownIcon />}
                                                fontSize=".8rem"
                                            >
                                                <Text display="inline">
                                                    LEVEL
                                                </Text>
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() =>
                                                        handleLevelChange("N1")
                                                    }
                                                >
                                                    N1
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        handleLevelChange("N2")
                                                    }
                                                >
                                                    N2
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        handleLevelChange("N3")
                                                    }
                                                >
                                                    N3
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        handleLevelChange("N4")
                                                    }
                                                >
                                                    N4
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        handleLevelChange("N5")
                                                    }
                                                >
                                                    N5
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() =>
                                                        handleLevelChange(
                                                            "Overall"
                                                        )
                                                    }
                                                >
                                                    Overall
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Th>
                                    <Th>
                                        <Text>Score </Text>
                                    </Th>
                                    <Th>
                                        <Text>Total </Text>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign={"center"}>KANJI</Td>

                                    <Td ms="5px">{level}</Td>

                                    <Td textAlign={"center"}>
                                        {score?.kanji || "0"}
                                    </Td>

                                    <Td textAlign={"center"}>
                                        {total?.kanji || "0"}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign={"center"}>VOCAB</Td>
                                    <Td>{level}</Td>
                                    <Td textAlign={"center"}>
                                        {score?.vocab || "0"}
                                    </Td>
                                    <Td textAlign={"center"}>
                                        {total?.vocab || "0"}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign={"center"}>GRAMMAR</Td>
                                    <Td>{level}</Td>
                                    <Td textAlign={"center"}>
                                        {score?.grammar || "0"}
                                    </Td>
                                    <Td textAlign={"center"}>
                                        {total?.grammar || "0"}
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </Box>
    );
}

export default HomeUserProfileCard;
