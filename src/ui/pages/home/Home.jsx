import { Badge, Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import QuestionLevel from "../../components/QuestionLevel";
import QuestionType from "../../components/QuestionType";
import HomeUserProfileCard from "../../components/HomeUserProfileCard";
import KanaSelectorTab from "../kanas/KanaSelectorTab";
import ThemeColors from "../main/ThemeColors";

export default function Home() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const numberOfLevel = [1, 2, 3, 4, 5];

  return (
    <>
      <Box data-testid="home-container" pb={"5vw"}>
        <Divider minH="8vh" />
        <Box
          pt="7.5vh"
          h="91.5vh"
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
          <Flex>
            {/* User Profile Card*/}
            <HomeUserProfileCard />

            {/*Question Pages List*/}
            <Box>
              {/* WIP */}
              <Flex ml="35vw" maxW="60vw" mb="2.25vh">
                <Box p="1.5vh" bg={bg} borderRadius="lg">
                  <Text fontSize="2.25vh" fontWeight="bold">
                    Learn Kana
                    <Badge
                      fontSize="1.25vh"
                      ml=".75vw"
                      mb="1.5vh"
                      colorScheme="green"
                    >
                      New
                    </Badge>
                  </Text>
                </Box>
                <Spacer />
                <Box p="1.5vh" bg={bg} borderRadius="lg">
                  <Text fontSize="2.25vh" fontWeight="bold">
                    Kanji Questions
                    <Badge
                      fontSize="1.25vh"
                      ml=".75vw"
                      mb="1.5vh"
                      colorScheme="green"
                    >
                      New
                    </Badge>
                  </Text>
                </Box>
                <Spacer />
                <Box p="1.5vh" bg={bg} borderRadius="lg">
                  <Text fontSize="2.25vh" fontWeight="bold">
                    Vocab Questions
                    <Badge
                      fontSize="1.25vh"
                      ml=".75vw"
                      mb="1.5vh"
                      colorScheme="green"
                    >
                      New
                    </Badge>
                  </Text>
                </Box>
                <Spacer />
                <Box p="1.5vh" bg={bg} borderRadius="lg">
                  <Text fontSize="2.25vh" fontWeight="bold">
                    Grammar Questions
                    <Badge
                      fontSize="1.25vh"
                      ml=".75vw"
                      mb="1.5vh"
                      colorScheme="green"
                    >
                      New
                    </Badge>
                  </Text>
                </Box>
                <Spacer />
              </Flex>

              {/*Nan's Kana Pages */}
              <KanaSelectorTab />

              {/* Divider */}
              <Divider ml="35vw" maxW="60vw" my="2.5vh" />
              {/* Divider */}

              {/* Kanji Questions Container */}
              <Box
                minW="60vw"
                ml="35vw"
                bg={bg}
                p="5"
                borderRadius="10"
                boxShadow="lg"
              >
                {/* Kanji Questions */}
                <QuestionType type="Kanji" bg={bg}>
                  {numberOfLevel.map((num, index) => (
                    <QuestionLevel
                      index={index + 1}
                      key={index}
                      type="Kanji"
                    ></QuestionLevel>
                  ))}
                </QuestionType>
              </Box>
              <Divider ml="35vw" maxW="60vw" my="2.5vh" />
              {/* Vocab Questions Container */}
              <Box
                minW="60vw"
                ml="35vw"
                bg={bg}
                p="5"
                borderRadius="10"
                boxShadow="lg"
              >
                {/* Vocab Questions */}
                <QuestionType type="Vocab" bg={bg}>
                  {numberOfLevel.map((num, index) => (
                    <QuestionLevel index={index + 1} key={index} type="Vocab" />
                  ))}
                </QuestionType>
              </Box>

              {/* Divider */}
              <Divider ml="35vw" maxW="60vw" my="2.5vh" />
              {/* Divider */}

              {/* Grammar Questions Container */}
              <Box
                minW="60vw"
                ml="35vw"
                bg={bg}
                p="5"
                borderRadius="10"
                boxShadow="lg"
              >
                {/* Grammar Questions */}
                <QuestionType type="Grammar" bg={bg}>
                  {numberOfLevel.map((num, index) => (
                    <QuestionLevel index={index + 1} key={num} type="Grammar" />
                  ))}
                </QuestionType>
              </Box>
            </Box>

            {/* Home Page End */}
          </Flex>
          <Divider minH="5vh" />
        </Box>
      </Box>
    </>
  );
}
