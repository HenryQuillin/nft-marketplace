import { createTheme } from "@mui/material/styles"

export default createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#262B36",
        },
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#00B4C9",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#0B0E16",
      paper: "#111722",
      header: "#262B36",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255,255,255,0.5)",
    },
  },
  typography: {
    h5: {
      fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "1.3rem",
    },
    h6: {
      fontWeight: 400,
      lineHeight: 1.42,
      fontSize: "0.8rem",
    },
  },
})
