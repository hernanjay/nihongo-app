import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Spinner, AbsoluteCenter } from '@chakra-ui/react'
import NavBar from '../../Components/NavBar'
import Login from '../Login/Login.Jsx';
import Register from '../Login/Register';

export default function Home() {
    const [hasChanged, setHasChanged] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const currentPath = window.location.href.split(window.location.origin)[1];

    function updatePage() {
        setHasChanged(!hasChanged);
    }

    function getPage() {
        if (currentPath === '/#/login') {
            return <Login pageUpdate={updatePage} setIsLoggedIn={setIsLoggedIn} />
        } else if (currentPath === '/#/register') {
            return <Register pageUpdate={updatePage} />
        } else {
            return (
                <>
                    <Box position='relative' h='80vh'>
                        <AbsoluteCenter p='4' color='white' axis='both'>
                            <Spinner size='xl' color='blue.500' />
                        </AbsoluteCenter>
                    </Box>
                </>
            )
        }
    }

    return (
        <>
            <NavBar
                pageUpdate={updatePage}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            {getPage()}
        </>
    )
}
