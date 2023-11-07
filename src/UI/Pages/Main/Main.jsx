import React from 'react'
import { useState } from 'react';
import NavBar from '../../Components/NavBar'
import Login from '../Login/Login.Jsx';
import Register from '../Register/Register';
import HomePage from '../Home/Home';

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
            return <HomePage />
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
