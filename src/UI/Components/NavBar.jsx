import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Swal from 'sweetalert2'
import {
    Flex, Box, Spacer, Stack, Text, Image, Avatar, AvatarBadge, Button, ButtonGroup, Menu, MenuButton, MenuList, MenuItem, IconButton
} from '@chakra-ui/react'

import { InfoOutlineIcon, SettingsIcon, ExternalLinkIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { getloginState, setloginState } from '../../Logic/LocalStorageManager';

function showAlertMsgLogout(navigate) {
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
                setloginState(false);
            })
        }
    })
}

export default function NavBar() {
    const navigate = useNavigate();
    const { toggleColorMode } = useColorMode();

    const colorMode = useColorMode().colorMode.toString();
    const bg = useColorModeValue('light.400', 'dark.100');

    function userLoginButtonGroup() {
        if (getloginState()) {
            return (
                <>
                    <Menu id='nav-bar-menu'>
                        <MenuButton
                            id='nav-bar-menu-button'
                            as={IconButton}
                            bg='transparent'
                            icon={
                                <Avatar size='sm' m={1}>
                                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                                </Avatar>
                            }
                        />
                        <MenuList >
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
                        bg='transparent'
                        onClick={() => {
                            showAlertMsgLogout(navigate);
                        }}>
                        Logout
                    </Button>
                    <Button variant='solid'
                        bg='transparent'
                        onClick={() => {
                            toggleColorMode();
                        }}
                    >
                        {colorMode === 'light' ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />}
                    </Button>
                </>

            )
        } else {
            return (
                <>
                    <Button variant='solid'
                        bg='transparent'
                        onClick={() => {
                            navigate('/register');
                        }}>
                        Register
                    </Button>
                    <Button variant='solid'
                        bg='transparent'
                        onClick={() => {
                            navigate('/login');
                        }}>
                        Login
                    </Button>
                    <Button variant='solid'
                        bg='transparent'
                        onClick={() => {
                            toggleColorMode();
                        }}
                    >
                        {colorMode === 'light' ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />}
                    </Button>
                </>
            )
        }
    }

    return (
        <Flex bg={bg} boxShadow='lg' w='100%' p={4} alignItems='center' gap='2'>
            <Box />
            <Image boxSize='40px' objectFit='cover' src='https://1.bp.blogspot.com/-0wXC6MMwTqs/Xrea7O9QSuI/AAAAAAABY1U/apyEhwKBcTws66j3jFVmQUD0dMvIO7GRwCNcBGAsYHQ/s400/study_school_jugyou_boy.png' alt='logo' />
            <Text fontSize='2xl'>N4・日本語・練習用・ツール</Text>
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
