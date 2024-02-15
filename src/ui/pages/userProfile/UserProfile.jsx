import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Heading,
    Image,
    Center,
    Input,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Text,
    Divider,
    Box,
    Grid,
    GridItem,
    HStack,
    VStack,
    Spacer,
    Container,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import ThemeColors from "../main/ThemeColors";
import UserProfileDrawerButton from "./UserProfileDrawerButton";
import { useProfile } from "../../../logic/hooks/user/useProfile";

const UserProfile = () => {
    const { bg } = ThemeColors();
    const { user } = useProfile();
    return (
        <Grid
            position="fixed"
            minW="100vw"
            minH="90vh"
            mt="10vh"
            templateColumns="repeat(11, 1fr)"
            gap={5}
        >
            <GridItem colSpan={2}>
                <Box
                    ml="1vw"
                    bg={bg}
                    boxShadow="lg"
                    roundedTopLeft="xl"
                    roundedBottomLeft="xl"
                    minH="86vh"
                >
                    <VStack mt="2.5vh" spacing={2} align="stretch">
                        <Spacer mt="5vh" />
                        <UserProfileDrawerButton
                            icon={<ChevronRightIcon ml="2vw" />}
                        >
                            User Profile
                        </UserProfileDrawerButton>
                        <Divider my="1.5vh" />
                        <UserProfileDrawerButton
                            icon={<ChevronRightIcon ml="2vw" />}
                        >
                            Button 1
                        </UserProfileDrawerButton>
                        <UserProfileDrawerButton
                            icon={<ChevronRightIcon ml="2vw" />}
                        >
                            Button 2
                        </UserProfileDrawerButton>
                        <UserProfileDrawerButton
                            icon={<ChevronRightIcon ml="2vw" />}
                        >
                            Button 3
                        </UserProfileDrawerButton>
                        <Divider my="1.5vh" />
                        <UserProfileDrawerButton
                            icon={<ChevronRightIcon ml="2vw" />}
                        >
                            Button 4
                        </UserProfileDrawerButton>
                        <UserProfileDrawerButton
                            icon={<ChevronRightIcon ml="2vw" />}
                        >
                            Button 5
                        </UserProfileDrawerButton>
                    </VStack>
                </Box>
            </GridItem>
            <GridItem colSpan={6}>
                <Box
                    boxShadow="lg"
                    bg={bg}
                    minW="90%"
                    mt="2.5vh"
                    maxH="86vh"
                    minH="86vh"
                    overflow="auto"
                    overscrollBehavior="auto"
                    sx={{
                        "&::-webkit-scrollbar": {
                            width: "10px",
                            borderRadius: "8px",
                            backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        },
                    }}
                >
                    <Container pt="5vh" minW="90%">
                        <Heading pb={4} fontSize="5vh">
                            User Profile
                        </Heading>
                        <Divider my="1.5vh" />
                        <Heading
                            pb={4}
                            mb="2vh"
                            fontSize="2.5vh"
                            fontWeight="normal"
                        >
                            Personal Information :
                        </Heading>
                        <VStack>
                            {/* Name */}
                            <InputGroup mb="2vh">
                                <InputLeftAddon
                                    fontSize="1.75vh"
                                    minW="5vw"
                                    children="Name:"
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="First Name"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Middle Name"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Last Name"
                                    isReadOnly
                                />
                            </InputGroup>

                            {/* Japanese Name */}
                            <InputGroup mb="2vh">
                                <InputLeftAddon
                                    fontSize="1.75vh"
                                    minW="5vw"
                                    children="名前:"
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="フルスト名前"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="ミッヅロ名前"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="ラスト名前"
                                    isReadOnly
                                />
                            </InputGroup>

                            {/* Nickname */}
                            <HStack minW="100%" mb="2vh">
                                <InputGroup>
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Nickname:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="Toto"
                                        isReadOnly
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        children="ニックネーム:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        Value="とと"
                                        isReadOnly
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        children="Suffix:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        Value="Sr."
                                        isReadOnly
                                    />
                                </InputGroup>
                            </HStack>
                        </VStack>
                        <Divider my="1.5vh" />
                        <Heading
                            pb={4}
                            mb="2vh"
                            fontSize="2.5vh"
                            fontWeight="normal"
                        >
                            Current Job Information :
                        </Heading>
                        <VStack>
                            <HStack minW="100%" mb="2vh">
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Current Job Title:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="Jr. R&D Engineer"
                                        isReadOnly
                                    />
                                </InputGroup>
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Company Name:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="Advanced World Solutions, Inc"
                                        isReadOnly
                                    />
                                </InputGroup>
                            </HStack>

                            <HStack minW="100%" mb="2vh">
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Business Unit:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="Dev G"
                                        isReadOnly
                                    />
                                </InputGroup>
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Location:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="Cebu IT Park"
                                        isReadOnly
                                    />
                                </InputGroup>
                            </HStack>

                            <HStack minW="100%" mb="2vh">
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Division:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="ESD"
                                        isReadOnly
                                    />
                                </InputGroup>
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Solution Development Group:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="SDG2"
                                        isReadOnly
                                    />
                                </InputGroup>
                            </HStack>
                        </VStack>

                        <Divider my="1.5vh" />
                        <Heading
                            pb={4}
                            mb="2vh"
                            fontSize="2.5vh"
                            fontWeight="normal"
                        >
                            Contact Information :
                        </Heading>
                        <VStack>
                            {/* Current Address */}
                            <InputGroup mb="2vh">
                                <InputLeftAddon
                                    fontSize="1.75vh"
                                    children="Current:"
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Street"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Town/City"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Province/Region"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Country"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Postal"
                                    isReadOnly
                                />
                            </InputGroup>

                            {/* Permanent Address*/}
                            <InputGroup mb="2vh">
                                <InputLeftAddon
                                    fontSize="1.75vh"
                                    children="Permanent:"
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Street"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Town/City"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Province/Region"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Country"
                                    isReadOnly
                                />
                                <Input
                                    fontSize="1.75vh"
                                    pl="1vw"
                                    type="text"
                                    variant="flushed"
                                    value="Postal"
                                    isReadOnly
                                />
                            </InputGroup>

                            {/* Contact Number */}
                            <HStack minW="100%" mb="2vh">
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Cellphone No:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="XXX-XXX-XXXX"
                                        isReadOnly
                                    />
                                </InputGroup>
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Phone No:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="XXX-XXX-XXXX"
                                        isReadOnly
                                    />
                                </InputGroup>
                            </HStack>

                            {/* Contact Person */}
                            <HStack minW="100%" mb="2vh">
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Contact person:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="XXX-XXX-XXXX"
                                        isReadOnly
                                    />
                                </InputGroup>
                                <InputGroup mb="2vh">
                                    <InputLeftAddon
                                        fontSize="1.75vh"
                                        minW="5vw"
                                        children="Contact number:"
                                    />
                                    <Input
                                        fontSize="1.75vh"
                                        pl="1vw"
                                        type="text"
                                        variant="flushed"
                                        value="XXX-XXX-XXXX"
                                        isReadOnly
                                    />
                                </InputGroup>
                            </HStack>
                        </VStack>
                    </Container>
                </Box>
            </GridItem>
            <GridItem colSpan={3} bg="transparent">
                <Card mr="1vw" my="2.5vh" bg="transparent">
                    <CardHeader
                        minH="20vh"
                        roundedTopRight="xl"
                        backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
                        backgroundSize="cover"
                        backgroundPosition="top"
                    >
                        <Center position="relative" top="10vh">
                            <Image
                                borderRadius="full"
                                boxSize="8vw"
                                src="https://bit.ly/dan-abramov"
                                alt="Dan Abramov"
                            />
                        </Center>
                    </CardHeader>
                    <CardBody minH="60vh" bg={bg}>
                        <Box mt="7vh">
                            <Heading
                                fontWeight="normal"
                                textAlign="center"
                                fontSize="3vh"
                            >
                                @{user.username}
                            </Heading>
                            <Divider my="1vh" />
                            <Text fontWeight="normal" textAlign="center">
                                {user.email}
                            </Text>
                        </Box>
                    </CardBody>
                    <CardFooter
                        minH="5vh"
                        bg="purple"
                        roundedBottomRight="xl"
                        backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
                        backgroundSize="cover"
                        backgroundPosition="bottom"
                    ></CardFooter>
                </Card>
            </GridItem>
        </Grid>
    );
};
export default UserProfile;
