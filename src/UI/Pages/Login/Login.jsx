import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useColorModeValue } from '@chakra-ui/react';
import { loginUser } from '../../../Logic/Controller/userController';

//Comment For Testing

import {
    Box, Flex, AbsoluteCenter, FormControl, FormLabel, Input, FormHelperText, Button, IconButton, Spacer, Card, CardBody, Text, Link, InputRightElement, InputLeftAddon, InputGroup
} from '@chakra-ui/react'

import { CheckIcon, ViewIcon, ViewOffIcon, ExternalLinkIcon, QuestionOutlineIcon, AtSignIcon } from '@chakra-ui/icons';
import { setloginState } from '../../../Logic/LocalStorageManager';

function showAlertMsgLogin(status) {
    if (status) {
        setloginState(true);
        Swal.fire(
            'User Logged In!',
            'You will be redirected',
            'success'
        )
    } else {
        Swal.fire(
            'User Does not Exist!',
            'Please check if username or password is correct',
            'error'
        )
    }
}

export default function Login() {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const bg = useColorModeValue('light.400', 'dark.100');
    const border = useColorModeValue('dark.100', 'light.400');

    return (
        <Box position='relative' h='80vh'>
            <AbsoluteCenter w='30vw' axis='both'>
                <Card bg={bg} variant='elevated' size='sm' boxShadow='lg' px='5' py='5' >
                    <CardBody>

                        {/* Header */}
                        <Text fontSize='4xl'>Login</Text>
                        <Flex>
                            <Text fontSize='1xl' mr='1'>Don't have an account yet?</Text>
                            <Link onClick={() => {
                                navigate('/register');
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
                                }}>
                                    Forgot Password <QuestionOutlineIcon />
                                </Link>
                            </Flex>
                            <Flex>
                                <Spacer />
                                <Button leftIcon={<CheckIcon />} variant='outline' borderColor={border} mt={5}
                                    onClick={() => {
                                        let userName = document.getElementById('login-username-input').value;
                                        let passWord = document.getElementById('login-password-input').value;
                                        if (loginUser(userName, passWord) !== 404) {
                                            showAlertMsgLogin(true);
                                            navigate('/home');
                                        } else {
                                            showAlertMsgLogin(false);
                                        }
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
