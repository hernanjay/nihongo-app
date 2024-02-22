import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ExternalLinkIcon,
    InfoOutlineIcon,
    Search2Icon,
    SearchIcon,
} from "@chakra-ui/icons";
import {
    Grid,
    GridItem,
    Image,
    Card,
    CardHeader,
    CardBody,
    Text,
    Heading,
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    TabIndicator,
    Center,
    Divider,
    SimpleGrid,
    Box,
    Container,
    HStack,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input,
    InputGroup,
    IconButton,
    CardFooter,
    Tag,
    TagLabel,
    VStack,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CharacterPracticeTest from "../../components/landingPage/CharacterPracticeTest";
import KanjiQuestionSample from "../../components/landingPage/KanjiQuestionSample";
import VocabQuestionSample from "../../components/landingPage/VocabQuestionSample";
import GrammarQuestionSample from "../../components/landingPage/GrammarQuestionSample";
import ThemeColors from "../main/ThemeColors";
import { useQueryClient } from "@tanstack/react-query";

export default function LandingPage() {
    const { bg, border } = ThemeColors();
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const user = queryClient.getQueryData(["user"]);
    const isLoading = queryClient.isFetching(["user"]);
    const sample = [
        {
            id: 1,
            kanji: "浴びる",
            hiragana: "あびる",
            romaji: "abiru",
            meaning: " to take a shower",
        },
        {
            id: 2,
            kanji: "危ない",
            hiragana: "あぶない",
            romaji: "abunai",
            meaning: " dangerous, risky",
        },
        {
            id: 3,
            kanji: "あげる",
            hiragana: "あげる",
            romaji: "ageru",
            meaning: " to give",
        },
    ];

    return (
        <Box minH="100vh">
            <Spacer minH="10vh" />
            <Box
                h="90vh"
                overflowY="auto"
                overflowX="hidden"
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
                {/* Banner */}
                <Box bg={bg} display="flex" minH="100vh" minW="100vw">
                    <Center m="auto">
                        <HStack mt="-10vh" maxW="70vw">
                            <Image
                                boxSize="50%"
                                p="2.5em"
                                src="https://i.imgur.com/TDC5iyi.png"
                                alt="pictureForLandingPage"
                            />
                            <Card bg={"transparent"} variant={"unstyled"}>
                                <CardHeader my={"5"}>
                                    <Heading fontSize="3vw">
                                        日本語のアプリ
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text fontSize="1vw">
                                        Cras a risus ex. In auctor faucibus
                                        dolor sit amet condimentum. Maecenas sed
                                        orci vitae ligula commodo dictum sit
                                        amet quis tellus. Maecenas et viverra
                                        lacus. Morbi sit amet ex libero.
                                        Praesent sagittis sapien ac fermentum
                                        laoreet. Mauris semper sem urna, nec
                                        viverra ante eleifend sit amet.
                                        Phasellus venenatis sagittis
                                        scelerisque. Quisque elit augue, sodales
                                        sit amet bibendum a, tempor eget mi.
                                        Proin finibus lectus vitae nisi congue
                                        hendrerit.
                                    </Text>
                                </CardBody>
                            </Card>
                        </HStack>
                    </Center>
                </Box>
                {/* Banner */}
                <Divider />
                {/* Sample Questions */}
                <Center id="sampleQuestions" pt={"10"} pb={"5"} bg={bg}>
                    <Heading fontSize="3vw">Sample Questions</Heading>
                </Center>
                <Tabs isFitted variant={"line"} colorScheme="white">
                    <TabList mb="1em" bg={bg}>
                        <Tab>
                            <InfoOutlineIcon mx={"2"} />
                            Kanji Questions
                        </Tab>
                        <Tab>
                            <InfoOutlineIcon mx={"2"} />
                            Vocab Questions
                        </Tab>
                        <Tab>
                            <InfoOutlineIcon mx={"2"} />
                            Grammar Questions
                        </Tab>
                    </TabList>
                    <TabIndicator
                        mt="-4"
                        height="2px"
                        bg={border}
                        borderRadius="1px"
                    />
                    <TabPanels>
                        <TabPanel>{<KanjiQuestionSample />}</TabPanel>
                        <TabPanel>{<VocabQuestionSample />}</TabPanel>
                        <TabPanel>{<GrammarQuestionSample />}</TabPanel>
                    </TabPanels>
                </Tabs>
                {/* Sample Questions */}
                {/* Try out Questions Card */}
                <Divider />
                <Box id="tryItOutScrollLoc" maxW="100vw" bg={bg}>
                    <Container maxW="80vw" py="10">
                        <SimpleGrid columns={3} spacing={10}>
                            <Box minH="25vh">
                                <Card maxW="sm" bg={bg} variant="unstyled">
                                    <CardBody>
                                        <Heading size="md" py="2">
                                            Kanji Questions
                                        </Heading>
                                        <Text>
                                            Cras a risus ex. In auctor faucibus
                                            dolor sit amet condimentum. Maecenas
                                            sed orci vitae ligula commodo dictum
                                            sit amet quis tellus.
                                        </Text>
                                        <Button
                                            mt={"5"}
                                            variant={"ghost"}
                                            bg={"transparent"}
                                            borderColor={border}
                                            onClick={() => {
                                                user
                                                    ? navigate("/Kanji")
                                                    : navigate("/login");
                                            }}
                                            rightIcon={
                                                <ExternalLinkIcon ml={"2"} />
                                            }
                                        >
                                            Try it out
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box minH="25vh">
                                <Card maxW="sm" bg={bg} variant="unstyled">
                                    <CardBody>
                                        <Heading size="md" py="2">
                                            Vocab Questions
                                        </Heading>
                                        <Text>
                                            Cras a risus ex. In auctor faucibus
                                            dolor sit amet condimentum. Maecenas
                                            sed orci vitae ligula commodo dictum
                                            sit amet quis tellus.
                                        </Text>
                                        <Button
                                            mt={"5"}
                                            variant={"ghost"}
                                            bg={"transparent"}
                                            borderColor={border}
                                            onClick={() => {
                                                user
                                                    ? navigate("/vocab")
                                                    : navigate("/login");
                                            }}
                                            rightIcon={
                                                <ExternalLinkIcon ml={"2"} />
                                            }
                                        >
                                            Try it out
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box minH="25vh">
                                <Card maxW="sm" bg={bg} variant="unstyled">
                                    <CardBody>
                                        <Heading size="md" py="2">
                                            Grammar Questions
                                        </Heading>
                                        <Text>
                                            Cras a risus ex. In auctor faucibus
                                            dolor sit amet condimentum. Maecenas
                                            sed orci vitae ligula commodo dictum
                                            sit amet quis tellus.
                                        </Text>
                                        <Button
                                            mt={"5"}
                                            variant={"ghost"}
                                            bg={"transparent"}
                                            borderColor={border}
                                            onClick={() => {
                                                user
                                                    ? navigate("/grammar")
                                                    : navigate("/login");
                                            }}
                                            rightIcon={
                                                <ExternalLinkIcon ml={"2"} />
                                            }
                                        >
                                            Try it out
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>
                <Divider />
                {/* Try out Questions Card */}
                <Center id="sampleQuestions" pt={"10"} pb={"5"} bg={bg}>
                    <Heading fontSize="3vw">Sample Exercises</Heading>
                </Center>
                <Tabs isFitted variant={"line"} colorScheme="white">
                    <TabList mb="1em" bg={bg}>
                        <Tab>
                            <InfoOutlineIcon mx={"2"} />
                            Hiragana Exercise
                        </Tab>
                        <Tab>
                            <InfoOutlineIcon mx={"2"} />
                            Katakana Exercise
                        </Tab>
                    </TabList>
                    <TabIndicator
                        mt="-4"
                        height="2px"
                        bg={border}
                        borderRadius="1px"
                    />
                    <TabPanels>
                        <TabPanel>
                            {<CharacterPracticeTest mode="hir" />}
                        </TabPanel>
                        <TabPanel>
                            {<CharacterPracticeTest mode="kat" />}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                {/* Try out Questions Card */}
                <Divider />
                <Box id="tryItOutScrollLoc" maxW="100vw" bg={bg}>
                    <Container maxW="80vw" py="10">
                        <SimpleGrid columns={2} spacing={10}>
                            <Box minH="25vh">
                                <Card maxW="sm" bg={bg} variant="unstyled">
                                    <CardBody>
                                        <Heading size="md" py="2">
                                            Hiragana Exercise
                                        </Heading>
                                        <Text>
                                            Cras a risus ex. In auctor faucibus
                                            dolor sit amet condimentum. Maecenas
                                            sed orci vitae ligula commodo dictum
                                            sit amet quis tellus.
                                        </Text>
                                        <Button
                                            mt={"5"}
                                            variant={"ghost"}
                                            bg={"transparent"}
                                            borderColor={border}
                                            onClick={() => {
                                                navigate("/hiragana");
                                            }}
                                            rightIcon={
                                                <ExternalLinkIcon ml={"2"} />
                                            }
                                        >
                                            Try it out
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box minH="25vh">
                                <Card maxW="sm" bg={bg} variant="unstyled">
                                    <CardBody>
                                        <Heading size="md" py="2">
                                            Katakana Exercise
                                        </Heading>
                                        <Text>
                                            Cras a risus ex. In auctor faucibus
                                            dolor sit amet condimentum. Maecenas
                                            sed orci vitae ligula commodo dictum
                                            sit amet quis tellus.
                                        </Text>
                                        <Button
                                            mt={"5"}
                                            variant={"ghost"}
                                            bg={"transparent"}
                                            borderColor={border}
                                            onClick={() => {
                                                navigate("/katakana");
                                            }}
                                            rightIcon={
                                                <ExternalLinkIcon ml={"2"} />
                                            }
                                        >
                                            Try it out
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>
                <Divider />
                {/* Try out Questions Card */}
                {/* Sample Dictionary */}
                <Center id="sampleQuestions" pt={"10"} pb={"5"} bg={bg}>
                    <Heading fontSize="3vw">Sample Dictionary</Heading>
                </Center>
                <Container mt="1.5em" minW="90vw" minH="120vh">
                    <Tabs>
                        <HStack bg={bg} p="0.5em" rounded="lg">
                            <Menu>
                                <MenuButton
                                    minW="5em"
                                    as={Button}
                                    rightIcon={<ChevronDownIcon />}
                                >
                                    All
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>N1</MenuItem>
                                    <MenuItem>N2</MenuItem>
                                    <MenuItem>N3</MenuItem>
                                    <MenuItem>N4</MenuItem>
                                    <MenuItem>N5</MenuItem>
                                </MenuList>
                            </Menu>
                            <InputGroup>
                                <Input variant="flushed" placeholder="Search" />
                                <IconButton icon={<Search2Icon />} />
                            </InputGroup>
                            <HStack minW="15%" ml="2em">
                                <ChevronLeftIcon />
                                <Text mx="2em">1 / 100</Text>
                                <ChevronRightIcon />
                            </HStack>
                            <TabList mr="2em">
                                <Tab minW="5em">Card</Tab>
                                <Tab minW="5em">List</Tab>
                            </TabList>
                        </HStack>

                        <Grid
                            templateColumns="repeat(3, 1fr)"
                            gap={5}
                            mt="2.5em"
                        >
                            <GridItem colSpan={1}>
                                {sample.map((obj) => {
                                    return (
                                        <Card
                                            bg={bg}
                                            borderRadius="lg"
                                            mb="1.5em"
                                            key={obj.id}
                                        >
                                            <CardBody>
                                                <HStack>
                                                    <Spacer />
                                                    <Text color="gray.400">{`${obj.hiragana}・${obj.romaji}`}</Text>
                                                </HStack>
                                                <Heading
                                                    py=".75em"
                                                    textAlign="center"
                                                    fontWeight="normal"
                                                >
                                                    {obj.kanji}
                                                </Heading>
                                            </CardBody>
                                            <CardFooter>
                                                <Text color="gray.400">{`- ${obj.meaning}`}</Text>
                                            </CardFooter>
                                        </Card>
                                    );
                                })}
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Container
                                    px="2.5em"
                                    minW="90%"
                                    bg={bg}
                                    rounded="lg"
                                    h="100vh"
                                >
                                    <HStack>
                                        <Tag
                                            bg={bg}
                                            my="2.5em"
                                            ml="2.5em"
                                            borderWidth="1px"
                                            borderColor={border}
                                            p="1em"
                                        >
                                            <TagLabel fontSize="3.5em">
                                                {sample[0].kanji}
                                            </TagLabel>
                                        </Tag>
                                        <Box ml="1em">
                                            <Text>Reading:</Text>
                                            <Text>{sample[0].hiragana}</Text>
                                            <Text>{sample[0].romaji}</Text>
                                        </Box>
                                    </HStack>
                                    <UnorderedList>
                                        {sample.map((val) => {
                                            return (
                                                <ListItem key={val.kanji}>
                                                    <Text color="gray.400">
                                                        決して譲らない,
                                                        失望をさせない,
                                                        決して置去りにはしない
                                                    </Text>
                                                    <Text
                                                        my="0.25em"
                                                        color="gray.400"
                                                    >
                                                        Sed ut perspiciatis,
                                                        unde omnis iste natus
                                                        error sit voluptatem
                                                        accusantium doloremque
                                                        laudantium,
                                                    </Text>
                                                    <Divider
                                                        borderColor={border}
                                                        mb="1.5em"
                                                    />
                                                </ListItem>
                                            );
                                        })}
                                    </UnorderedList>
                                </Container>
                            </GridItem>
                        </Grid>
                    </Tabs>
                </Container>
                {/* Sample Dictionary */}

                <Box minH="10vh" bg={bg}></Box>
            </Box>
        </Box>
    );
}
