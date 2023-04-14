import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0072C6",
    },
    secondary: {
      main: "#9BC2E6",
    },
    background: {
      default: "#F7F7F7",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    h1: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "100px",
      fontWeight: "bold",
      color: "blue",
    },
    h2: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "70px",
      fontWeight: "bold",
      color: "red",
    },
    h3: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "40px",
      fontWeight: "bold",
      color: "#333333",
    },
    h4: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333333",
    },
    h5: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "15px",
      fontWeight: "bold",
      color: "#333333",
    },
    h6: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "15px",
      fontWeight: "bold",
      color: "#333333",
    },
    body1: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "10px",
      fontWeight: "normal",
      color: "#666666",
    },
    body2: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "10px",
      fontWeight: "normal",
      color: "#666666",
    },
    subtitle1: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "10px",
      fontWeight: "normal",
      color: "#666666",
    },
    subtitle2: {
      fontFamily: ["Roboto", "Open Sans"],
      fontSize: "10px",
      fontWeight: "normal",
      color: "#666666",
    },
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
        containedPrimary: {
          backgroundColor: "#0072C6",
          color: "#FFFFFF",
        },
        containedSecondary: {
          backgroundColor: "#FFFFFF",
          color: "#0072C6",
        },
        outlinedPrimary: {
          color: "#0072C6",
        },
      },
      defaultProps: {
        disableElevation: true,
        size: "large",
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            borderRadius: "4px",
            padding: "8px 16px",
            fontSize: "16px",
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            borderRadius: "4px",
            padding: "8px 16px",
            fontSize: "16px",
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderRadius: "4px",
            padding: "8px 16px",
            fontSize: "16px",
          },
        },
        {
          props: { variant: "text", color: "primary" },
          style: {
            fontSize: "16px",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "16px",
        },
      },
    },
  },
});
