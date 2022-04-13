import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Heading",
        color: "rgba(64, 64, 64, 1)",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Body-Regular",
        color: "rgba(64, 64, 64, 1)",
      },
      variants: {
        light: {
          fontFamily: "Body-Light",
        },
        "semi-bold": {
          fontFamily: "Body-SemiBold",
        },
        medium: {
          fontFamily: "Body-Medium",
        },
        bold: {
          fontFamily: "Body-Bold",
        },
        "extra-bold": {
          fontFamily: "Body-ExtraBold",
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "Body-Bold",
      },
      variants: {
        login: {
          color: "#fff",
          backgroundColor: "rgba(40, 167, 69, 1)",
          border: "none",
          borderRadius: "3px",

          _hover: {
            backgroundColor: "rgba(92, 184, 92, 1)",
          },
          _active: {
            backgroundColor: "rgba(92, 184, 92, 1)",
          },
          _focus: {
            backgroundColor: "rgba(92, 184, 92, 1)",
          },
        },
        save: {
          color: "#fff",
          backgroundColor: "rgba(92, 184, 92, 1)",
          border: "none",
          borderRadius: "3px",
          
          _hover: {
            backgroundColor: "rgba(40, 167, 69, 1)",
          },
          _active: {
            backgroundColor: "rgba(40, 167, 69, 1)",
          },
          _focus: {
            backgroundColor: "rgba(40, 167, 69, 1)",
          },
        },
        cancel: {
          color: "rgba(64, 64, 64, 1)",
          backgroundColor: "rgba(249, 249, 249, 1)",
          border: "1px solid rgba(64, 64, 64, 1)",
          borderRadius: "3px",

          _hover: {
            backgroundColor: "rgba(204, 204, 204, 1)",
          },
          _active: {
            backgroundColor: "rgba(204, 204, 204, 1)",
          },
          _focus: {
            backgroundColor: "rgba(204, 204, 204, 1)",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        borderColor: "rgba(204, 204, 204, 1)",
        borderRadius: "3px",
        fontFamily: "Body-Regular",
      },
    },
    TableContainer: {
      variants: {
        rounded: {
          marginTop: "1rem",
          marginBottom: "1rem",
          borderRadius: "3px",
        },
      },
    },
  },

  colors: {
    brandGreen: {
      100: "rgba(158, 235, 71, 1)",
      200: "rgba(32, 201, 151, 1)",
      300: "rgba(92, 184, 92, 1)",
      400: "rgba(40, 167, 69, 1)",
    },
    brandGrey: {
      100: "rgba(249, 249, 249, 1)",
      200: "rgba(204, 204, 204, 1)",
      300: "rgba(188, 188, 188, 1)",
      400: "rgba(64, 64, 64, 1)",
    },
    brandRed: {
      400: "rgba(255, 0, 0, 1)",
    },
    brandBlue: {
      400: "rgba(255, 0, 0, 1)",
      500: "rgba(66, 119, 255, 1)",
    },
  },

  fonts: {
    heading: "Heading",
    body: {
      400: "Body-Light",
      500: "Body-Regular",
      600: "Body-Medium",
      700: "Body-SemiBold",
      800: "Body-Bold",
      900: "Body-ExtraBold",
    },
  },
});

export default theme;