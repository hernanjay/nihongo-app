import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useUserContext } from "../../logic/hooks/user/useUserContext";
import ThemeColors from "../pages/main/ThemeColors";

function HomeUserProfileCard() {
  const { bg } = ThemeColors();
  const { user } = useUserContext();
  return (
    <Box
      position={{ base: "relative", lg: "fixed" }}
      minW={{ base: "90vw", lg: "30vw" }}
      ml={{ base: "2.5vw", lg: "2vw" }}
      mr={{ base: "2.5vw", lg: "0vw" }}
      mb="2.25vh"
    >
      <Card variant="outlined" bg="transparent" boxShadow="lg" minH="80vh">
        <CardHeader
          roundedTop="xl"
          minH="20vh"
          backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Center position="relative" top={{ base: "12.5vh", lg: "15vh" }}>
            <Image
              borderRadius="full"
              boxSize={{ base: "25vw", lg: "10vw" }}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Center>
        </CardHeader>
        <CardBody minH="35vh" bg={bg}>
          <Box minH={{ base: "5vh", lg: "12.5vh" }}></Box>
          <Heading fontWeight="normal" textAlign="center">
            @{user.username}
          </Heading>
          <Divider />
          <Text fontWeight="normal" textAlign="center">
            {user.email}
          </Text>
        </CardBody>
        <CardFooter roundedBottom="xl" minH="20vh" bg={bg}></CardFooter>
      </Card>
    </Box>
  );
}

export default HomeUserProfileCard;
