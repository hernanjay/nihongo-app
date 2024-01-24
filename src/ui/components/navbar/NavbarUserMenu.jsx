import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Avatar,
    AvatarBadge,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavbarLogoutButton from "./NavbarLogoutButton";
import { useLogout } from "../../../logic/hooks/user/useLogout";
import ThemeColors from "../../pages/main/ThemeColors";
import {
    FiBookOpen,
    FiHome,
    FiList,
    FiLogOut,
    FiPieChart,
    FiUser,
    FiUsers,
} from "react-icons/fi";
import { useUser } from "../../../logic/hooks/user/useUser";

function NavbarUserMenu() {
    const { logout } = useLogout();
    const { user } = useUser();

    const { bg, hover } = ThemeColors();

    return (
        <Menu id="nav-bar-menu">
            <MenuButton
                id="nav-bar-menu-button"
                data-testid="nav-bar-menu-button"
                as={IconButton}
                bg="transparent"
                icon={
                    <Avatar name={user?.username} size="sm" m={1}>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                }
            />
            <MenuList bg={bg}>
                <MenuItem
                    bg="transparent"
                    _hover={{ bg: hover }}
                    icon={<FiHome />}
                    as={Link}
                    to="/"
                >
                    <Text>Home</Text>
                </MenuItem>
                {user?.role === "admin" && (
                    <MenuItem
                        bg="transparent"
                        _hover={{ bg: hover }}
                        icon={<FiPieChart />}
                        as={Link}
                        to="/admin"
                    >
                        Admin Dashboard
                    </MenuItem>
                )}

                <MenuItem
                    bg="transparent"
                    icon={<FiUser />}
                    _hover={{ bg: hover }}
                    as={Link}
                    to="/userprofile"
                >
                    User Profile
                </MenuItem>

                {(user?.role === "admin" || user?.role === "teacher") && (
                    <MenuItem
                        bg="transparent"
                        _hover={{ bg: hover }}
                        icon={<FiList />}
                        as={Link}
                        to="/student-list"
                    >
                        List of Students
                    </MenuItem>
                )}

                {user?.role === "admin" && (
                    <MenuItem
                        bg="transparent"
                        _hover={{ bg: hover }}
                        icon={<FiUsers />}
                        as={Link}
                        to="/users"
                    >
                        Manage Users
                    </MenuItem>
                )}

                {(user?.role === "teacher" || user?.role === "admin") && (
                    <MenuItem
                        bg="transparent"
                        _hover={{ bg: hover }}
                        icon={<FiBookOpen />}
                        as={Link}
                        to="/manage-questionaire"
                    >
                        Manage Questionaire
                    </MenuItem>
                )}

                <NavbarLogoutButton
                    bg="transparent"
                    icon={<FiLogOut />}
                    _hover={{ bg: hover }}
                    onClick={() => {
                        logout();
                    }}
                >
                    Logout
                </NavbarLogoutButton>
            </MenuList>
        </Menu>
    );
}

export default NavbarUserMenu;
