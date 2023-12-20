//#region Imports
import { Box, Spacer } from "@chakra-ui/react";

// import { useUserContext } from "../../logic/hooks/user/useUserContext";
import NavbarLogo from "./navbar/NavbarLogo";
import NavbarTitle from "./navbar/NavbarTitle";
import NavbarContainer from "./navbar/NavbarContainer";
import NavbarButtonGroupContainer from "./navbar/NavbarButtonGroupContainer";
import NavbarUserLoggedInMenu from "./navbar/NavbarUserLoggedInMenu";
import NavbarUserLoggedOutMenu from "./navbar/NavbarUserLoggedOutMenu";
import { useQueryClient } from "@tanstack/react-query";
//#endregion

export default function NavBar() {
    const queryClient = useQueryClient();

    const user = queryClient.getQueryData(["user"]);
    console.log(user);

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
