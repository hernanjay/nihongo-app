import { useColorMode } from "@chakra-ui/react";
import NavbarUserMenu from "./NavbarUserMenu";
import ToggleColorModeButtonIcon from "./ToggleColorModeButtonIcon";
import NavbarToggleColorModeButton from "./NavbarToggleColorModeButton";

function NavbarUserLoggedInMenu() {
    const { toggleColorMode } = useColorMode();
    return (
        <>
            <NavbarUserMenu />
            <NavbarToggleColorModeButton
                variant="solid"
                bg="transparent"
                onClick={() => {
                    toggleColorMode();
                }}
            >
                <ToggleColorModeButtonIcon />
            </NavbarToggleColorModeButton>
        </>
    );
}

export default NavbarUserLoggedInMenu;
