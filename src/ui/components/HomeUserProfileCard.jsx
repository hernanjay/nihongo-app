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
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../logic/hooks/user/useUserContext";
import ThemeColors from "../pages/main/ThemeColors";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGradeContext } from "../../logic/hooks/grade/useGradeContext";

function HomeUserProfileCard() {
    const { bg } = ThemeColors();
    const { user } = useUserContext();
    const { totalScoresNumItems } = useGradeContext();

    console.log(totalScoresNumItems);

    const [level, setLevel] = useState("N5");
    const [score, setScore] = useState({});
    const [total, setTotal] = useState({});

    const kanjiScores = totalScoresNumItems
        ?.map((grade) => {
            const { totalItems, totalScore, _id } = grade;
            return (
                _id.questionSetId.includes("kanji") && {
                    totalItems,
                    totalScore,
                    lvl: "N" + _id.questionSetId.slice(0, 1),
                }
            );
        })
        .filter((score) => score);

    const vocabScores = totalScoresNumItems
        ?.map((grade) => {
            const { totalItems, totalScore, _id } = grade;
            return (
                _id.questionSetId.includes("vocab") && {
                    totalItems,
                    totalScore,
                    lvl: "N" + _id.questionSetId.slice(0, 1),
                }
            );
        })
        .filter((score) => score);

    const grammarScores = totalScoresNumItems
        ?.map((grade) => {
            const { totalItems, totalScore, _id } = grade;
            return (
                _id.questionSetId.includes("grammar") && {
                    totalItems,
                    totalScore,
                    lvl: "N" + _id.questionSetId.slice(0, 1),
                }
            );
        })
        .filter((score) => score);

    // Set Score and total in first render
    useEffect(() => {
        // Check if totalScoresNumItems is available and not an empty array
        if (totalScoresNumItems && totalScoresNumItems.length > 0) {
            setScore(() => ({
                kanji: kanjiScores[0]?.totalScore || "0",
                vocab: vocabScores[0]?.totalScore || "0",
                grammar: grammarScores[0]?.totalScore || 0,
            }));
            setTotal(() => ({
                kanji: kanjiScores[0]?.totalItems || "0",
                vocab: vocabScores[0]?.totalItems || "0",
                grammar: grammarScores[0]?.totalItems || 0,
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
        }
    };

    // console.log(score);
    // console.log(total);

    return (
        <Box
            position={{ base: "relative", lg: "fixed" }}
            minW={{ base: "90vw", lg: "30vw" }}
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
                        top={{ base: "2.5vh", lg: "5vh" }}
                    >
                        <Image
                            borderRadius="full"
                            boxSize={{ base: "25vw", lg: "10vw" }}
                            src="https://bit.ly/dan-abramov"
                            alt="Dan Abramov"
                        />
                    </Center>
                </CardHeader>

                {/* Body */}
                <CardBody bg={bg} roundedBottom={"lg"}>
                    <Box minH={{ base: "5vh", lg: "12.5vh" }}></Box>

                    {/* Name and email */}
                    <Box>
                        <Heading fontWeight="normal" textAlign="center">
                            @{user.username}
                        </Heading>
                        <Divider my="0.5em" />
                        <Text fontWeight="normal" textAlign="center">
                            {user.email}
                        </Text>
                    </Box>

                    {/* Scoreboard */}
                    <TableContainer mt="5vh" mx="1.5vw">
                        <Table fontSize="0.75em" variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Category</Th>
                                    <Th>
                                        <Menu>
                                            <MenuButton
                                                variant="unstyled"
                                                as={Button}
                                                rightIcon={<ChevronDownIcon />}
                                            >
                                                Level
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
                                    <Th isNumeric>Score</Th>
                                    <Th isNumeric>Total</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Kanji</Td>
                                    <Td>{level}</Td>
                                    <Td isNumeric>{score?.kanji || "0"}</Td>
                                    <Td isNumeric>{total?.kanji || "0"}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Vocab</Td>
                                    <Td>{level}</Td>
                                    <Td isNumeric>{score?.vocab || "0"}</Td>
                                    <Td isNumeric>{total?.vocab || "0"}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Grammar</Td>
                                    <Td>{level}</Td>
                                    <Td isNumeric>{score?.grammar || "0"}</Td>
                                    <Td isNumeric>{total?.grammar || "0"}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>

                {/* <CardFooter bg={bg} roundedBottom="xl"></CardFooter> */}
            </Card>
        </Box>
    );
}

export default HomeUserProfileCard;
