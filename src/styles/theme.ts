import { extendTheme, Theme } from "@chakra-ui/react";

const customTheme = {
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      "html , body ": {
        bg: "gray.900",
        font: "gray.50",
        color: "gray.50",
      },
      p: {
        color: "gray.50",
      },
    },
  },
  colors: {
    gray: {
      "50": "#EEEEF2",
      "100": "#D1D2DC",
      "200": "#B3B5C6",
      "300": "#9699B0",
      "400": "#797D9A",
      "500": "#616480",
      "600": "#4B4D63",
      "700": "#353646",
      "800": "#1F2029",
      "900": "#181B23",
    },
  },
} as unknown as Theme;

export const theme = extendTheme(customTheme);
