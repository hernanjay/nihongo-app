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
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const { user } = useUserContext();
  return (
    <Box position="fixed" minW="30vw" ml="2.5vw">
      <Card variant="outlined" bg="transparent" boxShadow="lg">
        <CardHeader
          roundedTop="xl"
          minH="20vh"
          backgroundImage="url('src/assets/josh-hild-2oDMoju8bfk-unsplash.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Center position="relative" top="15vh">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Center>
        </CardHeader>
        <CardBody minH="35vh" bg={bg}>
          <Box minH="12.5vh"></Box>
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
