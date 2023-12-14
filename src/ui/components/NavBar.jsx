//#region Imports
import { Box, Spacer } from "@chakra-ui/react";

// import { useUserContext } from "../../logic/hooks/user/useUserContext";
import NavbarLogo from "./navbar/NavbarLogo";
import NavbarTitle from "./navbar/NavbarTitle";
import NavbarContainer from "./navbar/NavbarContainer";
import NavbarButtonGroupContainer from "./navbar/NavbarButtonGroupContainer";
import NavbarUserLoggedInMenu from "./navbar/NavbarUserLoggedInMenu";
import NavbarUserLoggedOutMenu from "./navbar/NavbarUserLoggedOutMenu";
import { useProfile } from "../../logic/hooks/user/useProfile";
import { useUser } from "../../logic/hooks/user/useUser";
//#endregion

export default function NavBar() {
    //Retrieves user details
    const { user } = useUser();

    return (
        <NavbarContainer>
            <NavbarLogo />
            <NavbarTitle> 日本語・練習用・ツール</NavbarTitle>
            <Spacer />
            <NavbarButtonGroupContainer>
                {user ? (
                    <NavbarUserLoggedInMenu />
                ) : (
                    <NavbarUserLoggedOutMenu />
                )}
            </NavbarButtonGroupContainer>

            <Box p="4" />
        </NavbarContainer>
    );
}
