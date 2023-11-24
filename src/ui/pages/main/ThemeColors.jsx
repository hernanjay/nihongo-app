import { useColorModeValue } from "@chakra-ui/react";

function ThemeColors() {
  return {
    body: useColorModeValue("light.100", "dark.100"),
    bg: useColorModeValue("light.200", "dark.200"),
    border: useColorModeValue("light.300", "dark.300"),
    fontColor: useColorModeValue("light.400", "dark.400"),
    success: useColorModeValue("light.500", "dark.500"),
    error: useColorModeValue("light.600", "dark.600"),
    warning: useColorModeValue("light.700", "dark.700"),
    info: useColorModeValue("light.800", "dark.800"),
  };
}

export default ThemeColors;
