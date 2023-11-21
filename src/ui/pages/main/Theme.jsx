// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
// 1. import `mode` function
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("dark.200", "white.100")(props),
      bg: mode("gray.200", "dark.200")(props),
    },
  }),
};

// 3. extend the theme
const theme = extendTheme({
  styles,
  config,
  colors: {
    dark: {
      100: "#3F4E4F", //Primary
      200: "#2C3639", //Seconday
      300: "#A27B5C", //Accent
      400: "#DCD7C9", //Accent
    },
    light: {
      100: "#CEE5D0", //Primary
      200: "#94B49F", //Seconday
      300: "#ECB390", //Accent
      400: "#ffffff", //Accent
    },
  },
  fonts: {
    body: `'Meiryo', sans-serif`,
  },
});

export default theme;
