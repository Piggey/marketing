/* eslint-disable react/prop-types */
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8b0000",
    },
  },
});

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </ThemeProvider>
  );
}
