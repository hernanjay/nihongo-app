import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
    Box, Flex, Stack, AbsoluteCenter, FormControl, FormLabel, Input, FormHelperText, Button, IconButton, Spacer, Card, CardHeader, CardBody, Text, Link, InputRightElement, InputLeftAddon, InputGroup
} from '@chakra-ui/react'

import { CheckIcon, ViewIcon, ViewOffIcon, ExternalLinkIcon, QuestionOutlineIcon, AtSignIcon } from '@chakra-ui/icons';

function showAlertMsgLogin() {
    Swal.fire(
        'User Logged In!',
        'You will be redirected',
        'success'
    )
}

export default function Login(props) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();

    return (
        <Box position='relative' h='80vh'>
            <AbsoluteCenter w='30vw' axis='both'>
                <Card variant='elevated' size='sm' boxShadow='dark-lg' px='5' py='5' >
                    <CardBody>

                        {/* Header */}
                        <Text fontSize='4xl'>Login</Text>
                        <Flex>
                            <Text fontSize='1xl' mr='1'>Don't have an account yet?</Text>
                            <Link onClick={() => {
                                navigate('/register');
                                props.pageUpdate();
                            }}>
                                Register <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Flex>

                        {/* Login Input */}
                        <FormControl isRequired>
                            <FormLabel mt='5'>Username</FormLabel>
                            <InputGroup size='sm'>
                                <InputLeftAddon children={<AtSignIcon />} />
                                <Input id='login-username-input' placeholder='Username' colorScheme='blackAlpha' type='text' />
                            </InputGroup>
                            <FormHelperText>
                                Enter your username.
                            </FormHelperText>

                            {/* Password Input */}
                            <FormLabel mt='5'>Password</FormLabel>
                            <InputGroup size='sm'>
                                <Input
                                    id='login-password-input'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement mr={2}>
                                    <IconButton icon={show ? <ViewOffIcon /> : <ViewIcon />} size='sm' variant='unstyled' isRound={true} onClick={handleClick} />
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText mb='5'>
                                Enter your password
                            </FormHelperText>

                            {/* Forgot password */}
                            <Flex>
                                <Spacer />
                                <Link onClick={() => {
                                    navigate('/recovery');
                                    props.pageUpdate();
                                }}>
                                    Forgot Password <QuestionOutlineIcon />
                                </Link>
                            </Flex>
                            <Flex>
                                <Spacer />
                                <Button leftIcon={<CheckIcon />} colorScheme='gray' variant='outline' borderColor='dark.100' mt={5}
                                    onClick={() => {
                                        showAlertMsgLogin();
                                        props.setIsLoggedIn(true);
                                        navigate('/home');
                                        props.pageUpdate();
                                    }}>
                                    Login
                                </Button>
                            </Flex>

                        </FormControl>
                    </CardBody>
                </Card>

            </AbsoluteCenter>
        </Box >
    )
}
