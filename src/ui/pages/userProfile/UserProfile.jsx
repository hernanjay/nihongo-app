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