import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Heading,
  Image,
  Center,
  FormControl,
  FormLabel,
  Input,
  Card,
  CardHeader, 
  CardFooter,
  CardBody,
  Text,
  Stack,
  Wrap,
  WrapItem,
  Divider,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import React from "react";
import HomeUserProfileCard from "../../components/HomeUserProfileCard";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";

const UserProfile = () => {
    const bg = useColorModeValue("light.400", "dark.100");
    const border = useColorModeValue("dark.100", "light.400");
    const { user } = useUserContext();
    return(
            <Grid
            h="140vh"
            templateRows="repeat(8, 1fr)"
            templateColumns="repeat(8, 1fr)"
            gap={4}
            bg={bg}
            >
                <GridItem rowSpan={1} colSpan={8} />
                <GridItem rowSpan={1} colSpan={2} />
                <GridItem rowSpan={1} colSpan={3}>
                    <Heading pb={4} size='md'>
                        User Profile
                    </Heading>
                    <Stack direction='row'>
                        <Stack>

                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input type='firstName' placeholder='First Name' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Birthday</FormLabel>
                                <Input type='lastName' placeholder='Birthday' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type='cellNumber' placeholder='Email' />
                            </FormControl>
                        </Stack>
                        <Divider orientation='vertical' />
                        <Stack>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type='userName' placeholder='Last Name' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Input type='email' placeholder='Gender' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone</FormLabel>
                                <Input type='email' placeholder='Phone' />
                            </FormControl>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    {/* <Image
                        //objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src="src\assets\character_boy_normal.png"
                        alt='pictureForUserProfile'
                        boxSize="150px"
                        borderRadius="full"
                    /> */}
                    {/* User Profile Card*/}
                    <HomeUserProfileCard />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2} />
                <GridItem rowSpan={1} colSpan={4}>
                    <Heading pb={4} size='md'>
                        Address
                    </Heading>
                    <Stack direction='row'>
                        <Stack>

                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input type='firstName' placeholder='Address' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>City</FormLabel>
                                <Input type='lastName' placeholder='City' />
                            </FormControl>
                        </Stack>
                        <Divider orientation='vertical' />
                        <Stack>
                            <FormControl>
                                <FormLabel>Number</FormLabel>
                                <Input type='userName' placeholder='Number' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Zip</FormLabel>
                                <Input type='email' placeholder='Zip' />
                            </FormControl>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} />
                <GridItem rowSpan={1} colSpan={2}>
                    <Wrap spacing={4} pt={4}>
                        <WrapItem>
                            <Button colorScheme='blue'>Save All</Button>
                        </WrapItem>
                        {/* <WrapItem>
                            <Button colorScheme='red'>Cancel</Button>
                        </WrapItem> */}
                    </Wrap>
                </GridItem>
            </Grid>
            // <Box pt={"7vw"} pb={"5vw"}>
            //     <Box
            //     pl={"1.5vw"}
            //     >
            //         <Box
            //         minW="30vw"
            //         mr="60vw"
            //         bg={bg}
            //         p="5"
            //         borderRadius="10"
            //         boxShadow="lg"
            //         >
            //             <Heading pb={4} size='md'>
            //                 User Profile
            //             </Heading>
            //             <Stack direction='row'>
            //                 <Stack>
            //                     <FormControl>
            //                         <FormLabel>First Name</FormLabel>
            //                         <Input type='firstName' placeholder='First Name' />
            //                     </FormControl>
            //                     <FormControl>
            //                     <FormLabel>Birthday</FormLabel>
            //                         <Input type='lastName' placeholder='Birthday' />
            //                     </FormControl>
            //                     <FormControl>
            //                         <FormLabel>Email</FormLabel>
            //                         <Input type='cellNumber' placeholder='Email' />
            //                     </FormControl>
            //                 </Stack>
            //                 <Divider orientation='vertical' />
            //                 <Stack>
            //                     <FormControl>
            //                         <FormLabel>Last Name</FormLabel>
            //                         <Input type='userName' placeholder='Last Name' />
            //                     </FormControl>
            //                     <FormControl>
            //                         <FormLabel>Gender</FormLabel>
            //                         <Input type='email' placeholder='Gender' />
            //                     </FormControl>
            //                     <FormControl>
            //                         <FormLabel>Phone</FormLabel>
            //                         <Input type='email' placeholder='Phone' />
            //                     </FormControl>
            //                 </Stack>
            //             </Stack>
            //             <Divider ml="35vw" maxW="30vw" my="2.5vh" />
            //             <Heading pb={4} size='md'>
            //                 Address
            //             </Heading>
            //             <Stack direction='row'>
            //                 <Stack>

            //                     <FormControl>
            //                         <FormLabel>Address</FormLabel>
            //                         <Input type='firstName' placeholder='Address' />
            //                     </FormControl>
            //                     <FormControl>
            //                         <FormLabel>City</FormLabel>
            //                         <Input type='lastName' placeholder='City' />
            //                     </FormControl>
            //                 </Stack>
            //                 <Divider orientation='vertical' />
            //                 <Stack>
            //                     <FormControl>
            //                         <FormLabel>Number</FormLabel>
            //                         <Input type='userName' placeholder='Number' />
            //                     </FormControl>
            //                     <FormControl>
            //                         <FormLabel>Zip</FormLabel>
            //                         <Input type='email' placeholder='Zip' />
            //                     </FormControl>
            //                 </Stack>
            //             </Stack>
            //         </Box>

            //         <Box position="fixed" minW="30vw" ml="2.5vw">
            //             <Card variant="outlined" bg="transparent" boxShadow="lg">
            //                 <CardHeader
            //                 roundedTop="xl"
            //                 minH="20vh"
            //                 backgroundImage="url('src/assets/josh-hild-2oDMoju8bfk-unsplash.jpg')"
            //                 backgroundSize="cover"
            //                 backgroundPosition="center"
            //                 >
            //                 <Center position="relative" top="15vh">
            //                     <Image
            //                     borderRadius="full"
            //                     boxSize="150px"
            //                     src="https://bit.ly/dan-abramov"
            //                     alt="Dan Abramov"
            //                     />
            //                 </Center>
            //                 </CardHeader>
            //                 <CardBody minH="35vh" bg={bg}>
            //                 <Box minH="12.5vh"></Box>
            //                 <Heading fontWeight="normal" textAlign="center">
            //                     @{user.username}
            //                 </Heading>
            //                 <Divider />
            //                 <Text fontWeight="normal" textAlign="center">
            //                     {user.email}
            //                 </Text>
            //                 </CardBody>
            //                 <CardFooter roundedBottom="xl" minH="20vh" bg={bg}></CardFooter>
            //             </Card>
            //             </Box>

            //     </Box>
            // </Box>
    )
};
export default UserProfile;