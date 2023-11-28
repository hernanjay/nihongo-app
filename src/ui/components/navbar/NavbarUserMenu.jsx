import {
  ChevronRightIcon,
  ExternalLinkIcon,
  InfoOutlineIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
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
import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import NavbarLogoutButton from "./NavbarLogoutButton";
import { useLogout } from "../../../logic/hooks/user/useLogout";

function NavbarUserMenu() {
  const { user } = useUserContext();

  const { logout } = useLogout();
  return (
    <Menu id="nav-bar-menu">
      <MenuButton
        id="nav-bar-menu-button"
        data-testid="nav-bar-menu-button"
        as={IconButton}
        bg="transparent"
        icon={
          <Avatar name={user.username} size="sm" m={1}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        }
      />
      <MenuList>
        <MenuItem icon={<ChevronRightIcon />} as={Link} to="/">
          <Text>Home</Text>
        </MenuItem>
        {user.role === "admin" && (
          <MenuItem icon={<ChevronRightIcon />} as={Link} to="/admin">
            Admin Dashboard
          </MenuItem>
        )}
        <MenuItem icon={<ChevronRightIcon />} as={Link} to="/userprofile">
          User Profile
        </MenuItem>
        <NavbarLogoutButton icon={<ChevronRightIcon />} onClick={logout}>
          Logout
        </NavbarLogoutButton>
      </MenuList>
    </Menu>
  );
}

export default NavbarUserMenu;
