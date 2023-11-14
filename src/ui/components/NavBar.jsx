import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";

import {
  Flex,
  Box,
  Spacer,
  Stack,
  Text,
  Image,
  Avatar,
  AvatarBadge,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import {
  InfoOutlineIcon,
  SettingsIcon,
  ExternalLinkIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";

import { useAuthContext } from "../../logic/hooks/useAuthContext";
import { useLogout } from "../../logic/hooks/useLogout";

export default function NavBar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();

  const colorMode = useColorMode().colorMode.toString();
  const bg = useColorModeValue("light.400", "dark.100");
  return (
    <Flex
      position="fixed"
      bg={bg}
      boxShadow="lg"
      w="100%"
      p={4}
      alignItems="center"
      gap="2"
      zIndex="5"
    >
      <Box />
      <Image
        boxSize="40px"
        objectFit="cover"
        src="https://1.bp.blogspot.com/-0wXC6MMwTqs/Xrea7O9QSuI/AAAAAAABY1U/apyEhwKBcTws66j3jFVmQUD0dMvIO7GRwCNcBGAsYHQ/s400/study_school_jugyou_boy.png"
        alt="logo"
      />
      <Text
        fontSize="2xl"
        onClick={() => {
          navigate("/home");
        }}
        style={{ cursor: "pointer" }}
      >
        N4・日本語・練習用・ツール
      </Text>
      <Spacer />
      <Stack direction="row" spacing={4} align="center" justify="center">
        <ButtonGroup>
          {user ? (
            <>
              <Menu id="nav-bar-menu">
                <MenuButton
                  id="nav-bar-menu-button"
                  as={IconButton}
                  bg="transparent"
                  icon={
                    <Avatar name={user.username} size="sm" m={1}>
                      <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                  }
                />
                <MenuList>
                  <MenuItem icon={<InfoOutlineIcon />}>
                    {user.username}
                  </MenuItem>
                  <MenuItem icon={<InfoOutlineIcon />}>User Profile</MenuItem>
                  <MenuItem icon={<SettingsIcon />}>User Settings</MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />}>Grades</MenuItem>
                </MenuList>
              </Menu>
              <Button variant="solid" bg="transparent" onClick={logout}>
                Logout
              </Button>
              <Button
                variant="solid"
                bg="transparent"
                onClick={() => {
                  toggleColorMode();
                }}
              >
                {colorMode === "light" ? (
                  <Icon as={SunIcon} />
                ) : (
                  <Icon as={MoonIcon} />
                )}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="solid"
                bg="transparent"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
              <Button
                variant="solid"
                bg="transparent"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                variant="solid"
                bg="transparent"
                onClick={() => {
                  toggleColorMode();
                }}
              >
                {colorMode === "light" ? (
                  <Icon as={SunIcon} />
                ) : (
                  <Icon as={MoonIcon} />
                )}
              </Button>
            </>
          )}
        </ButtonGroup>
      </Stack>
      <Box p="4" />
    </Flex>
  );
}
