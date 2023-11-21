import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  useColorModeValue,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Image,
  Flex,
  Center,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  IconButton,
  Spacer,
  Card,
  InputRightAddon,
  CardBody,
  Text,
  Link,
  InputRightElement,
  InputLeftAddon,
  InputGroup,
  AbsoluteCenter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
  Stack,
  Wrap,
  WrapItem,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const UserProfile = () => {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  return (
    <Grid
      h="140vh"
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={4}
      bg={bg}
    >
      <GridItem rowSpan={2} colSpan={8} />
      <GridItem rowSpan={1} colSpan={2} />
      <GridItem rowSpan={1} colSpan={2}>
        <Image
          //objectFit='cover'
          maxW={{ base: "100%", sm: "200px" }}
          src="src\assets\character_boy_normal.png"
          alt="pictureForUserProfile"
          boxSize="320px"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Heading pb={4} size="md">
          User Profile
        </Heading>
        <Stack direction="row">
          <Stack>
            <FormControl>
              <FormLabel>Firstname</FormLabel>
              <Input type="firstName" placeholder="First name" />
            </FormControl>
            <FormControl>
              <FormLabel>Lastname</FormLabel>
              <Input type="lastName" placeholder="Last name" />
            </FormControl>
            <FormControl>
              <FormLabel>Cell Number</FormLabel>
              <Input type="cellNumber" placeholder="Cell number" />
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Input type="gender" placeholder="Gender" />
            </FormControl>
            <FormControl>
              <FormLabel>Birthday</FormLabel>
              <Input type="birthday" placeholder="Birthday" />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="address" placeholder="Address" />
            </FormControl>
          </Stack>
          <Divider orientation="vertical" />
          <Stack>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="userName" placeholder="Username" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
          </Stack>
        </Stack>
        <Wrap spacing={4} pt={4}>
          <WrapItem>
            <Button colorScheme="blue">Edit Profile</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="red">Cancel</Button>
          </WrapItem>
        </Wrap>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}></GridItem>
    </Grid>
    /* <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                bg={bg}
                w="50vw"
                variant="elevated"
                size="sm"
                boxShadow="lg"
                px="5"
                py="5"
                m="10"
            >
                <Image
                    //objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src="src\assets\character_boy_normal.png"
                    alt='pictureForUserProfile'
                    boxSize="320px"
                />
                <Stack>
                    <CardBody>
                        <header>
                            User Profile
                        </header>
                        <FormControl>
                            <FormLabel>Firstname</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Lastname</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Cell Number</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Birthday</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <Wrap spacing={4}>
                            <WrapItem>
                                <Button colorScheme='blue'>Edit Profile</Button>
                            </WrapItem>
                            <WrapItem>
                                <Button colorScheme='red'>Cancel</Button>
                            </WrapItem>
                        </Wrap>
                    </CardBody>
                </Stack>
            </Card> */
  );
  /*
    return (
        <Grid
            h="100vh"
            templateRows="repeat(5, 1fr)"
            templateColumns="repeat(8, 1fr)"
            gap={4}
            bg={bg}
        >
            <GridItem rowSpan={1} colSpan={8} />
            <GridItem rowSpan={4} colSpan={1} />
            
            <GridItem rowSpan={1} colSpan={3}>
                <Heading>User Profile</Heading>
                <Text fontSize='md'>Name</Text>
                <Editable defaultValue='John' bg='white' borderColor={"black"}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Text fontSize='md'>Surname</Text>
                <Editable defaultValue='Doe' bg='white' borderColor={"black"}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={3}
                justifyContent="center"
                alignContent="center"
                >
                <Image
                    src="src\assets\kakedasu_suit1.png"
                    boxSize="160px"
                    alt="pictureForUserProfile"
                ></Image>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} />
            <GridItem rowSpan={1} colSpan={2}>
                
            </GridItem>
            <GridItem rowSpan={1} colSpan={4}/>
            <GridItem rowSpan={1} colSpan={1} />
            <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize='md'>Birthday</Text>
                <Editable defaultValue='01/01' bg='white' borderColor={"black"}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Text fontSize='md'>Working since</Text>
                <Editable defaultValue='07/28/2023' bg='white' borderColor={"black"}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Text fontSize='md'>Department</Text>
                <Editable defaultValue='Dev G' bg='white' borderColor={"black"}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </GridItem>
            <GridItem colSpan={1} >
                <Text fontSize='md'>Position</Text>
                <Editable defaultValue='Junior R&D Engineer' bg='white' borderColor={"black"}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </GridItem>
            <GridItem colSpan={4} />
        </Grid>
    );
    */
    const bg = useColorModeValue("light.400", "dark.100");
    const border = useColorModeValue("dark.100", "light.400");
    return(
            <Grid
            h="140vh"
            templateRows="repeat(8, 1fr)"
            templateColumns="repeat(8, 1fr)"
            gap={4}
            bg={bg}
            >
                <GridItem rowSpan={1} colSpan={8} />
                <GridItem rowSpan={1} colSpan={3} />
                <GridItem rowSpan={1} colSpan={3}>
                    <Heading pb={4} size='md'>
                        User Profile
                    </Heading>
                    <Stack direction='row'>
                        <Stack>

                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input type='firstName' placeholder='First name' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Birthday</FormLabel>
                                <Input type='lastName' placeholder='Last name' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type='cellNumber' placeholder='Cell number' />
                            </FormControl>
                        </Stack>
                        <Divider orientation='vertical' />
                        <Stack>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type='userName' placeholder='Username' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Input type='email' placeholder='Email' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone</FormLabel>
                                <Input type='email' placeholder='Email' />
                            </FormControl>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Image
                        //objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src="src\assets\character_boy_normal.png"
                        alt='pictureForUserProfile'
                        boxSize="320px"
                    />
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} />
                <GridItem rowSpan={1} colSpan={3}>
                    <Heading pb={4} size='md'>
                        Address
                    </Heading>
                    <Stack direction='row'>
                        <Stack>

                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input type='firstName' placeholder='First name' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>City</FormLabel>
                                <Input type='lastName' placeholder='Last name' />
                            </FormControl>
                        </Stack>
                        <Divider orientation='vertical' />
                        <Stack>
                            <FormControl>
                                <FormLabel>Number</FormLabel>
                                <Input type='userName' placeholder='Username' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Zip</FormLabel>
                                <Input type='email' placeholder='Email' />
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
    )
};
export default UserProfile;
