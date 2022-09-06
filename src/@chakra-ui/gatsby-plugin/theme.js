import { extendTheme } from "@chakra-ui/react";

import "@fontsource/pacifico/400.css";

const theme = {
  fonts: {
    logo: "Pacifico",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#1f2c5a",
      },
    }),
  },
};

export default extendTheme(theme);
