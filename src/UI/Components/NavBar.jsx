import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import {
    Flex, Box, Spacer, Stack, Text, Image, Avatar, AvatarBadge, Button, ButtonGroup, Menu, MenuButton, MenuList, MenuItem, IconButton
} from '@chakra-ui/react'

import { InfoOutlineIcon, SettingsIcon, ExternalLinkIcon } from '@chakra-ui/icons'

function showAlertMsgLogout(props, navigate, isLoggedIn) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out form your account!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log me out!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Logged Out!',
                'You will be redirected.',
                'success'
            ).then(() => {
                navigate('/login');
                props.pageUpdate();
                isLoggedIn(false);
            })
        }
    })
}

export default function NavBar(props) {
    const navigate = useNavigate();

    function userLoginButtonGroup() {
        if (props.isLoggedIn) {
            return (
                <>
                    <Menu id='nav-bar-menu'>
                        <MenuButton
                            id='nav-bar-menu-button'
                            as={IconButton}
                            icon={
                                <Avatar size='sm' m={1}>
                                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                                </Avatar>
                            }
                            variant='ghost'
                            bg='dark.100'
                            color='dark.100'
                            colorScheme='blackAlpha'
                        />
                        <MenuList color='dark.100'>
                            <MenuItem icon={<InfoOutlineIcon />} command='⌘T'>
                                User Profile
                            </MenuItem>
                            <MenuItem icon={<SettingsIcon />} command='⌘N'>
                                User Settings
                            </MenuItem>
                            <MenuItem icon={<ExternalLinkIcon />} command='⌘⇧N'>
                                Grades
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Button variant='solid'
                        bg='dark.100'
                        color='dark.400'
                        colorScheme='blackAlpha'
                        onClick={() => {
                            showAlertMsgLogout(props, navigate, props.setIsLoggedIn);
                        }}>
                        Logout
                    </Button>
                </>

            )
        } else {
            return (
                <>
                    <Button variant='solid'
                        bg='dark.100'
                        color='dark.400'
                        colorScheme='blackAlpha'
                        onClick={() => {
                            navigate('/register');
                            props.pageUpdate();
                        }}>
                        Register
                    </Button>
                    <Button variant='solid'
                        bg='dark.100'
                        color='dark.400'
                        colorScheme='blackAlpha'
                        onClick={() => {
                            navigate('/login');
                            props.pageUpdate();
                        }}>
                        Login
                    </Button>
                </>
            )
        }
    }

    return (
        <Flex boxShadow='lg' bg='dark.100' w='100%' p={4} color='white' alignItems='center' gap='2'>
            <Box />
            <Image mx={5} boxSize='50px' objectFit='cover' src='https://media.tenor.com/WBFzeBqRZgYAAAAi/gudetama-busy.gif' alt='logo' />
            <Text fontSize='3xl'>N4・日本語・練習用・ツール</Text>
            <Spacer />
            <Stack direction='row' spacing={4} align='center' justify="center">
                <ButtonGroup>
                    {userLoginButtonGroup()}
                </ButtonGroup>
            </Stack>
            <Box p='4' />
        </Flex>
    )
}
