import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
    Flex, Center, FormControl, FormLabel, Input, FormHelperText, Button, IconButton, Spacer, Card, InputRightAddon, CardBody, Text, Link, InputRightElement, InputLeftAddon, InputGroup
} from '@chakra-ui/react'

import { CheckIcon, ViewIcon, ViewOffIcon, ExternalLinkIcon } from '@chakra-ui/icons'

function showAlertMsgRegister() {
    Swal.fire(
        'User Registered!',
        'You will be redirected',
        'success'
    )
}

export default function Register(props) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();

    return (
        <Center>
            <Card w='50vw' variant='elevated' size='sm' boxShadow='lg' px='5' py='5' m='10'>
                <CardBody>
                    <Text fontSize='4xl'>Register</Text>
                    <Flex>
                        <Text fontSize='1xl' mr='1'>Already have an account?</Text>
                        <Link onClick={() => {
                            navigate('/login');
                            props.pageUpdate();
                        }}>
                            Login <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Flex>
                    <FormControl isRequired>

                        {/* Username input Form */}
                        <FormLabel mt='3'>Username</FormLabel>
                        <InputGroup size='sm'>
                            <InputLeftAddon children='@' />
                            <Input id='register-username-input' placeholder='Username' colorScheme='blackAlpha' type='text' />
                        </InputGroup>
                        <FormHelperText>
                            Enter your username.
                        </FormHelperText>

                        {/*Email Input Form*/}
                        <FormLabel mt='3'>Email</FormLabel>
                        <InputGroup size='sm'>
                            <Input id='register-email-input' placeholder='Email' colorScheme='blackAlpha' type='email' />
                            <InputRightAddon children='@awsys-i.com' />
                        </InputGroup>
                        <FormHelperText>
                            Enter your email.
                        </FormHelperText>

                        {/* Password Input Form */}
                        <FormLabel mt='3'>Password</FormLabel>
                        <InputGroup size='sm'>
                            <Input
                                id='register-password-input'
                                type={show ? 'text' : 'password'}
                                placeholder='*******'
                            />
                            <InputRightElement mr={3}>
                                <IconButton icon={show ? <ViewOffIcon /> : <ViewIcon />} size='sm' variant='unstyled' isRound={true}
                                    onClick={handleClick} />
                            </InputRightElement>
                        </InputGroup>
                        <FormHelperText >
                            Enter your password.
                        </FormHelperText>
                        {/* Password Input Form */}
                        <FormLabel mt='3'>Verify Password</FormLabel>
                        <InputGroup size='sm'>
                            <Input
                                id='register-verify-password-input'
                                type={show ? 'text' : 'password'}
                                placeholder='*******'
                            />
                            <InputRightElement mr={3}>
                                <IconButton icon={show ? <ViewOffIcon /> : <ViewIcon />} size='sm' variant='unstyled' isRound={true} onClick={handleClick} />
                            </InputRightElement>
                        </InputGroup>
                        <FormHelperText >
                            Enter your password again.
                        </FormHelperText>
                        <Flex>
                            <Spacer />
                            <Button leftIcon={<CheckIcon />} colorScheme='gray' variant='outline' borderColor='dark.100' mt={3}
                                onClick={() => {
                                    showAlertMsgRegister();
                                    navigate('/login');
                                    props.pageUpdate();
                                }}>
                                Register
                            </Button>
                        </Flex>
                    </FormControl>
                </CardBody>
            </Card>
        </Center >
    )
}
